var currentUser;          //put this right after you start script tag before writing any functions.

function populateUserInfo() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {

            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid)
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    //get the data fields of the user
                    var country1 = userDoc.data().country;
                    var email1 = userDoc.data().email;
                    var name1 = userDoc.data().name;
                    var school1 = userDoc.data().school;

                    //if the data fields are not empty, then write them in to the form.
                    if (country1 != null) {
                        document.getElementById("countryinput").value = country1;
                    }
                    if (email1 != null) {
                        document.getElementById("emailinput").value = email1;
                    }
                    if (name1 != null) {
                        document.getElementById("nameinput").value = name1;
                    }
                    if (school1 != null) {
                        document.getElementById("schoolinput").value = school1;
                    }
                })
        } else {
            // No user is signed in.
            console.log ("No user is signed in");
        }
    });
}

//call the function to run it 
populateUserInfo();

function editUserInfo() {
    //Enable the form fields
    document.getElementById('personalInfoFields').disabled = false;
}

function saveUserInfo() {
    //enter code here

    //a) get user entered values
    country1 = document.getElementById('countryinput').value;       //get the value of the field with id="nameInput"
    email1 = document.getElementById('emailinput').value;     //get the value of the field with id="schoolInput"
    name1 = document.getElementById('nameinput').value;       //get the value of the field with id="cityInput"
    school1 = document.getElementById('schoolinput').value;

    //b) update user's document in Firestore
    currentUser.update({
        country: country1,
        email: email1,
        name: name1,
        school: school1

    })
    .then(() => {
        console.log("Document successfully updated!");
    })

    //c) disable edit 
    document.getElementById('personalInfoFields').disabled = true;
}

