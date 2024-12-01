import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Onboarding from './components/Onboarding/Onboarding';
import HomeScreen from './components/HomeScreen/HomeScreen'; // Import HomeScreen
import { UserProvider } from './context/UserContext'; // Import UserProvider

const Stack = createStackNavigator();

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          {/* Add other screens here */}
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;