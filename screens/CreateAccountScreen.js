// src/CreateAccount.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CreateAccount = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleCreateAccount = async () => {
    const userData = {
      email,
      phone_number: phoneNumber,
      password,
    };

    navigation.navigate('ProfileScreen', { email, phone: phoneNumber, password });


    /*try {
      // Send a POST request to your backend API to create the user
      const response = await fetch('https://zhs-backend.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const result = await response.json();
        const userId = result.userId; // assuming the API returns userId in the response

        // Navigate to HomeScreen with userId
        navigation.navigate('HomeScreen', { userId });
      } else {
        Alert.alert('Error', 'Failed to create account. Please try again.');
      }
    } catch (error) {
      console.error('Error creating account:', error);
      Alert.alert('Error', 'An error occurred. Please try again.');
    }*/
  };

  const handleLogin = () => {
    // Navigate to the login screen
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Let's get you started</Text>
      <Text style={styles.subHeader}>
        It’s secure and easy. We will help you keep track of your health by managing your appointments
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.showPasswordButton}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Text style={styles.showPasswordText}>{showPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
        <Text style={styles.createAccountButtonText}>Create account</Text>
      </TouchableOpacity>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Or</Text>
        <View style={styles.divider} />
      </View>

      <TouchableOpacity style={styles.loginLink} onPress={handleLogin}>
        <Text style={styles.loginLinkText}>Already have an account? <Text style={styles.loginText}>Log in</Text></Text>
      </TouchableOpacity>
      <Text style={styles.termsText}>
        By creating an account you agree to have read and accept ZHS’s <Text style={styles.linkText}>Terms of Use</Text> and <Text style={styles.linkText}>Privacy Policy</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6c757d',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  showPasswordButton: {
    padding: 10,
  },
  showPasswordText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  createAccountButton: {
    backgroundColor: '#005EB8',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  createAccountButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#6c757d',
  },
  googleButton: {
    backgroundColor: '#E0E0E0',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  googleButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    alignItems: 'center',
    marginBottom: 20,
  },
  loginLinkText: {
    color: '#6c757d',
  },
  loginText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#6c757d',
  },
  linkText: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default CreateAccount;


