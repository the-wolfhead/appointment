import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ChangePasswordScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('https://your-api-url.com/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer YOUR_AUTH_TOKEN`, // Replace with user's auth token
        },
        body: JSON.stringify({
          newPassword,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Password changed successfully');
      } else {
        Alert.alert('Error', result.message || 'Failed to change password');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Change Password */}
      <View style={styles.section}>
        <Text style={styles.label}>Change Password</Text>
      </View>

      {/* New Password */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>New Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            secureTextEntry={!showPassword}
            value={newPassword}
            onChangeText={setNewPassword}
            placeholder="Enter new password"
          />
          <TouchableOpacity onPress={toggleShowPassword}>
            <Text style={styles.showButton}>{showPassword ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Confirm New Password */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Confirm New Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            secureTextEntry={!showPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm new password"
          />
          <TouchableOpacity onPress={toggleShowPassword}>
            <Text style={styles.showButton}>{showPassword ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleChangePassword}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>{isLoading ? 'Updating...' : 'Save & Continue'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FBFBFD',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  section: {
    alignSelf: 'stretch',
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#242426',
  },
  inputContainer: {
    width: 342,
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.56,
    borderColor: '#444446',
    borderRadius: 8,
    padding: 15,
    width: '100%',
  },
  input: {
    flex: 1,
    fontSize: 12,
  },
  showButton: {
    fontSize: 12,
    color: '#1C1C1E',
    textDecorationLine: 'underline',
  },
  button: {
    width: 342,
    paddingVertical: 12,
    backgroundColor: '#0040DD',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

export default ChangePasswordScreen;
