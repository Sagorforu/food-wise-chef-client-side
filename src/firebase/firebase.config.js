// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9y-SFm-P60hb7Pe5igjbOTQlg1F8e2_w",
  authDomain: "food-wise-be66a.firebaseapp.com",
  projectId: "food-wise-be66a",
  storageBucket: "food-wise-be66a.appspot.com",
  messagingSenderId: "516389059871",
  appId: "1:516389059871:web:39b95b0cf9f758702f842a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;