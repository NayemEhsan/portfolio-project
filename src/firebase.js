// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBTs-uAEzL3UJeDtb4n3Nj5EWx_fx2ccIE",
  authDomain: "contact-form-for-portfol-193ce.firebaseapp.com",
  projectId: "contact-form-for-portfol-193ce",
  storageBucket: "contact-form-for-portfol-193ce.appspot.com",
  messagingSenderId: "999503885572",
  appId: "1:999503885572:web:ccdb3ba493ec1e25e8cc51"
});

// Initialize Firebase
 const db = firebaseApp.firestore() ;
 export { db };