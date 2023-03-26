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

            // figure out what day of the week it is today
            const weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
            const d = new Date();
            let day = weekday[d.getDay()];

            // the following functions are always called when someone is logged in
            readQuote(day);
            insertNameFromFirestore();
            displayCardsDynamically("hikes");
        } else {
            // No user is signed in.
            console.log("No user is signed in");
            window.location.href = "login.html";
        }
    });
}
doAll();






// displays the quote based in input param string "tuesday", "monday", etc. 
function readQuote( day ) {
    db.collection( "quotes" ).doc( day ).onSnapshot( doc => {
        console.log("inside");
        console.log( doc.data() );
        document.getElementById( "quote-goes-here" ).innerHTML = doc.data().quote;
    } )
}
// Comment out the next line (we will call this function from doAll())
// readQuote("tuesday");       





// Insert name function using the global variable "currentUser"
function insertNameFromFirestore() {
    currentUser.get().then(userDoc => {
        //get the user name
        var user_Name = userDoc.data().name;
        console.log(user_Name);
        $("#name-goes-here").text(user_Name); //jquery
        // document.getElementByID("name-goes-here").innetText=user_Name;
    })
}
// Comment out the next line (we will call this function from doAll())
// insertNameFromFirestore();





function writeHikes() {
    //define a variable for the collection you want to create in Firestore to populate data
    var hikesRef = db.collection("hikes");

    hikesRef.add({
        code: "BBY01",
        name: "Burnaby Lake Park Trail", //replace with your own city?
        city: "Burnaby",
        province: "BC",
        level: "easy",
				details: "A lovely place for lunch walk",
        length: 10,          //number value
        hike_time: 60,       //number value
        lat: 49.2467097082573,
        lng: -122.9187029619698,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
    hikesRef.add({
        code: "AM01",
        name: "Buntzen Lake Trail", //replace with your own city?
        city: "Anmore",
        province: "BC",
        level: "moderate",
        details: "Close to town, and relaxing",
        length: 10.5,      //number value
        hike_time: 80,     //number value
        lat: 49.3399431028579,
        lng: -122.85908496766939,
        last_updated: firebase.firestore.Timestamp.fromDate(new Date("March 10, 2022"))
    });
    hikesRef.add({
        code: "NV01",
        name: "Mount Seymour Trail", //replace with your own city?
        city: "North Vancouver",
        province: "BC",
        level: "hard",
        details:  "Amazing ski slope views",
        length: 8.2,        //number value
        hike_time: 120,     //number value
        lat: 49.38847101455571,
        lng: -122.94092543551031,
        last_updated: firebase.firestore.Timestamp.fromDate(new Date("January 1, 2023"))
    });
}

insertNameFromFirestore();

// fraser health
// Get a reference to the button by its ID
var button1 = document.getElementById('confirm-fh');

// Add a click event listener to the button
button1.addEventListener('click', function() {  
  // Create a new object with the data to be added to the database
  var data = {
    code: "fraserhealth",
    locationName: "Fraser Health"
    // add more data fields as needed
  };

  // Get a reference to the "locations" collection in Firebase
  var locationsRef = firebase.firestore().collection("locations");

  // Add the new data to the "locations" collection
  locationsRef.add(data)
    .then(function(docRef) {
      window.location.href = 'eachLocation.html';
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });

    // window.location.href = 'eachhike.html';
});


//interior health
// Get a reference to the button by its ID
var button2 = document.getElementById('comfirm-inter');

// Add a click event listener to the button
button2.addEventListener('click', function() {  
  // Create a new object with the data to be added to the database
  var data = {
    code: "interiorhealth",
    locationName: "Interior Health"
    // add more data fields as needed
  };

  // Get a reference to the "locations" collection in Firebase
  var locationsRef = firebase.firestore().collection("locations");
  // Add the new data to the "locations" collection
  locationsRef.add(data)
    .then(function(docRef) {
      window.location.href = 'eachLocation.html';
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });

    // window.location.href = 'eachhike.html';
});


//island health
var button3 = document.getElementById('comfirm-island');

// Add a click event listener to the button
button3.addEventListener('click', function() {  
  // Create a new object with the data to be added to the database
  var data = {
    code:"islandhealth",
    locationName: "Island Health"
    // add more data fields as needed
  };

  // Get a reference to the "locations" collection in Firebase
  var locationsRef = firebase.firestore().collection("locations");
  // Add the new data to the "locations" collection
  locationsRef.add(data)
    .then(function(docRef) {
      window.location.href = 'eachLocation.html';
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });

    // window.location.href = 'eachhike.html';
});


//northern health
var button4 = document.getElementById('comfirm-nh');

// Add a click event listener to the button
button4.addEventListener('click', function() {  
  // Create a new object with the data to be added to the database
  var data = {
    code:"northernhealth",
    locationName: "Northern Health"
    // add more data fields as needed
  };

  // Get a reference to the "locations" collection in Firebase
  var locationsRef = firebase.firestore().collection("locations");
  // Add the new data to the "locations" collection
  locationsRef.add(data)
    .then(function(docRef) {
      window.location.href = 'eachLocation.html';
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });

    // window.location.href = 'eachhike.html';
});


//vancouver coastal health
var button5 = document.getElementById('comfirm-vch');

// Add a click event listener to the button
button5.addEventListener('click', function() {  
  // Create a new object with the data to be added to the database
  var data = {
    code:"vancouver",
    locationName: "Vancouver Coastal Health"
    // add more data fields as needed
  };

  // Get a reference to the "locations" collection in Firebase
  var locationsRef = firebase.firestore().collection("locations");
  // Add the new data to the "locations" collection
  locationsRef.add(data)
    .then(function(docRef) {
      window.location.href = 'eachLocation.html';
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });

    
});


// 