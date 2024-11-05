import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Button = () => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.iconContainer}>
        {/* Add your icon here if needed */}
      </View>
      <Text style={styles.buttonText}>✏️ Label</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    boxSizing: 'border-box', // Not needed in React Native
    display: 'flex', // Not needed in React Native
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 'auto',
    width: 342,
    height: 44,
    borderColor: '#0040DD',
    borderWidth: 1,
    borderRadius: 8,
  },
  iconContainer: {
    display: 'none', // Use conditional rendering to show/hide if needed
    width: 20,
    height: 22,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Montserrat', // Ensure you have the font loaded
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'center',
    color: '#0040DD',
    marginLeft: 10, // Adjust spacing from icon if needed
  },
});

export default Button;
