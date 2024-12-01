import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase/firebaseConfig'; // Import Firebase Auth
import { UserContext } from '../../context/UserContext'; // Import UserContext
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import createUserWithEmailAndPassword

const SignupScreen = () => {
  const navigation = useNavigation();
  const { setUser } = useContext(UserContext); // Use setUser from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userData = { email: user.email };
      // Save user data to context
      setUser(userData);
      navigation.replace('Onboarding');
    } catch (error) {
      console.error('Error signing up:', error);
      if (error.code === 'auth/email-already-in-use') {
        setError('Email already in use, retry with another email.');
      } else {
        setError('The credentials are invalid. Please retry.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        placeholder="Re-enter Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignup} />
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.link}>Already have an account? Login here</Text>
      </TouchableOpacity>
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
  inputError: {
    borderColor: 'red', // Error color
  },
  link: {
    color: '#1E90FF', // Primary color
    marginTop: 16,
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
});

export default SignupScreen;