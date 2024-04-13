// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJpJuz668OyLINvbcsFt3OkxV7r0isv6s",
  authDomain: "frontabyssangel.firebaseapp.com",
  projectId: "frontabyssangel",
  storageBucket: "frontabyssangel.appspot.com",
  messagingSenderId: "501625035165",
  appId: "1:501625035165:web:9ffb6c8df8e018d22ef774"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export {auth}