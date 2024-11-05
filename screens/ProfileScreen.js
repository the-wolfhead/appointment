import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation, useRoute } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Access the data passed from CreateAccountScreen
  const { email, password } = route.params || {};

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sex, setSex] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false); // Close the picker after selection
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  const handleSubmit = () => {
    const profileData = {
      firstName,
      lastName,
      dateOfBirth: date.toLocaleDateString('en-GB'), // Format date as DD/MM/YYYY
      sex,
      city,
      state,
      email, // Include email from CreateAccountScreen
      password, // Include password from CreateAccountScreen
    };

    // Navigate to MedicalHistoryScreen and pass the collected data
    navigation.navigate('MedicalHistoryScreen', { profileData });
  };

  return (
    <View style={styles.container}>
      {/* Progress Indicator */}
      <View style={styles.progressContainer}>
        <View style={styles.progressGray}></View>
        <View style={styles.progressBlue}></View>
      </View>

      {/* Profile Title */}
      <Text style={styles.profileText}>Profile</Text>

      {/* First Name */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>First Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
      </View>

      {/* Last Name */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Last Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
      </View>

      {/* Date of Birth */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Date of Birth</Text>
        <TouchableOpacity onPress={showDatePicker} style={styles.inputContainer}>
          <Text style={styles.inputText}>
            {date ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}` : 'DD/MM/YYYY'}
          </Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
            maximumDate={new Date()}
          />
        )}
      </View>

      {/* Sex */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Sex</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Select Gender"
            value={sex}
            onChangeText={setSex}
          />
        </View>
      </View>

      {/* City */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>City</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter City"
            value={city}
            onChangeText={setCity}
          />
        </View>
      </View>

      {/* State */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>State</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter State"
            value={state}
            onChangeText={setState}
          />
        </View>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FBFBFD',
  },
  progressContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 4,
  },
  progressGray: {
    width: '50%',
    height: 4,
    backgroundColor: '#D9D9D9',
  },
  progressBlue: {
    width: '50%',
    height: 4,
    backgroundColor: '#0031AA',
  },
  profileText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 24,
  },
  fieldContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#C1C3F4',
    borderRadius: 8,
  },
  inputText: {
    fontSize: 14,
    color: '#000',
  },
  input: {
    width: '100%',
  },
  button: {
    width: '100%',
    padding: 12,
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
});

export default ProfileScreen;
