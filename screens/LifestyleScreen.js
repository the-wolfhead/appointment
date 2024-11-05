import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const LifestyleScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  // Receive data from previous screen
  const { medicalData } = route.params;
  
  // State to store lifestyle data
  const [smokes, setSmokes] = useState(null);
  const [sticksPerDay, setSticksPerDay] = useState('');

  // Handler for 'Save & Continue'
  const handleSaveAndContinue = () => {
    // Update the medical data with the current screen's data
    const updatedData = {
      ...medicalData,
      lifestyle: {
        smokes,
        sticksPerDay
      }
    };
    console.log(updatedData)

    // Navigate to the next screen with the updated data
    navigation.navigate('Lifestyle2Screen', { medicalData: updatedData });
  };

  // Handler for 'Skip'
  const handleSkip = () => {
    // Update the medical data with null values for lifestyle data
    const updatedData = {
      ...medicalData,
      lifestyle: {
        smokes: null,
        sticksPerDay: null
      }
    };

    // Navigate to the next screen with the updated data
    navigation.navigate('Lifestyle2Screen', { medicalData: updatedData });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.frame33880}>
        <View style={styles.frame33876}>
          <View style={styles.frame286}>
            <Text style={styles.lifestyle}>Lifestyle</Text>
            {/* Additional description could be added here if needed */}
          </View>

          {/* Rectangle Progress Bar */}
          <View style={styles.frame33870}>
            <View style={styles.rectangle2910} />
            <View style={styles.rectangle2911} />
            <View style={styles.rectangle2914} />
            <View style={styles.rectangle2915} />
          </View>

          {/* Lifestyle Option: Do you smoke? */}
          <View style={styles.frame329}>
            <Text style={styles.question}>Do you smoke?</Text>

            {/* Yes/No Buttons */}
            <View style={styles.frame337}>
              <TouchableOpacity 
                style={styles.yesButton} 
                onPress={() => setSmokes(true)}>
                <Text style={styles.yesText}>Yes</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.noButton} 
                onPress={() => setSmokes(false)}>
                <Text style={styles.noText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Number of Sticks per Day Question */}
          <View style={styles.frame281}>
            <Text style={styles.subQuestion}>
              On average, how many sticks do you smoke per day?
            </Text>

            {/* Input Frame */}
            <View style={styles.inputFrame}>
              <TextInput
                style={styles.inputField}
                value={sticksPerDay}
                onChangeText={setSticksPerDay}
                keyboardType="numeric"
                placeholder="Number of sticks"
              />
            </View>
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.frame330}>
          <TouchableOpacity style={styles.primaryButton} onPress={handleSaveAndContinue}>
            <Text style={styles.primaryButtonText}>Save & Continue</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={handleSkip}>
            <Text style={styles.secondaryButtonText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 24,
    gap: 24,
    width: 390,
    height: 709,
    backgroundColor: '#FBFBFD',
    flexGrow: 1,
  },
  frame33880: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: 24,
    margin: '0 auto',
    width: 358,
    height: 240,
  },
  frame33876: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: 24,
    width: 358,
    height: 240,
  },
  frame286: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: 4,
    width: 358,
    height: 24,
  },
  lifestyle: {
    width: 86,
    height: 24,
   //fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    color: '#1C1C1E',
  },
  frame33870: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    gap: 8,
    width: 358,
    height: 4,
  },
  rectangle2910: {
    width: 83.5,
    height: 4,
    backgroundColor: '#0031AA',
  },
  rectangle2911: {
    width: 83.5,
    height: 4,
    backgroundColor: '#D9D9D9',
  },
  rectangle2914: {
    width: 83.5,
    height: 4,
    backgroundColor: '#D9D9D9',
  },
  rectangle2915: {
    width: 83.5,
    height: 4,
    backgroundColor: '#D9D9D9',
  },
  frame329: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: 8,
    gap: 32,
    width: 358,
    height: 164,
  },
  question: {
    width: 94,
    height: 16,
   //fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: '#1C1C1E',
    textAlign: 'center',
  },
  frame337: {
    flexDirection: 'row',
    gap: 8,
    width: 143,
    height: 40,
  },
  yesButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    width: 69,
    height: 40,
    backgroundColor: '#EBEBF0',
    borderRadius: 32,
  },
  yesText: {
   //fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 24,
    color: '#242426',
  },
  noButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    width: 66,
    height: 40,
    backgroundColor: '#EBEBF0',
    borderRadius: 32,
  },
  noText: {
   //fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 24,
    color: '#242426',
  },
  frame281: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: 4,
    width: 358,
    height: 60,
  },
  subQuestion: {
    width: 358,
    height: 16,
   //fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: '#1C1C1E',
  },
  inputFrame: {
    width: 358,
    height: 40,
    borderWidth: 0.5,
    borderColor: '#C1C3F4',
    borderRadius: 8,
    padding: 15,
  },
  inputField: {
    width: '100%',
    height: '100%',
   //fontFamily: 'Montserrat',
    fontSize: 12,
    color: '#1C1C1E',
  },
  frame330: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
    width: 358,
    height: 104,
    margin: '0 auto',
  },
  primaryButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    width: 358,
    height: 46,
    backgroundColor: '#0040DD',
    borderRadius: 8,
  },
  primaryButtonText: {
   //fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    color: '#FFFFFF',
  },
  secondaryButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    width: 358,
    height: 46,
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
  },
  secondaryButtonText: {
   //fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    color: '#000000',
  },
});

export default LifestyleScreen;
