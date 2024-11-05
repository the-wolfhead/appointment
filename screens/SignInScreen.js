import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Alert
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


// Get device width to adjust styles dynamically
const { width } = Dimensions.get('window');

const SignInScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle Sign-In API call
  const handleSignIn = async () => {
    const userData = {
      email,
      password
    };

    try {
      const response = await fetch('https://zhs-backend.onrender.com/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Failed to sign in');
      }

      const result = await response.json();
      console.log(result);
      Alert.alert('Success', `Welcome ${result.first_name}`);
      // Handle success response, e.g., navigate to HomeScreen
      navigation.navigate('HomeScreen', { user: result }); // Pass user data to HomeScreen

    } catch (error) {
      Alert.alert('Error', 'Unable to sign in. Please check your credentials.');
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Log in to your account */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Log in to your account</Text>
      </View>

      {/* Email */}
      <View style={[styles.inputContainer, { width: width * 0.9 }]}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </View>

      {/* Password */}
      <View style={[styles.inputContainer, { width: width * 0.9 }]}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity style={styles.showButton} onPress={togglePasswordVisibility}>
            <Text style={styles.showText}>{showPassword ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Forgot password */}
      <View style={[styles.forgotPasswordContainer, { width: width * 0.9 }]}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        <Text style={styles.resetPasswordText}>Reset password</Text>
      </View>

      {/* Sign in button */}
      <TouchableOpacity style={[styles.signInButton, { width: width * 0.9 }]} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/* OR */}
      <View style={[styles.orContainer, { width: width * 0.9 }]}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.line} />
      </View>

      {/* Continue with Google */}
      <TouchableOpacity style={[styles.googleButton, { width: width * 0.9 }]}>
        <View style={styles.googleIcon} />
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Don't have an account? */}
      <View style={[styles.createAccountContainer, { width: width * 0.9 }]}>
        <Text style={styles.dontHaveAccountText}>Don’t have an account?</Text>
        <Text style={styles.createAccountText}>Create account</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 24,
    paddingTop: 115,
    backgroundColor: '#FBFBFD',
  },
  header: {
    marginBottom: 24,
  },
  headerText: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: 20,
    color: '#1C1C1E',
  },
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    color: '#1C1C1E',
    marginBottom: 4,
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#C1C3F4',
    borderWidth: 0.56,
    borderRadius: 8,
    padding: 12,
  },
  input: {
    flex: 1,
    fontFamily: 'Montserrat',
    fontSize: 14,
    color: '#1C1C1E',
  },
  showButton: {
    justifyContent: 'center',
  },
  showText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    textDecorationLine: 'underline',
    color: '#1C1C1E',
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    color: '#1C1C1E',
    marginRight: 8,
  },
  resetPasswordText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    color: '#0040DD',
  },
  signInButton: {
    height: 44,
    backgroundColor: '#0040DD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 12,
  },
  signInButtonText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 14,
    color: '#FFFFFF',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#7C7C80',
  },
  orText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    color: '#1C1C1E',
    marginHorizontal: 8,
  },
  googleButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    backgroundColor: '#D8D8DC',
    borderRadius: 8,
    marginBottom: 12,
  },
  googleIcon: {
    width: 20,
    height: 20,
    backgroundColor: '#4285F4',
    marginRight: 16,
  },
  googleButtonText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 14,
    color: '#242426',
  },
  createAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dontHaveAccountText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    color: '#1C1C1E',
    marginRight: 8,
  },
  createAccountText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    color: '#0040DD',
  },
});

export default SignInScreen;
