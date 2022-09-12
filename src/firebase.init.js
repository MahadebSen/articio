// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJMK7s0eJOpbJ6c4SRGnPniKBC6voHQj0",
  authDomain: "articio.firebaseapp.com",
  projectId: "articio",
  storageBucket: "articio.appspot.com",
  messagingSenderId: "489088196536",
  appId: "1:489088196536:web:5bcf951824b5bb0e84394d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
