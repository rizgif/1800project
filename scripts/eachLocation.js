function displayHikeInformation(){
    //retreive the document id from the url
    let params = new URL(window.location.href) //get the url from the searbar
    let ID = params.searchParams.get("docID");
    console.log(ID);

    db.collection("locations").doc(ID).get().then( thisHike =>{
        hikeInfo = thisHike.data();
        hikeCode = hikeInfo.code;
        hikeName = hikeInfo.locationName;

        document.getElementById("hikeName").innerHTML=hikeName;
        let imgEvent = document.querySelector( ".hike-img" );
        imgEvent.src = "./images/" + code + ".jpg";
    }

    )

}
displayHikeInformation();

function saveHikeDocumentIDAndRedirect(){
    let params = new URL(window.location.href) //get the url from the search bar
    let ID = params.searchParams.get("docID");
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
        .limit(5)
        .then(allReviews => {
            reviews=allReviews.docs;
            console.log(reviews);
            reviews.forEach(doc => {
                var user = doc.data().userID; //gets the name field
              
                var flooded = doc.data().flooded;
        
                var timestamp = doc.data().timestamp;
                

                let reviewCard = hikeCardTemplate.content.cloneNode(true);
                reviewCard.querySelector('.user').innerHTML = `user: ${user}`;     //equiv getElementByClassName
                reviewCard.querySelector('.flooded').innerHTML = `user: ${flooded}`; 
                reviewCard.querySelector('.timestamp').innerHTML = `user: ${timestamp}`; 
                
            
               
                hikeCardGroup.appendChild(reviewCard);
            })
        })
}
populateReviews();