// Run all this to figure out where the user currently is
var locationID;
function getCurrentLocation() {
  //get geolocation of the user
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude, " ", longitude);

      //decide which health authority the user belongs to

      if (latitude > 49 && longitude < -121) {
        locationID = "7TVhl0XTvb17Kj7e2VNa";
        console.log("fraserhealth", locationID);
      } else if (latitude < 49 && longitude < -121) {
        locationID = "svN4aQvBZDPG4CYbPQJR";
        console.log("islandhealth");
      } else if (latitude < 49 && longitude > -121) {
        locationID: "i9k0csjI8D4j1qO5SRBh";
        console.log("northernhealth");
      } else if (latitude > 49 && longitude > -121) {
        locationID: "QxuzllDeJsANXlK485jy";
        console.log("vancouverhealth");
      } else if (latitude = 49 && (longitude = -121)) {
        locationID: "eGT8jGFAvzKAhO5du1Rz";
        console.log("interiorhealth");
      }

      locationID = doc.id;
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
getCurrentLocation();

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      //------------------------------------------------------------------------------------------
      // The code below is modified from default snippet provided by the FB documentation.
      //
      // If the user is a "brand new" user, then create a new "user" in your own database.
      // Assign this user with the name and email provided.
      // Before this works, you must enable "Firestore" from the firebase console.
      // The Firestore rules must allow the user to write.
      //------------------------------------------------------------------------------------------
      var user = authResult.user; // get the user object from the Firebase authentication database
      if (authResult.additionalUserInfo.isNewUser) {
        //if new user
        db.collection("users")
          .doc(user.uid)
          .set({
            //write to firestore. We are using the UID for the ID in users collection
            name: user.displayName,
            email: user.email,
            country: "Canada",
            school: "BCIT",
          })
          .then(function () {
            //
            console.log("New user added to firestore:" + user.displayName);
            localStorage.setItem("userName", user.displayName);

            window.location.assign("eachLocation.html?ID=" + locationID); //re-direct to main.html after signup
          })
          .catch(function (error) {
            console.log("Error adding new user: " + error);
          });
      } else {
        return true;
      }
      return false;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById("loader").style.display = "none";
    },
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: "popup",
  signInSuccessUrl: "eachLocation.html?ID=" + locationID,
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
  // Terms of service url.
  tosUrl: "<your-tos-url>",
  // Privacy policy url.
  privacyPolicyUrl: "<your-privacy-policy-url>",
};

ui.start("#firebaseui-auth-container", uiConfig);
