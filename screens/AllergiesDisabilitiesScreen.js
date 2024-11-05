import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const AllergiesDisabilitiesScreen = ({ route }) => {
  const navigation = useNavigation();
  const { profileData } = route.params; // Destructure profileData from route params

  const [hasAllergies, setHasAllergies] = useState(null);
  const [allergies, setAllergies] = useState('');
  const [hasDisabilities, setHasDisabilities] = useState(null);
  const [disabilities, setDisabilities] = useState('');
  const [hasMedicationReactions, setHasMedicationReactions] = useState(null);
  const [medicationReactions, setMedicationReactions] = useState('');

  const handleContinue = () => {
    // Merge the collected data with existing profileData
    const updatedProfileData = {
      ...profileData,
      hasAllergies,
      allergies: hasAllergies === 'Yes' ? allergies : null,
      hasDisabilities,
      disabilities: hasDisabilities === 'Yes' ? disabilities : null,
      hasMedicationReactions,
      medicationReactions: hasMedicationReactions === 'Yes' ? medicationReactions : null,
    };
    console.log("The Data Collected is:" + updatedProfileData)

    // Navigate to the LifestyleScreen, passing the updated profileData
    navigation.navigate('LifestyleScreen', { profileData: updatedProfileData });
  };

  return (
    <LinearGradient colors={['#FBFBFD', '#F7F8FD']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Allergies & Disabilities</Text>

        {/* Allergies Section */}
        <View style={styles.section}>
          <Text style={styles.question}>Do you have any allergic reactions to medication, food, or others?</Text>
          <View style={styles.optionRow}>
            <TouchableOpacity
              style={[
                styles.optionButton,
                hasAllergies === 'Yes' && styles.selectedOptionButton
              ]}
              onPress={() => setHasAllergies('Yes')}
            >
              <Text style={styles.optionText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionButton,
                hasAllergies === 'No' && styles.selectedOptionButton
              ]}
              onPress={() => setHasAllergies('No')}
            >
              <Text style={styles.optionText}>No</Text>
            </TouchableOpacity>
          </View>
          {hasAllergies === 'Yes' && (
            <>
              <Text style={styles.label}>Please specify:</Text>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter details here..."
                  multiline
                  value={allergies}
                  onChangeText={setAllergies}
                />
              </View>
            </>
          )}
        </View>

        {/* Disabilities Section */}
        <View style={styles.section}>
          <Text style={styles.question}>Do you have any disabilities?</Text>
          <View style={styles.optionRow}>
            <TouchableOpacity
              style={[
                styles.optionButton,
                hasDisabilities === 'Yes' && styles.selectedOptionButton
              ]}
              onPress={() => setHasDisabilities('Yes')}
            >
              <Text style={styles.optionText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionButton,
                hasDisabilities === 'No' && styles.selectedOptionButton
              ]}
              onPress={() => setHasDisabilities('No')}
            >
              <Text style={styles.optionText}>No</Text>
            </TouchableOpacity>
          </View>
          {hasDisabilities === 'Yes' && (
            <>
              <Text style={styles.label}>Please specify:</Text>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter details here..."
                  multiline
                  value={disabilities}
                  onChangeText={setDisabilities}
                />
              </View>
            </>
          )}
        </View>

        {/* Medication Reaction Section */}
        <View style={styles.section}>
          <Text style={styles.question}>Do you react negatively to any medication?</Text>
          <View style={styles.optionRow}>
            <TouchableOpacity
              style={[
                styles.optionButton,
                hasMedicationReactions === 'Yes' && styles.selectedOptionButton
              ]}
              onPress={() => setHasMedicationReactions('Yes')}
            >
              <Text style={styles.optionText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionButton,
                hasMedicationReactions === 'No' && styles.selectedOptionButton
              ]}
              onPress={() => setHasMedicationReactions('No')}
            >
              <Text style={styles.optionText}>No</Text>
            </TouchableOpacity>
          </View>
          {hasMedicationReactions === 'Yes' && (
            <>
              <Text style={styles.label}>Please specify:</Text>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter details here..."
                  multiline
                  value={medicationReactions}
                  onChangeText={setMedicationReactions}
                />
              </View>
            </>
          )}
        </View>

        {/* Continue & Skip Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skipButton} onPress={() => navigation.goBack()}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 24,
    alignItems: 'flex-start',
    gap: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1C1C1E',
   //fontFamily: 'Montserrat',
  },
  section: {
    width: '100%',
    gap: 16,
  },
  question: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1C1C1E',
    lineHeight: 24,
   //fontFamily: 'Montserrat',
  },
  optionRow: {
    flexDirection: 'row',
    gap: 8,
  },
  optionButton: {
    backgroundColor: '#EBEBF0',
    borderRadius: 32,
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  selectedOptionButton: {
    backgroundColor: '#007BFF',
  },
  optionText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#242426',
   //fontFamily: 'Montserrat',
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1C1C1E',
    lineHeight: 16,
   //fontFamily: 'Montserrat',
  },
  inputBox: {
    width: '100%',
    height: 151,
    borderColor: '#C1C3F4',
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 15,
  },
  input: {
    fontSize: 12,
    color: '#000',
   //fontFamily: 'Montserrat',
    textAlignVertical: 'top',
    flex: 1,
  },
  buttonContainer: {
    marginTop: 24,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButton: {
    backgroundColor: '#0040DD',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginBottom: 12,
  },
  skipButton: {
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
   //fontFamily: 'Montserrat',
  },
  skipButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
   //fontFamily: 'Montserrat',
  },
});

export default AllergiesDisabilitiesScreen;
