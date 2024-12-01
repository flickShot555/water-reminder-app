import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '../../firebase/firebaseConfig'; // Import Firebase Auth and Firestore
import { UserContext } from '../../context/UserContext'; // Import UserContext
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import signInWithEmailAndPassword
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore methods

const LoginScreen = () => {
  const navigation = useNavigation();
  const { setUser } = useContext(UserContext); // Use setUser from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (retries = 3) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Fetch user data from Firestore and set it in context
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        setUser(userDoc.data());
        navigation.replace('Onboarding');
      } else {
        console.error('No such user document!');
        setError('No such user document!');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      if (error.message.includes('client is offline') && retries > 0) {
        console.log(`Retrying... (${3 - retries + 1})`);
        setTimeout(() => handleLogin(retries - 1), 1000);
      } else {
        setError('The credentials are invalid. Please retry.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.link}>Not having an account? Create one</Text>
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

export default LoginScreen;