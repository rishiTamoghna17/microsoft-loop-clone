// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "loop-clone-d70d1.firebaseapp.com",
  projectId: "loop-clone-d70d1",
  storageBucket: "loop-clone-d70d1.firebasestorage.app",
  messagingSenderId: "73832189954",
  appId: "1:73832189954:web:c020e8708d5d845e91971b",
  measurementId: "G-GSE1ESZJ58"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

