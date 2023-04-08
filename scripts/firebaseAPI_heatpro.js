//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBLPuPEMw5VV-DvYSIQZjyc7X5SKzK3bBY",
    authDomain: "heatpro-62070.firebaseapp.com",
    projectId: "heatpro-62070",
    storageBucket: "heatpro-62070.appspot.com",
    messagingSenderId: "483967183474",
    appId: "1:483967183474:web:0adf32d917571d857b30eb",
    measurementId: "G-2E6H9F7XEV"
}
//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
console.log("firebase",firebase);
const app = firebase.initializeApp( firebaseConfig );
const db = firebase.firestore();
const storage = firebase.storage();

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBLPuPEMw5VV-DvYSIQZjyc7X5SKzK3bBY",
//   authDomain: "heatpro-62070.firebaseapp.com",
//   projectId: "heatpro-62070",
//   storageBucket: "heatpro-62070.appspot.com",
//   messagingSenderId: "483967183474",
//   appId: "1:483967183474:web:0adf32d917571d857b30eb",
//   measurementId: "G-2E6H9F7XEV"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);