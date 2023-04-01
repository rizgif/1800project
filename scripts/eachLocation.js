// Retrieve the value of the 'docId' key from local storage
function displayHikeInformation(){
    //retreive the document id from the url
    let params = new URL(window.location.href) //get the url from the searbar
    
    let ID = params.searchParams.get("ID");

    //let ID = localStorage.getItem('docId');

    console.log(ID);

    db.collection("locations").doc(ID).get().then( thisHike =>{
        console.log(ID);
        hikeInfo = thisHike.data();
        hikeCode = hikeInfo.code;
        hikeName = hikeInfo.name;

        console.log(hikeCode);

        document.getElementById("hikeName").innerHTML="Based on your location, you are in " + hikeName;
        let imgEvent = document.querySelector( ".hike-img" );
        imgEvent.src = "../images/" + hikeCode + ".jpg";
       
        
    }

    )
}

displayHikeInformation();

function saveHikeDocumentIDAndRedirect(){
    // let params = new URL(window.location.href) //get the url from the search bar
    let ID = localStorage.getItem("docId");
    localStorage.setItem('hikeDocID', ID);
    window.location.href = 'review.html';
    
}

function populateReviews() {
    let hikeCardTemplate = document.getElementById("reviewCardTemplate");
    let hikeCardGroup = document.getElementById("reviewCardGroup");

    let params = new URL(window.location.href) //get the url from the searbar
    let ID = params.searchParams.get("docID");
    //let ID = localStorage.getItem("docId");
    //console.log(ID);
    
    // doublecheck: is your collection called "Reviews" or "reviews"?
    db.collection("Temperatures")
    .where( "locationDocID", "==", ID)
    .get()
    //   console.log(ID)
        .then(allReviews => {
            Temperatures=allReviews.docs;
            
            Temperatures.forEach(doc => {
                var user = doc.data().userName; //gets the name field
                var flooded = doc.data().flooded;
                var temperature = doc.data().temperature;
                var timestamp = doc.data().timestamp.toDate();
                var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
                var formattedTime = timestamp.toLocaleString('en-US', options);
           
                let reviewCard = hikeCardTemplate.content.cloneNode(true);
                reviewCard.querySelector('.user').innerHTML = `<strong>Username: </strong> ${user}`;     //equiv getElementByClassName
                reviewCard.querySelector('.flooded').innerHTML = `<strong>Feelslike Temperature: </strong> ${flooded}`; 
                reviewCard.querySelector('.temperature').innerHTML = `<strong>Actual Temperature:</strong> ${temperature}`; 
                reviewCard.querySelector('.timestamp').innerHTML = `<strong>Time:</strong> ${formattedTime}`; 
            
                hikeCardGroup.appendChild(reviewCard);
            })
        })

        console.log("review saved")
}
populateReviews();