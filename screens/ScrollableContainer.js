import React, { useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet, ActivityIndicator, Text, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import HospitalInfoCard from './Hospitals/HospitalInfoCard';
import HealthCareInfo from './Hospitals/HealthCareInfo';
import ServiceSelector from './Hospitals/ServiceSelector';
import AboutSection from './Hospitals/AboutSection';
import ConsultationSchedule from'./Hospitals/ConsultationSchedule';

// Get screen dimensions for responsiveness
const { width, height } = Dimensions.get('window');

const ScrollableContainer = () => {
  const route = useRoute();
  const { clinicId } = route.params; // Get the clinicId from route params
  const [clinic, setClinic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClinicDetails = async () => {
      try {
        // Replace with your API endpoint
        const response = await fetch(`https://zhs-backend.onrender.com/clinics/${clinicId}`);
        const data = await response.json();
        setClinic(data);
      } catch (error) {
        console.error("Error fetching clinic details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClinicDetails();
  }, [clinicId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!clinic) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Clinic not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HospitalInfoCard clinic={clinic} />
      //<HealthCareInfo clinic={clinic} />
      <AboutSection />
      <ServiceSelector />
      <ConsultationSchedule />
      {/* Add any other components or additional information here */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingVertical: height * 0.03, // Responsive vertical padding (3% of screen height)
    paddingHorizontal: width * 0.04, // Responsive horizontal padding (4% of screen width)
    backgroundColor: '#FBFBFD',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height, // Ensure it fills the screen height
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height, // Full screen height for error state
  },
  errorText: {
    fontSize: width * 0.04, // Responsive font size (4% of screen width)
    color: '#FF0000',
  },
});

export default ScrollableContainer;
