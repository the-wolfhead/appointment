import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Frame 309 */}
      <View style={styles.section}>
        {/* Frame 159 */}
        <View style={styles.row}>
          <View style={styles.textContainer}>
            <Text style={styles.passwordText}>Password</Text>
            <Text style={styles.changePasswordText}>Change password</Text>
          </View>
          <TouchableOpacity style={styles.arrowContainer}>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
        </View>

        {/* Frame 313 */}
        <View style={styles.row}>
          <View style={styles.textContainer}>
            <Text style={styles.biometricText}>Enable Biometrics Authentication</Text>
            <Text style={styles.loginText}>Log in with face ID</Text>
          </View>
          <TouchableOpacity style={styles.switchContainer}>
            <View style={styles.switch} />
            <Text style={styles.switchLabel}>Off</Text>
          </TouchableOpacity>
        </View>

        {/* Frame 316 */}
        <View style={styles.row}>
          <View style={styles.textContainer}>
            <Text style={styles.subAccountsText}>Sub accounts</Text>
            <Text style={styles.notificationsText}>Notifications</Text>
          </View>
          <TouchableOpacity style={styles.arrowContainer}>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 24,
    gap: 24,
    position: 'absolute',
    width: 390,
    height: 729,
    left: '50%',
    top: 115,
    backgroundColor: '#FBFBFD',
    transform: [{ translateX: -195 }], // Centering
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: 8,
    width: 342,
    height: 124,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 12,
    gap: 4,
    width: 342,
    height: 58,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 4,
    margin: 'auto',
    width: 207,
    height: 34,
  },
  passwordText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: '#242426',
  },
  changePasswordText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 14,
    color: '#545456',
  },
  arrowContainer: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
  },
  arrow: {
    color: '#242426',
  },
  biometricText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: '#242426',
  },
  loginText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 14,
    color: '#545456',
  },
  switchContainer: {
    margin: 'auto',
    width: 48,
    height: 24,
    backgroundColor: '#D8D8DC',
    borderRadius: 24,
    position: 'relative',
  },
  switch: {
    position: 'absolute',
    left: '5%',
    width: 24,
    height: 24,
    backgroundColor: '#545456',
    borderRadius: 12,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  switchLabel: {
    position: 'absolute',
    height: 10,
    left: '56.25%',
    top: '50%',
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 8,
    lineHeight: 10,
    color: '#242426',
    transform: [{ translateY: -5 }],
  },
  subAccountsText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: '#242426',
  },
  notificationsText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 12,
    color: '#545456',
  },
});

export default SettingsScreen;
