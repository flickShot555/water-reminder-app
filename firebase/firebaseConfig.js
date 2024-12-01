// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkMvmuPenjIn7bbCPLOxk2xT9kDRjqIqU",
  authDomain: "waterreminderapp-1820.firebaseapp.com",
  projectId: "waterreminderapp-1820",
  storageBucket: "waterreminderapp-1820.firebasestorage.app",
  messagingSenderId: "739946300406",
  appId: "1:739946300406:web:e638e37657a1ca6c82bdd7",
  measurementId: "G-0FRHWY4PPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = analytics(app);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export default app;