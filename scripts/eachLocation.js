// Retrieve the value of the 'docId' key from local storage
function displayLocationInformation() {
  //retreive the document id from the url
  let params = new URL(window.location.href); //get the url from the searbar

  let ID = params.searchParams.get("ID");

  console.log("ID", ID);

  db.collection("locations")
    .doc(ID)
    .get()
    .then((thisLocation) => {
      console.log(ID);
      locationInfo = thisLocation.data();
      console.log("locationInfo", locationInfo);
      locationCode = locationInfo.code;
      locationName = locationInfo.name;

      console.log(locationCode);

      document.getElementById("locationName").innerHTML =
        "Based on your location, you are in " + locationName + " area";
      let imgEvent = document.querySelector(".location-img");
      imgEvent.src = "../images/" + locationCode + ".jpg";
    });
}

displayLocationInformation();

function saveLocationDocumentIDAndRedirect() {
  let params = new URL(window.location.href); //get the url from the search bar
  let ID = params.searchParams.get("ID");

  window.location.href = "review.html?ID=" + ID;
}

function populateReviews() {
  let locationCardTemplate = document.getElementById("reviewCardTemplate");
  let locationCardGroup = document.getElementById("reviewCardGroup");

  let params = new URL(window.location.href); //get the url from the searbar
  let ID = params.searchParams.get("ID");

  db.collection("Temperatures")
    .where("locationDocID", "==", ID)
    .get()
    .then((allReviews) => {
      Temperatures = allReviews.docs;

      Temperatures.forEach((doc) => {
        var user = doc.data().userName; //gets the name field
        var feelslikeTemperature = doc.data().feelslikeTemperature;
        var actualTemperature = doc.data().actualTemperature;
        var timestamp = doc.data().timestamp.toDate();
        var options = {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        };
        var formattedTime = timestamp.toLocaleString("en-US", options);

        let reviewCard = locationCardTemplate.content.cloneNode(true);
        reviewCard.querySelector(
          ".user"
        ).innerHTML = `<strong>Username: </strong> ${user}`; //equiv getElementByClassName
        reviewCard.querySelector(
          ".feelslikeTemperature"
        ).innerHTML = `<strong>Feelslike Temperature: </strong> ${feelslikeTemperature}`;
        reviewCard.querySelector(
          ".actualTemperature"
        ).innerHTML = `<strong>Actual Temperature:</strong> ${actualTemperature}`;
        reviewCard.querySelector(
          ".timestamp"
        ).innerHTML = `<strong>Time:</strong> ${formattedTime}`;

        locationCardGroup.appendChild(reviewCard);
      });
    });

  console.log("review saved");
}
populateReviews();
