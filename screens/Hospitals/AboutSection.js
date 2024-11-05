import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

// Get device screen dimensions
const { width, height } = Dimensions.get('window');

const AboutSection = () => {
  return (
    <View style={styles.container}>
      {/* About Header */}
      <Text style={styles.aboutText}>About</Text>

      {/* Description Container */}
      <View style={styles.descriptionContainer}>
        {/* Description Text */}
        <Text style={styles.descriptionText}>
          Scantrik Diagnostics is technology driven to discover and deliver diagnostic insights and innovations
          that help to improve human health. We offer a wide range of products and services that benefit patients,
          healthcare providers, hospitals, pharmaceutical, insurance companies, and employers.
        </Text>

        {/* Readmore Button */}
        <TouchableOpacity>
          <Text style={styles.readmoreText}>Readmore</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Main container (Frame 137)
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: 12,
    width: '100%',  // Full width of the screen
    paddingHorizontal: width * 0.04, // Responsive padding
    height: height * 0.2, // Adjust height proportionally
    alignSelf: 'stretch',
    flexGrow: 0,
  },

  // "About" text style
  aboutText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 12, // matches the box height
    color: '#1C1C1E',
    marginBottom: 8, // Add margin for spacing
  },

  // Description container (Frame 138)
  descriptionContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%', // Full width
  },

  // Description text style
  descriptionText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20, // line height is 167% of font size
    color: '#242426',
    textAlign: 'justify', // Makes the text layout consistent
  },

  // "Readmore" button/text style
  readmoreText: {
    marginTop: 10,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 20, // line height is 167% of font size
    color: '#242426',
  },
});

export default AboutSection;
