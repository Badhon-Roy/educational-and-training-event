// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL-m2TSR_02Ze4I0cgt_73ymc5FQZGp1g",
  authDomain: "educational-and-training-event.firebaseapp.com",
  projectId: "educational-and-training-event",
  storageBucket: "educational-and-training-event.appspot.com",
  messagingSenderId: "60456310184",
  appId: "1:60456310184:web:38b84378dedf833b04399d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;