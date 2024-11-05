// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screen components
import SplashScreen from './screens/SplashScreen'; // Adjust path as needed
import SignInScreen from './screens/SignInScreen'; // Adjust path as needed
import CreateAccountScreen from './screens/CreateAccountScreen'; // Adjust path as needed
import ProfileScreen from './screens/ProfileScreen';
import MedicalHistoryScreen from './screens/MedicalHistoryScreen';
import DiagnosisScreen from './screens/DiagnosisScreen';
import AllergiesDisabilitiesScreen from './screens/AllergiesDisabilitiesScreen';
import LifestyleScreen from './screens/LifestyleScreen';
import Lifestyle2Screen from './screens/Lifestyle2Screen';
import HomeScreen from './screens/HomeScreen';
import ScrollableContainer from './screens/ScrollableContainer';
import EntryScreen from './screens/More/EntryScreen';
import ChangePasswordScreen from './screens/More/ChangePasswordScreen';
import MedicalHistoryScreen2 from './screens/More/MedicalHistoryScreen';
import SettingsScreen from './screens/More/SettingsScreen';
import UserProfileScreen from './screens/More/UserProfileScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* Splash Screen */}
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false }} 
        />

        {/* Sign In Screen */}
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen} 
          options={{ title: 'Sign In' }} 
        />

        {/* Create Account Screen */}
        <Stack.Screen 
          name="CreateAccount" 
          component={CreateAccountScreen} 
          options={{ title: 'Create Account' }} 
        />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="MedicalHistoryScreen" component={MedicalHistoryScreen} />
        <Stack.Screen name="DiagnosisScreen" component={DiagnosisScreen} />
        <Stack.Screen name="AllergiesDisabilitiesScreen" component={AllergiesDisabilitiesScreen} />
        <Stack.Screen name="LifestyleScreen" component={LifestyleScreen} />
        <Stack.Screen name="Lifestyle2Screen" component={Lifestyle2Screen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ScrollableContainer" component={ScrollableContainer} />
        <Stack.Screen name="EntryScreen" component={EntryScreen} />
        <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
        <Stack.Screen name="MedicalHistoryScreen2" component={MedicalHistoryScreen2} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
