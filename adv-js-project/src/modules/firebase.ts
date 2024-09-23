import {getFirestore, collection } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaD4Dx0Vwzu6mCzl-cWc0C_zvVC1kxncQ",
  authDomain: "calendar-app-311c8.firebaseapp.com",
  projectId: "calendar-app-311c8",
  storageBucket: "calendar-app-311c8.appspot.com",
  messagingSenderId: "502752255733",
  appId: "1:502752255733:web:e14a1d6dc9ee91ce5befbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const eventsFirebaseCollectionRef = 'events';
const eventsCollection = collection(db, eventsFirebaseCollectionRef);

export { db, eventsCollection, eventsFirebaseCollectionRef}

