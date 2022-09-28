// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANUIZ0BKUeb8FLmSlRJReUAdfFCJbBvfc",
    authDomain: "first-proyect-83539.firebaseapp.com",
    projectId: "first-proyect-83539",
    storageBucket: "first-proyect-83539.appspot.com",
    messagingSenderId: "396564027532",
    appId: "1:396564027532:web:ec6220f6df86acc6c783a9",
    measurementId: "G-NPH1G4CL9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);