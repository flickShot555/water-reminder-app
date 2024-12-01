import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../context/UserContext'; // Import UserContext

const Onboarding = () => {
  const navigation = useNavigation();
  const { setUser } = useContext(UserContext); // Use setUser from context
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bmi, setBmi] = useState('');

  const handleNext = () => {
    // Save user data to context and Firestore
    setUser({ name, age, gender, bmi });
    // Navigate to the next screen (e.g., HomeScreen)
    navigation.replace('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to AquaAlert</Text>
      <Text style={styles.subtitle}>Let's get started with some basic information</Text>

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
});

export default Onboarding;