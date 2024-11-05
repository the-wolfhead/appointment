import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const DiagnosisScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Collect profileData passed from MedicalHistoryScreen
  const { profileData } = route.params;

  const [selectedDiagnosis, setSelectedDiagnosis] = useState([]);
  const [otherDiagnosis, setOtherDiagnosis] = useState('');

  const diagnosisOptions = [
    'Diabetes', 'HIV/AIDS', 'Cancer', 'Tuberculosis',
    'Stroke', 'Ulcer', 'Hypertension', 'Asthma',
    'Sickle cell Anemia', 'Leukemia'
  ];

  const toggleDiagnosis = (diagnosis) => {
    if (selectedDiagnosis.includes(diagnosis)) {
      setSelectedDiagnosis(selectedDiagnosis.filter(item => item !== diagnosis));
    } else {
      setSelectedDiagnosis([...selectedDiagnosis, diagnosis]);
    }
  };

  const handleSaveAndContinue = () => {
    const updatedProfileData = {
      ...profileData,
      diagnosis: selectedDiagnosis.length > 0 ? selectedDiagnosis : null,
      otherDiagnosis: otherDiagnosis || null,
    };

    // Navigate to AllergiesDisabilitiesScreen with updated profileData
    navigation.navigate('AllergiesDisabilitiesScreen', { profileData: updatedProfileData });
  };

  const handleSkip = () => {
    const updatedProfileData = {
      ...profileData,
      diagnosis: null,
      otherDiagnosis: null,
    };

    // Navigate to AllergiesDisabilitiesScreen with null diagnosis data
    navigation.navigate('AllergiesDisabilitiesScreen', { profileData: updatedProfileData });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Medical Diagnosis Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Medical Diagnosis</Text>
      </View>

      {/* Diagnosis Options */}
      <View style={styles.diagnosisOptionsContainer}>
        {diagnosisOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedDiagnosis.includes(option) && styles.selectedOptionButton
            ]}
            onPress={() => toggleDiagnosis(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Other Diagnosis */}
      <View style={styles.othersContainer}>
        <Text style={styles.othersText}>Others; Specify:</Text>
        <TextInput
          style={styles.specifyBox}
          placeholder="Enter other diagnosis"
          value={otherDiagnosis}
          onChangeText={setOtherDiagnosis}
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        {/* Primary Button */}
        <TouchableOpacity style={styles.primaryButton} onPress={handleSaveAndContinue}>
          <Text style={styles.primaryButtonText}>Save & Continue</Text>
        </TouchableOpacity>

        {/* Secondary Button */}
        <TouchableOpacity style={styles.secondaryButton} onPress={handleSkip}>
          <Text style={styles.secondaryButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#FBFBFD',
  },
  headerContainer: {
    marginBottom: 24,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
   //fontFamily: 'Montserrat',
    color: '#1C1C1E',
  },
  diagnosisOptionsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  optionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBEBF0',
    borderRadius: 32,
    paddingVertical: 8,
    paddingHorizontal: 24,
    marginVertical: 4,
    marginHorizontal: 4,
  },
  selectedOptionButton: {
    backgroundColor: '#007BFF',
  },
  optionText: {
    fontSize: 12,
    fontWeight: '500',
   //fontFamily: 'Montserrat',
    color: '#242426',
  },
  othersContainer: {
    marginTop: 24,
  },
  othersText: {
    fontSize: 12,
    fontWeight: '500',
   //fontFamily: 'Montserrat',
    color: '#1C1C1E',
    marginBottom: 8,
  },
  specifyBox: {
    width: '100%',
    height: 40,
    borderColor: '#C1C3F4',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#0040DD',
    borderRadius: 8,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButtonText: {
   //fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  secondaryButton: {
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
  },
  secondaryButtonText: {
   //fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
  },
});

export default DiagnosisScreen;
