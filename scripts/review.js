// Retrieve the value of the 'docId' key from local storage
// var docID = localStorage.getItem('docId');
// console.log(docID);

let params = new URL(window.location.href) //get the url from the search bar
let ID = params.searchParams.get("ID");

console.log(ID);

var userName = localStorage.getItem('userName');
// console.log(userName);

var currweather1 = localStorage.getItem('currweather1') + "°C";
// console.log(currweather1);

function getHikeName(id) {
  console.log(id);
    db.collection("locations")
      .doc(id)
      .get()
      .then((thisHike) => {
        var hikeName = thisHike.data().name;
        var hikeCode = thisHike.data().code;
        document.getElementById("hikeName").innerHTML = hikeName;
        console.log(hikeName);
        document.getElementById("hikeCode").innerHTML = hikeCode;
        console.log(hikeCode);
          });
}

getHikeName(ID);

function writeReview() {
    console.log("inside write review")
    let feelslikeTemperature = document.querySelector('input[name="feelslikeTemperature"]:checked').value;
    //console.log(Flooded);
    if (feelslikeTemperature === "More Cooler") {
      feelslikeTemperature = localStorage.getItem("currweather1");
      feelslikeTemperature = parseFloat(feelslikeTemperature) - 5 + "°C";
      } else if ( feelslikeTemperature === "Cooler") {
        feelslikeTemperature = localStorage.getItem("currweather1");
        feelslikeTemperature = parseFloat(feelslikeTemperature) - 2 + "°C";
      } 
        else if ( feelslikeTemperature === "Same") {
          feelslikeTemperature = "The experts were right"+ localStorage.getItem("currweather1") + "°C";
        
      } 
      else if ( feelslikeTemperature === "Hotter") {
        feelslikeTemperature = localStorage.getItem("currweather1");
        feelslikeTemperature = parseFloat(feelslikeTemperature) + 2 + "°C";
      } 
      else if ( feelslikeTemperature === "More Hotter") {
        feelslikeTemperature =  localStorage.getItem("currweather1");
        feelslikeTemperature = parseFloat(feelslikeTemperature) + 5 + "°C";
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
                    //var userEmail = userDoc.data().email;



                    db.collection("Temperatures").add({
                        // hikeDocID: hikeDocID,
                        userID: userID,
                        userName: userName,
                        locationDocID: ID,
                        actualTemperature: currweather1,
                        feelslikeTemperature: feelslikeTemperature,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    }).then(() => {
                        window.location.href = 'eachLocation.html?ID=' + ID; //new line added
                    })
                })
        } else {
            console.log("No user is signed in");
            window.location.href = 'review.html';
        }
    });
}