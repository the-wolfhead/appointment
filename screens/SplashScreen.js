import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    require('../assets/welcome1.png'),
    require('../assets/welcome2.png'),
    require('../assets/welcome3.png')
  ];

  useEffect(() => {
    // Change image every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <View style={styles.container}>
      {/* Slideshow */}
      <View style={styles.slideshowContainer}>
        <Image source={images[currentImageIndex]} style={styles.image} />
      </View>

      <Text style={styles.message}>
        Connect with Care, Anywhere{'\n'}
        Doctors, Hospitals, Labs, and Clinics, Right at Your Fingertips! Your Health Hub on Demand
      </Text>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.signInLabel}>Sign In</Text>
      </TouchableOpacity>

      {/* Create Account Button */}
      <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate('CreateAccount')}>
        <Text style={styles.createAccountLabel}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    gap: 12,
    margin: 'auto',
    width: 358,
    height: Dimensions.get('window').height,
  },
  slideshowContainer: {
    width: 358,
    height: 250,  // Adjust height as needed
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  message: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  signInButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    gap: 10,
    width: 358,
    height: 44,
    backgroundColor: '#0040DD',
    borderRadius: 8,
  },
  signInLabel: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  createAccountButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    gap: 10,
    width: 358,
    height: 44,
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
  },
  createAccountLabel: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#000000',
  },
});

export default SplashScreen;
