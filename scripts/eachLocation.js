// Retrieve the value of the 'docId' key from local storage
var docID = localStorage.getItem('docId');
console.log(docID);

function displayHikeInformation(){
    //retreive the document id from the url
    let params = new URL(window.location.href) //get the url from the searbar
    let ID = localStorage.getItem("docID");


    console.log(ID);

    db.collection("locations").doc(ID).get().then( thisHike =>{
        hikeInfo = thisHike.data();
        hikeCode = hikeInfo.code;
        hikeName = hikeInfo.locationName;

        document.getElementById("hikeName").innerHTML=hikeName;
        let imgEvent = document.querySelector( ".hike-img" );
        imgEvent.src = "../images/" + hikeCode + ".jpg";
        console.log("did it work?")
    }

    )

}
displayHikeInformation();

function saveHikeDocumentIDAndRedirect(){
    let params = new URL(window.location.href) //get the url from the search bar
    let ID = localStorage.getItem("docID");
    localStorage.setItem('hikeDocID', ID);
    window.location.href = 'review.html';
}

function populateReviews() {
    let hikeCardTemplate = document.getElementById("reviewCardTemplate");
    let hikeCardGroup = document.getElementById("reviewCardGroup");

    //let params = new URL(window.location.href) //get the url from the searbar
    //let hikeID = params.searchParams.get("docID");
    var hikeID = localStorage.getItem("hikeDocID");
    
    // doublecheck: is your collection called "Reviews" or "reviews"?
    db.collection("Temperatures").where( "hikeDocID", "==", hikeID).get()
      
        .then(allReviews => {
            reviews=allReviews.docs;
            console.log(reviews);
            reviews.forEach(doc => {
                var user = doc.data().userID; //gets the name field
                var flooded = doc.data().flooded;
                var timestamp = doc.data().timestamp;
                console.log(time)
                

                let reviewCard = hikeCardTemplate.content.cloneNode(true);
                reviewCard.querySelector('.user').innerHTML = `user: ${user}`;     //equiv getElementByClassName
                reviewCard.querySelector('.flooded').innerHTML = `user: ${flooded}`; 
                reviewCard.querySelector('.timestamp').innerHTML = `user: ${timestamp}`; 
                
            
    
                hikeCardGroup.appendChild(reviewCard);
            })
        })
}
populateReviews();