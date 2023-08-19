import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut }
 from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

 import {
    getFirestore, collection, addDoc, setDoc, doc, query, where, getDocs, getDoc
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEhl8V4Ir3TzW6v1ZqnF8WjZtXDEGPkdI",
  authDomain: "personal-blogging-websit-eea65.firebaseapp.com",
  projectId: "personal-blogging-websit-eea65",
  storageBucket: "personal-blogging-websit-eea65.appspot.com",
  messagingSenderId: "336488544982",
  appId: "1:336488544982:web:beacd381d6aa23c5fda777"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {
    auth,
    app,
    db,
    getFirestore,
    collection,
    addDoc,
    setDoc,
    doc,
    getDoc,
    getAuth,
    createUserWithEmailAndPassword,
    query,
    where,
    getDocs,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
};