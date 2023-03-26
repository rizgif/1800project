var hikeDocID = localStorage.getItem("hikeDocID");
console.log(hikeDocID)

function getHikeName(id) {
    db.collection("locations")
      .doc(id)
      .get()
      .then((thisHike) => {
        var hikeName = thisHike.data().locationName;
        document.getElementById("hikeName").innerHTML = hikeName;
          });
}

getHikeName(hikeDocID);

function writeReview() {
    console.log("inside write review")
    let Flooded = document.querySelector('input[name="flooded"]:checked').value;
    //console.log(Flooded);

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
                        locationDocID: hikeDocID,
                        //locationCode: locationCode,
                        //locationName: locationName,
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