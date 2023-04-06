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
                    var country = userDoc.data().country;
                    var email = userDoc.data().email;
                    var name = userDoc.data().name;
                    var school = userDoc.data().school;

                    //if the data fields are not empty, then write them in to the form.
                    if (userName != null) {
                        document.getElementById("country").value = country;
                    }
                    if (userSchool != null) {
                        document.getElementById("email").value = email;
                    }
                    if (userCity != null) {
                        document.getElementById("name").value = name;
                    }
                    if (userCity != null) {
                        document.getElementById("school").value = school;
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
    country = document.getElementById('country').value;       //get the value of the field with id="nameInput"
    email = document.getElementById('email').value;     //get the value of the field with id="schoolInput"
    name = document.getElementById('name').value;       //get the value of the field with id="cityInput"
    school = document.getElementById('school').value;

    //b) update user's document in Firestore
    currentUser.update({
        country: country,
        email: email,
        name: name,
        school: school

    })
    .then(() => {
        console.log("Document successfully updated!");
    })

    //c) disable edit 
    document.getElementById('personalInfoFields').disabled = true;
}

