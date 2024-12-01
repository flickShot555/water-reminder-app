import React, { createContext, useState } from 'react';
import { db } from '../firebase/firebaseConfig'; // Import Firestore
import { collection, doc, setDoc } from 'firebase/firestore'; // Import Firestore methods

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    age: '',
    gender: '',
    bmi: '',
  });

  const saveUserToFirestore = async (userData, retries = 3) => {
    try {
      const userRef = doc(collection(db, 'users'), userData.name);
      await setDoc(userRef, userData);
    } catch (error) {
      console.error('Error saving user data to Firestore:', error);
      if (retries > 0) {
        console.log(`Retrying... (${3 - retries + 1})`);
        setTimeout(() => saveUserToFirestore(userData, retries - 1), 1000);
      }
    }
  };

  const setUserAndSave = (userData) => {
    setUser(userData);
    saveUserToFirestore(userData);
  };

  return (
    <UserContext.Provider value={{ user, setUser: setUserAndSave }}>
      {children}
    </UserContext.Provider>
  );
};