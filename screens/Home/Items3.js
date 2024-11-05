import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const DoctorsComponent = ({ clinic }) => {
  const handleDoctorPress = (clinicName) => {
    console.log(`Clicked on: ${clinicName}`);
    // You can navigate to the clinic's details or perform other actions
  };

  return (
    <View style={styles.frame120}>
      {/* Doctor's details */}
      <TouchableOpacity 
        style={styles.doctors}
        onPress={() => handleDoctorPress(clinic.name)}
      >
        <View style={styles.frame118}>
          <Image source={require('../../assets/hospital.png')} style={styles.rectangle8} />
          <View style={styles.frame115}>
            <Text style={styles.hospitalName}>{clinic.name}</Text>
            <View style={styles.frame130}>
              <Text style={styles.category}>{clinic.clinic_type}</Text>
            </View>
          </View>
          <View style={styles.frame139}>
            <View style={styles.frame131}>
              <View style={styles.hotelClass}>
                <Text style={styles.rating}>{clinic.rating}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Hospital Operating Hours */}
      <View style={styles.frame119}>
        <Text style={styles.days}>Mon-Sun</Text>
        <Text style={styles.alwaysOpen}>Always Open</Text>
      </View>
    </View>
  );
};

const Items3 = () => {
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const response = await fetch('https://zhs-backend.onrender.com/pharmacies');
        const data = await response.json();
        setClinics(data); // Assuming the API returns an array of clinics
      } catch (error) {
        console.error('Error fetching clinics:', error);
      }
    };

    fetchClinics();
  }, []);

  return (
    <View style={styles.items}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
        {clinics.map((clinic) => (
          <DoctorsComponent key={clinic.id} clinic={clinic} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 4,
    gap: 12,
    width: '100%', // Full width of the screen
    height: 128,
    borderRadius: 8,
  },
  scrollView: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  frame120: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 12,
    gap: 4,
    width: width * 0.7, // 70% of screen width for the clinic card
    height: 128,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginRight: 12, // Add space between each card
  },
  doctors: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
    width: '100%', // Full width of the frame120
    height: 72,
  },
  frame118: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    gap: 8,
    width: '100%', // Full width of the frame120
    height: 72,
  },
  rectangle8: {
    width: 72,
    height: 72,
    borderRadius: 12,
  },
  frame115: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: 4,
    width: '60%', // Adjust to fit within the row
  },
  hospitalName: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    color: '#1C1C1E',
  },
  frame130: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    gap: 4,
  },
  category: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: '#0040DD',
  },
  frame139: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    gap: 2,
  },
  frame131: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    gap: 8,
    borderRadius: 24,
  },
  hotelClass: {
    width: 16,
    height: 16,
    backgroundColor: '#FFCC00',
    position: 'absolute',
    top: '25%',
    left: '15%',
    borderRadius: 24,
  },
  rating: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: '#1C1C1E',
  },
  frame119: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
    gap: 8,
    borderTopWidth: 0.45,
    borderTopColor: '#AEAEB2',
    width: '100%', // Full width of the frame120
    height: 28,
  },
  days: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: '#242426',
  },
  alwaysOpen: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 12,
    color: '#3A3A3C',
  },
});

export default Items3;
