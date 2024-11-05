import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Ensure to have icons installed

const YourComponent = () => {
  return (
    <View style={styles.container}>
      {/* Frame 303: Medical Profile */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Icon name="folder-open" size={20} color="#0040DD" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Medical Profile</Text>
          <Text style={styles.subText}>Notifications</Text>
        </View>
        <Icon name="arrow-forward-ios" size={16} color="#242426" />
      </View>

      {/* Frame 309: Sub-accounts */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Icon name="supervisor-account" size={20} color="#0040DD" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Sub-accounts</Text>
          <Text style={styles.subText}>Setup an account for your child/ward</Text>
        </View>
        <Icon name="arrow-forward-ios" size={16} color="#242426" />
      </View>

      {/* Frame 306: Login & Security */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Icon name="lock" size={20} color="#0040DD" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Login & Security</Text>
          <Text style={styles.subText}>Notifications</Text>
        </View>
        <Icon name="arrow-forward-ios" size={16} color="#242426" />
      </View>

      {/* Frame 307: Enable Push Notifications */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Icon name="notifications-none" size={20} color="#0040DD" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Enable Push Notifications</Text>
          <Text style={styles.subText}>Receive notifications on appointment details</Text>
        </View>
        <Icon name="arrow-forward-ios" size={16} color="#242426" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 342,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    width: 342,
    marginBottom: 8,
  },
  iconContainer: {
    width: 28,
    height: 28,
    backgroundColor: '#E3F1FF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    justifyContent: 'center',
  },
  mainText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: '#242426',
  },
  subText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 12,
    color: '#545456',
  },
});

export default YourComponent;
