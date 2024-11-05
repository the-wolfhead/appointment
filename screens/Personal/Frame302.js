import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Frame302 = () => {
  return (
    <View style={styles.container}>
      {/* Frame 308 - Profile Picture */}
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://your-image-url.com' }} // Replace with the actual image URL
        />
      </View>

      {/* Frame 307 - User Name */}
      <View style={styles.nameContainer}>
        <Text style={styles.userName}>Mr John Ighodalo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
    gap: 4,
    width: 342,
    height: 104,
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    gap: 8,
    width: 104,
    height: 104,
  },
  profileImage: {
    width: 104,
    height: 104,
    borderRadius: 52, // Makes the image a circle
    backgroundColor: '#e0e0e0', // Fallback background color if no image
  },
  nameContainer: {
    display: 'none', // Set to 'flex' to display this
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    gap: 4,
    width: 125,
    height: 16,
  },
  userName: {
    width: 125,
    height: 16,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    color: '#242426',
    textAlign: 'center',
  },
});

export default Frame302;
