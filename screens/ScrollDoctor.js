import React, { useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import HospitalInfoCard from './Hospitals/HospitalInfoCard';
import HealthCareInfo from './Hospitals/HealthCareInfo';

const ScrollDoctor = () => {
  const route = useRoute();
  const { clinicId } = route.params; // Get the clinicId from route params
  const [clinic, setClinic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClinicDetails = async () => {
      try {
        // Replace with your API endpoint
        const response = await fetch(`https://your-api-url.com/clinics/${clinicId}`);
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
      <HealthCareInfo clinic={clinic} />
      {/* Add any other components or additional information here */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: '#FBFBFD',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#FF0000',
  },
});

export default ScrollDoctor;
