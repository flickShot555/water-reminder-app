import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAkMvmuPenjIn7bbCPLOxk2xT9kDRjqIqU',
  authDomain: 'waterreminderapp-1820.firebaseapp.com',
  projectId: 'waterreminderapp-1820',
  storageBucket: 'waterreminderapp-1820.appspot.com',
  messagingSenderId: '739946300406',
  appId: '1:739946300406:web:e638e37657a1ca6c82bdd7',
  measurementId: 'G-0FRHWY4PPM',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Enable offline persistence
/**
  enableIndexedDbPersistence(db).catch((err) => {
    if (err.code === 'failed-precondition') {
      console.error('Failed to enable offline persistence: Multiple tabs open');
    } else if (err.code === 'unimplemented') {
      console.error('Failed to enable offline persistence: Browser does not support it');
    }
  });
*/

export default app;