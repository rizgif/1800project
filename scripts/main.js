function insertNameFromFirestore() {
    //check if user is logged in
    firebase.auth().onAuthStateChanged(user => {
        if (user) { //if user logged in
            console.log(user.uid)
            db.collection("users").doc(user.uid).get().then(userDoc => {
                // console.log(userDoc.data().name)
                userName = userDoc.data().name;
                // console.log(userName)
                document.getElementById("name-goes-here").innerHTML = userName;

            })
        }
    })

}

insertNameFromFirestore();

// fraser health
// Get a reference to the button by its ID
var button1 = document.getElementById('confirm-fh');

// Add a click event listener to the button
button1.addEventListener('click', function() {  
  // Create a new object with the data to be added to the database
  var data = {
    locationName: "Fraser Health"
    // add more data fields as needed
  };

  // Get a reference to the "locations" collection in Firebase
  var locationsRef = firebase.firestore().collection("locations");

  // Add the new data to the "locations" collection
  locationsRef.add(data)
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
});


//interior health
// Get a reference to the button by its ID
var button2 = document.getElementById('comfirm-inter');

// Add a click event listener to the button
button2.addEventListener('click', function() {  
  // Create a new object with the data to be added to the database
  var data = {
    locationName: "Interior Health"
    // add more data fields as needed
  };

  // Get a reference to the "locations" collection in Firebase
  var locationsRef = firebase.firestore().collection("locations");
  // Add the new data to the "locations" collection
  locationsRef.add(data)
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
});


//island health
var button3 = document.getElementById('comfirm-island');

// Add a click event listener to the button
button3.addEventListener('click', function() {  
  // Create a new object with the data to be added to the database
  var data = {
    locationName: "Island Health"
    // add more data fields as needed
  };

  // Get a reference to the "locations" collection in Firebase
  var locationsRef = firebase.firestore().collection("locations");
  // Add the new data to the "locations" collection
  locationsRef.add(data)
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
});


//northern health
var button4 = document.getElementById('comfirm-nh');

// Add a click event listener to the button
button4.addEventListener('click', function() {  
  // Create a new object with the data to be added to the database
  var data = {
    locationName: "Northern Health"
    // add more data fields as needed
  };

  // Get a reference to the "locations" collection in Firebase
  var locationsRef = firebase.firestore().collection("locations");
  // Add the new data to the "locations" collection
  locationsRef.add(data)
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
});


//vancouver coastal health
var button5 = document.getElementById('comfirm-vch');

// Add a click event listener to the button
button5.addEventListener('click', function() {  
  // Create a new object with the data to be added to the database
  var data = {
    locationName: "Vancouver Coastal Health"
    // add more data fields as needed
  };

  // Get a reference to the "locations" collection in Firebase
  var locationsRef = firebase.firestore().collection("locations");
  // Add the new data to the "locations" collection
  locationsRef.add(data)
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
});
