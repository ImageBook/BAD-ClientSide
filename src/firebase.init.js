// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAK7aIRUCr_U--R2OxvUWKkjJSElEeuSsY",
    authDomain: "testwebrd451.firebaseapp.com",
    projectId: "testwebrd451",
    storageBucket: "testwebrd451.appspot.com",
    messagingSenderId: "712779350162",
    appId: "1:712779350162:web:90380806073e436025e64b",
    measurementId: "G-D4MRD4245D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;