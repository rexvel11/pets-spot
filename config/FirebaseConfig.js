// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "pets-spot-c7aa8.firebaseapp.com",
  projectId: "pets-spot-c7aa8",
  storageBucket: "pets-spot-c7aa8.firebasestorage.app",
  messagingSenderId: "345918034484",
  appId: "1:345918034484:web:3d6b67232c87bfaba1f061",
  measurementId: "G-SRTPFV48XQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);