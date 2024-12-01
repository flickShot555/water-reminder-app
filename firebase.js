// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

// Export Firebase services as needed
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;