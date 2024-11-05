import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Lifestyle2Screen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Receive data from the previous screen
  const { lifestyleData } = route.params;

  const [alcoholConsumption, setAlcoholConsumption] = useState('');
  const [alcoholFrequency, setAlcoholFrequency] = useState(''); // Daily/Weekly/Monthly
  const [alcoholQuantity, setAlcoholQuantity] = useState(''); // Number of bottles per day
  const [exerciseRegularly, setExerciseRegularly] = useState('');

  const handleSaveAndContinue = async () => {
    const dataToSubmit = {
      ...lifestyleData,
      alcoholConsumption,
      alcoholQuantity,
      alcoholFrequency,
      exerciseRegularly,
    };
    console.log(dataToSubmit)

    try {
      const response = await fetch('https://zhs-backend.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      });

      // Log response text to check if it's returning JSON or HTML
      const responseText = await response.text();
      console.log('Response Text:', responseText);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the response as JSON if applicable
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (e) {
        throw new Error('Failed to parse response as JSON');
      }

      const { id } = result; // Assume the API returns an ID

      // Navigate to HomeScreen with the ID
      navigation.navigate('HomeScreen', { userId: id });
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.frame33877}>
        <View style={styles.frame286}>
          <Text style={styles.lifestyleText}>Lifestyle</Text>
        </View>
        <View style={styles.frame33870}>
          <View style={styles.rectangle2911} />
          <View style={styles.rectangle2910} />
          <View style={styles.rectangle2914} />
          <View style={styles.rectangle2915} />
          <View style={styles.rectangle2913} />
          <View style={styles.rectangle2912} />
        </View>
        <View style={styles.frame340}>
          <Text style={styles.questionText}>Do you drink alcohol?</Text>
          <View style={styles.frame336}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => setAlcoholConsumption('Yes')}
            >
              <Text style={styles.optionText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => setAlcoholConsumption('No')}
            >
              <Text style={styles.optionText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
        {alcoholConsumption === 'Yes' && (
          <>
            <View style={styles.frame281}>
              <Text style={styles.questionText}>On average, how many bottles do you drink per day?</Text>
              <TextInput
                style={styles.frame68}
                keyboardType="numeric"
                placeholder="Enter number"
                onChangeText={setAlcoholQuantity}
                value={alcoholQuantity}
              />
            </View>
            <View style={styles.frame337}>
              <Text style={styles.questionText}>How often do you drink alcohol?</Text>
              <View style={styles.frame336}>
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => setAlcoholFrequency('Daily')}
                >
                  <Text style={styles.optionText}>Daily</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => setAlcoholFrequency('Weekly')}
                >
                  <Text style={styles.optionText}>Weekly</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => setAlcoholFrequency('Monthly')}
                >
                  <Text style={styles.optionText}>Monthly</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
        <View style={styles.frame342}>
          <Text style={styles.questionText}>Do you exercise regularly?</Text>
          <View style={styles.frame337}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => setExerciseRegularly('Yes')}
            >
              <Text style={styles.optionText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => setExerciseRegularly('No')}
            >
              <Text style={styles.optionText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.primaryButton} onPress={handleSaveAndContinue}>
            <Text style={styles.primaryButtonText}>Save & Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.goBack()}>
            <Text style={styles.secondaryButtonText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FBFBFD',
  },
  frame33877: {
    alignItems: 'flex-start',
    marginHorizontal: 'auto',
    width: 358,
  },
  frame286: {
    alignItems: 'flex-start',
    gap: 4,
    width: 358,
  },
  lifestyleText: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    color: '#1C1C1E',
  },
  frame33870: {
    flexDirection: 'row',
    gap: 8,
    width: 358,
    height: 4,
  },
  rectangle2911: {
    width: 83.5,
    height: 4,
    backgroundColor: '#D9D9D9',
  },
  rectangle2910: {
    width: 83.5,
    height: 4,
    backgroundColor: '#0031AA',
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
  rectangle2913: {
    width: 79.5,
    height: 4,
    backgroundColor: '#D9D9D9',
    display: 'none',
  },
  rectangle2912: {
    width: 79.5,
    height: 4,
    backgroundColor: '#D9D9D9',
    display: 'none',
  },
  frame329: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 32,
    width: 358,
  },
  frame340: {
    alignItems: 'flex-start',
    gap: 16,
    width: 358,
  },
  questionText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: '#1C1C1E',
  },
  frame336: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    width: 143,
  },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: '#EBEBF0',
    borderRadius: 32,
  },
  optionText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 24,
    color: '#242426',
  },
  frame281: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 4,
    width: 358,
  },
  frame68: {
    borderColor: '#C1C3F4',
    borderWidth: 0.556,
    borderRadius: 8,
    width: 358,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  frame337: {
    alignItems: 'flex-start',
    gap: 4,
    width: 358,
  },
  frame342: {
    alignItems: 'flex-start',
    gap: 16,
    width: 358,
    display: 'none',
  },
  buttonContainer: {
    marginVertical: 24,
    width: 358,
    alignSelf: 'stretch',
  },
  primaryButton: {
    backgroundColor: '#0040DD',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 46,
  },
  primaryButtonText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    color: '#FFFFFF',
  },
  secondaryButton: {
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 46,
    marginTop: 12,
  },
  secondaryButtonText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    color: '#000000',
  },
});

export default Lifestyle2Screen;
