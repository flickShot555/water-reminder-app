import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../context/UserContext'; // Import UserContext
import { db } from '../../firebase/firebaseConfig'; // Import Firestore
import { doc, setDoc } from 'firebase/firestore'; // Import Firestore methods

const Onboarding = () => {
  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext); // Use user and setUser from context
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bmi, setBmi] = useState('');
  const [error, setError] = useState('');

  const handleNext = async () => {
    const userData = { ...user, name, age, gender, bmi };
    try {
      // Save user data to Firestore
      await setDoc(doc(db, 'users', user.email), userData);
      setUser(userData);
      navigation.replace('HomeScreen');
    } catch (error) {
      console.error('Error saving user data to Firestore:', error);
      setError('Error saving data. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to AquaAlert</Text>
      <Text style={styles.subtitle}>Let's get started with some basic information</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      />
      <TextInput
        style={styles.input}
        placeholder="BMI"
        value={bmi}
        onChangeText={setBmi}
        keyboardType="numeric"
      />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Background color
    padding: 16,
  },
  title: {
    color: '#1E90FF', // Primary color
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    color: '#333333', // Text color
    fontSize: 16,
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#87CEFA', // Secondary color
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    backgroundColor: '#FFFFFF', // Input background color
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
});

export default Onboarding;