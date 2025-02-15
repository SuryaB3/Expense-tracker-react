import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA41-el7ltxFAVzsJruYOw6zvOmKAcfzy4",
    authDomain: "expense-tracker-5ebd1.firebaseapp.com",
    projectId: "expense-tracker-5ebd1",
    storageBucket: "expense-tracker-5ebd1.firebasestorage.app",
    messagingSenderId: "415458818423",
    appId: "1:415458818423:web:6222243600b0f3b312c972",
    measurementId: "G-GP2WYFJ8Y3"
};

const app = initializeApp(firebaseConfig);

// Export services for use in other files
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;

