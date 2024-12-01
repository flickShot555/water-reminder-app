import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('LoginScreen'); // Navigate to Onboarding screen after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://placehold.co/100x100' }}
        style={styles.logo}
        alt="App logo: A stylized water droplet with a gradient of blue shades"
      />
      <Text style={styles.title}>AquaAlert</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Background color
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    color: '#1E90FF', // Primary color
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default SplashScreen;