// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKDrXFTBe5gBlUZA4zbXGvkJM0gk-Uo-Y",
    authDomain: "simple-auth-a8862.firebaseapp.com",
    projectId: "simple-auth-a8862",
    storageBucket: "simple-auth-a8862.appspot.com",
    messagingSenderId: "363428709820",
    appId: "1:363428709820:web:1021597162a9ca38ff97b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;