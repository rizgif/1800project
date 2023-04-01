//Global variable pointing to the current user's Firestore document
var currentUser;   

//Function that calls everything needed for the main page  
function doAll() {
    firebase.auth().onAuthStateChanged(user => {
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
  currentUser.get().then(userDoc => {
      //get the user name
      var user_Name = userDoc.data().name;
      console.log(user_Name);
      $("#name-goes-here").text(user_Name); //jquery
      // document.getElementByID("name-goes-here").innetText=user_Name;
  })
}


function writeLocations() {
  //define a variable for the collection you want to create in Firestore to populate data

  var hikesRef = db.collection("locations");

  hikesRef.add({
      code: "fraserhealth",
      name: "Fraser Health"
  });
 
  hikesRef.add({
      code: "interiorhealth",
      name: "Interior Health"
  });
  hikesRef.add({
      code: "islandhealth",
      name: "Island Health" 
  });
  hikesRef.add({
    code: "vancouver",
    name: "Vancouver Coastal Health" 
});
  hikesRef.add({
    code: "northernhealth",
    name: "Northern Health" 
  });
}


//------------------------------------------------------------------------------
// Input parameter is a string representing the collection we are reading from
//------------------------------------------------------------------------------
function displayCardsDynamically(collection) {
    let cardTemplate = document.getElementById("hikeCardTemplate");
    console.log("display Cards start!")

    db.collection(collection)
        // .orderBy("hike_time") //NEW LINE; what do you want to sort by?
        // .limit(2) //NEW LINE: how many do you want to get?
        .get() //the collection called "hikes"

        .then(allHikes => {
            //var i = 1;  //Optional: if you want to have a unique ID for each hike
            allHikes.forEach(doc => { //iterate thru each doc
                var title = doc.data().name; // get value of the "name" key
                // var details = doc.data().details; // get value of the "details" key
                var hikeCode = doc.data().code; //get unique ID to each hike to be used for fetching right image
                // var hikeLength = doc.data().length; //gets the length field
                var ID = doc.id;
                console.log(ID);
                let newcard = cardTemplate.content.cloneNode(true);

                //update title and text and image etc.
                newcard.querySelector('.card-title').innerHTML = title;
                console.log(title)
                //newcard.querySelector('.card-length').innerHTML = hikeLength + "km";
                // newcard.querySelector('.card-text').innerHTML = details;
                newcard.querySelector('.card-image').src = `./images/${hikeCode}.jpg`; //Example: NV01.jpg
                newcard.querySelector('a').href = "eachLocation.html?ID=" + ID;
                //alert(docId)

                //localStorage.setItem("docId", docId);
                

                //NEW LINE: update to display length, duration, last updated
                // newcard.querySelector('.card-length').innerHTML =
                //     "Length: " + doc.data().length + " km <br>" +
                //     "Duration: " + doc.data().hike_time + "min <br>" +
                //     "Last updated: " + doc.data().last_updated.toDate().toLocaleDateString();

                //NEW LINES: next 2 lines are new for demo#11
                //this line sets the id attribute for the <i> tag in the format of "save-hikdID" 
                //so later we know which hike to bookmark based on which hike was clicked
                // newcard.querySelector('i').id = 'save-' + docID;
                // // this line will call a function to save the hikes to the user's document             
                // newcard.querySelector('i').onclick = () => saveBookmark(docID);


                currentUser.get().then(userDoc => {
                    //get the user name
                    var bookmarks = userDoc.data().bookmarks;
                    if (bookmarks.includes(docId)) {
                       document.getElementById('save-' + hikeID).innerText = 'bookmark';
                    }
              })

                //Finally done modifying newcard
                //attach to gallery, Example: "hikes-go-here"
                document.getElementById(collection + "-go-here").appendChild(newcard);

                //i++;   //Optional: iterate variable to serve as unique ID
            })
        })
}

displayCardsDynamically("locations");  //input param is the name of the collection
console.log("display Cards worked!")
//-----------------------------------------------------------------------------
// This function is called whenever the user clicks on the "bookmark" icon.
// It adds the hike to the "bookmarks" array
// Then it will change the bookmark icon from the hollow to the solid version. 
//-----------------------------------------------------------------------------
function saveBookmark(hikeDocID) {
    currentUser.set({
            bookmarks: firebase.firestore.FieldValue.arrayUnion(hikeDocID)
        }, {
            merge: true
        })
        .then(function () {
            console.log("bookmark has been saved for: " + currentUser);
            var iconID = 'save-' + hikeDocID;
            //console.log(iconID);
						//this is to change the icon of the hike that was saved to "filled"
            document.getElementById(iconID).innerText = 'bookmark';
        });
}