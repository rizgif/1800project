//Global variable pointing to the current user's Firestore document
var currentUser;

//Function that calls everything needed for the main page
function doAll() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      currentUser = db.collection("users").doc(user.uid); //global
      console.log(currentUser);
      insertNameFromFirestore();
      // displayCardsDynamically("locations");
    } else {
      // No user is signed in.
      console.log("No user is signed in");
      window.location.href = "login.html";
    }
  });
}
doAll();

// Insert name function using the global variable "currentUser"
function insertNameFromFirestore() {
  currentUser.get().then((userDoc) => {
    //get the user name
    var user_Name = userDoc.data().name;
    console.log(user_Name);
    $("#name-goes-here").text(user_Name); //jquery
  });
}

function writeLocations() {
  //define a variable for the collection you want to create in Firestore to populate data

  var locationRef = db.collection("locations");

  locationRef.add({
    code: "fraserhealth",
    name: "Fraser Health",
  });

  locationRef.add({
    code: "interiorhealth",
    name: "Interior Health",
  });
  locationRef.add({
    code: "islandhealth",
    name: "Island Health",
  });
  locationRef.add({
    code: "vancouver",
    name: "Vancouver Coastal Health",
  });
  locationRef.add({
    code: "northernhealth",
    name: "Northern Health",
  });
}

//------------------------------------------------------------------------------
// Input parameter is a string representing the collection we are reading from
//------------------------------------------------------------------------------
function displayCardsDynamically(collection) {
  let cardTemplate = document.getElementById("locationCardTemplate");
  console.log("display Cards start!");

  db.collection(collection)
    //.orderBy("timestamp") //NEW LINE; what do you want to sort by?
    //.limit(5) //NEW LINE: how many do you want to get?
    .get()

    .then((allLocations) => {
      allLocations.forEach((doc) => {
        //iterate thru each doc
        var title = doc.data().name; // get value of the "name" key
        var locationCode = doc.data().code;
        var ID = doc.id;
        console.log(ID);
        let newcard = cardTemplate.content.cloneNode(true);

        //update title and text and image etc.
        newcard.querySelector(".card-title").innerHTML = title;
        console.log(title);
        newcard.querySelector(
          ".card-image"
        ).src = `./images/${locationCode}.jpg`; //Example: NV01.jpg
        newcard.querySelector("a").href = "eachLocation.html?ID=" + ID;

        document.getElementById(collection + "-go-here").appendChild(newcard);
      });
    });
}

displayCardsDynamically("locations"); //input param is the name of the collection