import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Ensure you have this dependency for icons

const UserProfile = () => {
  return (
    <View style={styles.container}>
      {/* Profile image and name section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://your-image-url.com' }} // Replace with your image URL
          style={styles.profileImage}
        />
        <View style={styles.nameSection}>
          <Text style={styles.userName}>Mr John Ighodalo</Text>
          <Text style={styles.accountText}>Account</Text>
        </View>
      </View>

      {/* Arrow icon */}
      <MaterialIcons name="arrow-forward-ios" size={16} color="#242426" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    width: 342,
    height: 96,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: 197,
    height: 64,
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32, // To make the image circular
    backgroundColor: '#D9D9D9', // Placeholder background
  },
  nameSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 4,
    width: 125,
    height: 36,
  },
  userName: {
    width: 125,
    fontSize: 14,
    fontWeight: '500',
    color: '#242426',
    lineHeight: 16,
  },
  accountText: {
    width: 52,
    fontSize: 12,
    fontWeight: '500',
    color: '#242426',
    lineHeight: 16,
  },
});

export default UserProfile;
