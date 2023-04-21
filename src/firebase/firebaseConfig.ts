// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { Firestore, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// import firebase from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
import { getDatabase, ref, push } from "firebase/database";
import firebase from 'firebase/app';
import 'firebase/auth';

// interface FirebaseAuth extends firebase.auth.Auth {
//   signInWithEmailAndPassword(email: string, password: string): Promise<firebase.auth.UserCredential>;
// }

// const auth: FirebaseAuth = firebase.auth();


// type Firestore = firebase.firestore.Firestore;


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBQUX-T8igcDatSKqFxyz7mjnGFiD-A4c",
  authDomain: "sam-project-b2226.firebaseapp.com",
  projectId: "sam-project-b2226",
  storageBucket: "sam-project-b2226.appspot.com",
  messagingSenderId: "198019960763",
  appId: "1:198019960763:web:7774a78f36e90176683e9e",
  measurementId: "G-H1ZTBQBSET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app); 
const auth = getAuth(app);
const storage = getStorage(app);
const database = getDatabase(app);

export { app, db, auth, database, storage, firebase };