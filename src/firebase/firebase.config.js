// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRDtumrf-lXhRlEXRzHme_Hk6Nrbds8PU",
  authDomain: "twitter-practice-firebase.firebaseapp.com",
  projectId: "twitter-practice-firebase",
  storageBucket: "twitter-practice-firebase.appspot.com",
  messagingSenderId: "636767321972",
  appId: "1:636767321972:web:0927ee422ec611938cb621"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;