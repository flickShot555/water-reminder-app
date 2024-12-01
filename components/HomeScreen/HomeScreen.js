import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserContext } from '../../context/UserContext'; // Import UserContext

const HomeScreen = () => {
  const { user } = useContext(UserContext); // Get user data from context

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to AquaAlert</Text>
      <Text style={styles.subtitle}>Here is your information:</Text>
      <Text style={styles.info}>Name: {user.name}</Text>
      <Text style={styles.info}>Age: {user.age}</Text>
      <Text style={styles.info}>Gender: {user.gender}</Text>
      <Text style={styles.info}>BMI: {user.bmi}</Text>
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
    fontSize: 18,
    marginBottom: 24,
  },
  info: {
    color: '#333333', // Text color
    fontSize: 16,
    marginBottom: 8,
  },
});

export default HomeScreen;
