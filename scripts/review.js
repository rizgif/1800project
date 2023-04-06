let params = new URL(window.location.href); //get the url from the search bar
let ID = params.searchParams.get("ID");

console.log(ID);

var userName = localStorage.getItem("userName");

var currweather1 = localStorage.getItem("currweather1") + "°C";

function getLocationName(id) {
  console.log(id);
  db.collection("locations")
    .doc(id)
    .get()
    .then((thisLocation) => {
      var locationName = thisLocation.data().name;
      var locationCode = thisLocation.data().code;
      document.getElementById("locationName").innerHTML = locationName;
      console.log(locationName);
      document.getElementById("locationCode").innerHTML = locationCode;
      console.log(locationCode);
    });
}

getLocationName(ID);

function writeReview() {
  console.log("inside write review");
  let feelslikeTemperature = document.querySelector(
    'input[name="feelslikeTemperature"]:checked'
  ).value;
  if (feelslikeTemperature === "More Cooler") {
    feelslikeTemperature = localStorage.getItem("currweather1");
    feelslikeTemperature = parseFloat(feelslikeTemperature) - 5 + "°C";
  } else if (feelslikeTemperature === "Cooler") {
    feelslikeTemperature = localStorage.getItem("currweather1");
    feelslikeTemperature = parseFloat(feelslikeTemperature) - 2 + "°C";
  } else if (feelslikeTemperature === "Same") {
    feelslikeTemperature =
      "The experts were right" + localStorage.getItem("currweather1") + "°C";
  } else if (feelslikeTemperature === "Hotter") {
    feelslikeTemperature = localStorage.getItem("currweather1");
    feelslikeTemperature = parseFloat(feelslikeTemperature) + 2 + "°C";
  } else if (feelslikeTemperature === "More Hotter") {
    feelslikeTemperature = localStorage.getItem("currweather1");
    feelslikeTemperature = parseFloat(feelslikeTemperature) + 5 + "°C";
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var currentUser = db.collection("users").doc(user.uid);
      var userID = user.uid;
      //get the document for current user.
      currentUser.get().then((userDoc) => {
        db.collection("Temperatures")
          .add({
            userID: userID,
            userName: userName,
            locationDocID: ID,
            actualTemperature: currweather1,
            feelslikeTemperature: feelslikeTemperature,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          })
          .then(() => {
            window.location.href = "eachLocation.html?ID=" + ID; //new line added
          });
      });
    } else {
      console.log("No user is signed in");
      window.location.href = "review.html";
    }
  });
}
