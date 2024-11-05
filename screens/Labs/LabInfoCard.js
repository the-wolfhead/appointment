import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window'); // Get device screen width for responsive styling

const HospitalInfoCard = ({ clinic }) => {
  if (!clinic) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Clinic Image */}
      <View style={styles.hospitalImageContainer}>
        <Image
          source={require('../../assets/hospital.png')}
          style={styles.hospitalImage}
        />
      </View>

      {/* Clinic Info */}
      <View style={styles.clinicInfoContainer}>
        <View style={styles.clinicHeader}>
          <Text style={styles.clinicName}>{clinic.name}</Text>
          <Text style={styles.subInfo}>{clinic.clinic_type}</Text>
        </View>

        {/* Working Days and Hours */}
        <View style={styles.infoRow}>
          <Icon name="calendar-check" size={width * 0.05} style={styles.icon} />
          <Text style={styles.infoText}>Work Days: {clinic.workDays || 'N/A'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="clock-outline" size={width * 0.05} style={styles.icon} />
          <Text style={styles.infoText}>Work Hours: {clinic.workHours || 'N/A'}</Text>
        </View>

        {/* Contact Info */}
        <View style={styles.infoRow}>
          <Icon name="phone" size={width * 0.05} style={styles.icon} />
          <Text style={styles.infoText}>Phone Number: {clinic.phoneNumber || 'N/A'}</Text>
        </View>

        {/* Location */}
        <View style={styles.infoRow}>
          <Icon name="map-marker" size={width * 0.05} style={styles.icon} />
          <Text style={styles.infoText}>Location: {clinic.location || 'N/A'}</Text>
        </View>

        {/* Website */}
        <View style={styles.infoRow}>
          <Icon name="web" size={width * 0.05} style={styles.icon} />
          <Text style={styles.infoText}>Website: {clinic.website || 'N/A'}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Allow the ScrollView to grow
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  hospitalImageContainer: {
    width: '100%',
    height: width * 0.5, // Set height dynamically based on the device width (50% of width)
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 8,
    marginBottom: 20,
  },
  hospitalImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'contain', // Cover the container without distortion
  },
  clinicInfoContainer: {
    width: '100%',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  clinicHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  clinicName: {
    fontSize: width * 0.035, // Responsive font size based on screen width
    fontWeight: 'bold',
  },
  subInfo: {
    fontSize: width * 0.04, // Responsive font size based on screen width
    color: '#555',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  icon: {
    marginRight: 8,
  },
  infoText: {
    fontSize: width * 0.025, // Responsive font size
    color: '#333',
  },
});

export default HospitalInfoCard;
