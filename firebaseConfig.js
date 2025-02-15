// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "add yours",
  authDomain: "expense-tracker-5ebd1.firebaseapp.com",
  projectId: "expense-tracker-5ebd1",
  storageBucket: "expense-tracker-5ebd1.firebasestorage.app",
  messagingSenderId: "415458818423",
  appId: "1:add yours",
  measurementId: "G-GP2WYFJ8Y3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
