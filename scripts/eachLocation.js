// Retrieve the value of the 'docId' key from local storage
function displayHikeInformation(){
    //retreive the document id from the url
    let params = new URL(window.location.href) //get the url from the searbar
    let ID = localStorage.getItem("docId");

    console.log(ID);

    db.collection("locations").doc(ID).get().then( thisHike =>{
        hikeInfo = thisHike.data();
        hikeCode = hikeInfo.code;
        hikeName = hikeInfo.locationName;

        console.log(hikeCode);

        document.getElementById("hikeName").innerHTML=hikeName;
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

    //let params = new URL(window.location.href) //get the url from the searbar
    //let hikeID = params.searchParams.get("docID");
    let ID = localStorage.getItem("docId");
    
    
    
    // doublecheck: is your collection called "Reviews" or "reviews"?
    db.collection("Temperatures").where( "locationDocID", "==", ID).get()
    //   console.log(ID)
        .then(allReviews => {
            Temperatures=allReviews.docs;
            
            Temperatures.forEach(doc => {
                var user = doc.data().userName; //gets the name field
                var flooded = doc.data().flooded;
                var timestamp = doc.data().timestamp.toDate();
                var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
                var formattedTime = timestamp.toLocaleString('en-US', options);
           
                let reviewCard = hikeCardTemplate.content.cloneNode(true);
                reviewCard.querySelector('.user').innerHTML = `Username: ${user}`;     //equiv getElementByClassName
                reviewCard.querySelector('.flooded').innerHTML = `Feelslike Temperature: ${flooded}`; 
                reviewCard.querySelector('.timestamp').innerHTML = `Time: ${formattedTime}`; 
            
                hikeCardGroup.appendChild(reviewCard);
            })
        })

        console.log("review saved")
}
populateReviews();