// Retrieve the value of the 'docId' key from local storage
var docID = localStorage.getItem('docId');
console.log(docID);

var userName = localStorage.getItem('userName');
console.log(userName);

var currweather1 = localStorage.getItem('currweather1') + "°C";
console.log(currweather1);

function getHikeName(id) {
    db.collection("locations")
      .doc(id)
      .get()
      .then((thisHike) => {
        var hikeName = thisHike.data().locationName;
        var hikeCode = thisHike.data().code;
        document.getElementById("hikeName").innerHTML = hikeName;
        document.getElementById("hikeCode").innerHTML = hikeCode;
          });
}

getHikeName(docID);

function writeReview() {
    console.log("inside write review")
    let Flooded = document.querySelector('input[name="flooded"]:checked').value;
    //console.log(Flooded);
    if (Flooded === "More Cooler") {
        Flooded = localStorage.getItem("currweather1");
        Flooded = parseFloat(Flooded) - 5 + "°C";
      } else if ( Flooded === "Cooler") {
        Flooded = localStorage.getItem("currweather1");
        Flooded = parseFloat(Flooded) - 2 + "°C";
      } 
        else if ( Flooded === "Same") {
        Flooded = "The experts were right"+ localStorage.getItem("currweather1") + "°C";
        
      } 
      else if ( Flooded === "Hotter") {
        Flooded = localStorage.getItem("currweather1");
        Flooded = parseFloat(Flooded) + 2 + "°C";
      } 
      else if ( Flooded === "More Hotter") {
        Flooded =  localStorage.getItem("currweather1");
        Flooded = parseFloat(Flooded) + 5 + "°C";
      } 


    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var currentUser = db.collection("users").doc(user.uid)
            //var locationName = db.collection("locations").doc(locationName); //added
            //var locationCode = db.collection("locations").doc(code); //added
            var userID = user.uid;
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    var userEmail = userDoc.data().email;



                    db.collection("Temperatures").add({
                        // hikeDocID: hikeDocID,
                        userID: userID,
                        userName: userName,
                        locationDocID: docID,
                        temperature: currweather1,
                        flooded: Flooded,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    }).then(() => {
                        window.location.href = "eachLocation.html"; //new line added
                    })
                })
        } else {
            console.log("No user is signed in");
            window.location.href = 'review.html';
        }
    });
}