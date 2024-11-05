import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ProfileCard = ({ userData }) => {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate('More'); // Navigate to the ProfileScreen
  };

  return (
    <TouchableOpacity style={styles.profileContainer} onPress={handleProfilePress}>
      <Avatar.Text size={50} label={userData.first_name?.charAt(0)} />
      <View style={styles.profileInfo}>
        <Text style={styles.profileName}>{userData.first_name || 'User'}</Text>
        <Text style={styles.profileGreeting}>Hello, {userData.greeting || 'Good afternoon'}.</Text>
      </View>
      <Button mode="outlined" style={styles.switchAccountButton}>
        Switch account
      </Button>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
    marginBottom: 16,
    width: '100%', // Make it responsive
  },
  profileInfo: {
    flex: 1, // Allow this view to take up available space
    marginLeft: 12, // Space between avatar and text
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileGreeting: {
    fontSize: 14,
    color: '#555',
  },
  switchAccountButton: {
    marginLeft: 12, // Space between text and button
  },
});

export default ProfileCard;
