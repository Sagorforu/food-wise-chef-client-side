// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAFT2tKsFJOd1wnQsjljbomcKYkksyeoI",
  authDomain: "food-wise-assignment.firebaseapp.com",
  projectId: "food-wise-assignment",
  storageBucket: "food-wise-assignment.appspot.com",
  messagingSenderId: "857729288804",
  appId: "1:857729288804:web:88e3a4af047d16ce246d71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;