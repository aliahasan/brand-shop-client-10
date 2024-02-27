// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnrOacLRB6z3g8U16fvo3ui4kXzZqA4Vg",
  authDomain: "brand-shop-a4b25.firebaseapp.com",
  projectId: "brand-shop-a4b25",
  storageBucket: "brand-shop-a4b25.appspot.com",
  messagingSenderId: "498076586998",
  appId: "1:498076586998:web:b6dc042b8ef58b405f6dd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;