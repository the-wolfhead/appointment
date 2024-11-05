import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const MedicalHistoryScreen = () => {
  const [diagnosed, setDiagnosed] = useState(null);

  const navigation = useNavigation();
  const route = useRoute();

  // Collect profile data passed from ProfileScreen
  const { profileData } = route.params;

  const handleYes = () => {
    setDiagnosed(true);
    // Navigate to DiagnosisScreen and pass the updated data
    const updatedProfileData = {
      ...profileData,
      diagnosed: true,
    };
    navigation.navigate('DiagnosisScreen', { profileData: updatedProfileData });
  };

  const handleNo = () => {
    setDiagnosed(false);
    // Navigate to AllergiesDisabilitiesScreen and pass the updated data
    const updatedProfileData = {
      ...profileData,
      diagnosed: false,
    };
    navigation.navigate('AllergiesDisabilitiesScreen', { profileData: updatedProfileData });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>Have you ever been diagnosed with any medical condition?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, diagnosed === true && styles.selectedButton]}
          onPress={handleYes}
        >
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, diagnosed === false && styles.selectedButton]}
          onPress={handleNo}
        >
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => { diagnosed !== null && (diagnosed ? handleYes() : handleNo()); }}
      >
        <Text style={styles.continueButtonText}>Save & Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  question: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: '#007BFF',
  },
  buttonText: {
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default MedicalHistoryScreen;
