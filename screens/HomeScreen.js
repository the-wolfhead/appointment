import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'; // Import Image
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AdsComponent from './Home/AdsComponent';
import ItemsComponent from './Home/ItemsComponent';
import Items from './Home/Items';
import Items2 from './Home/Items2';
import Items3 from './Home/Items3';
import ProfileCard from './Home/ProfileCard';


const HomeScreen = ({ route }) => {
    const userData = route.params?.user || {}; // Receive user data from navigation
    console.log(userData);
    const [doctors, setDoctors] = useState([]);
    const [clinics, setClinics] = useState([]);
    const [labs, setLabs] = useState([]);
    const [pharmacies, setPharmacies] = useState([]);

    // Function to fetch doctors data
    const fetchDoctors = async () => {
        try {
            const response = await fetch('https://zhs-backend.onrender.com/doctors');
            if (!response.ok) {
                throw new Error('Failed to fetch doctors data');
            }
            const data = await response.json();
            setDoctors(data);
        } catch (error) {
            console.error('Error fetching doctors:', error);
        }
    };

    // Fetch doctors data when the component mounts
    useEffect(() => {
        fetchDoctors();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Profile Section */}
            <ProfileCard userData={userData} />

            <AdsComponent />

            {/* Booking Options */}
            
            <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.itemsContainer}
    >
      {/* Item 1 - Book consultation with a doctor */}
      <TouchableOpacity style={styles.item} onPress={() => handlePress('Book consultation with a doctor')}>
        <View style={styles.iconBackground}>
                    <Icon name="stethoscope" size={30} color="#fff" />
        </View>
        <Text style={styles.itemText}>Book consultation with a doctor</Text>
      </TouchableOpacity>

      {/* Item 2 - Book a hospital/clinic appointment */}
      <TouchableOpacity style={styles.item} onPress={() => handlePress('Book a hospital/clinic appointment')}>
        <View style={styles.iconBackground}>
                    <Icon name="hospital-building" size={30} color="#fff" />
        </View>
        <Text style={styles.itemText}>Book a hospital/clinic appointment</Text>
      </TouchableOpacity>

      {/* Item 3 - Book a Labs/diagnostic clinic appointment */}
      <TouchableOpacity style={styles.item} onPress={() => handlePress('Book a Labs/diagnostic clinic appointment')}>
        <View style={styles.iconBackground}>
                    <Icon name="flask" size={30} color="#fff" />
        </View>
        <Text style={styles.itemText}>Book a Labs/diagnostic clinic appointment</Text>
      </TouchableOpacity>

      {/* Item 4 - Find a pharmacy near you */}
      <TouchableOpacity style={styles.item} onPress={() => handlePress('Find a pharmacy near you')}>
        <View style={styles.iconBackground}>
          <Image source={{ uri: 'pharmacy_icon_url' }} style={styles.icon} />
        </View>
        <Text style={styles.itemText}>Find a pharmacy near you</Text>
      </TouchableOpacity>
    </ScrollView>

            {/* Specialties Section */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Specialties</Text>
                <Button>View more</Button>
            </View>
            <ItemsComponent />

            {/* Doctors Available Section */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Doctors available</Text>
                <Button>View more</Button>
            </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>

            {doctors.map((doctor) => (
                <View key={doctor.id} style={styles.doctorContainer}>
                    <View style={styles.doctorInfo}>
                        <Image source={require('../assets/doctor.jpeg')} style={styles.doctorImage} />
                        <View style={styles.details}>
                            <Text style={styles.doctorName}>{doctor.name}</Text>
                            <View style={styles.specializationContainer}>
                                <Text style={styles.specialization}>{doctor.specialization}</Text>
                                <Text style={styles.hospital}>- {doctor.hospital || 'Unknown Hospital'}</Text>
                            </View>
                            <View style={styles.statusContainer}>
                                <Text style={styles.status}>Available</Text>
                                <View style={styles.ratingContainer}>
                                    <View style={styles.ratingStar}></View>
                                    <Text style={styles.rating}>{doctor.rating || 'N/A'}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.pricing}>
                        <View style={styles.priceRow}>
                            <Text style={styles.currency}>₦</Text>
                            <Text style={styles.price}>2,000.00</Text>
                            <Text style={styles.perHour}>/ hr</Text>
                        </View>
                        <View style={styles.priceRow}>
                            <Text style={styles.currency}>₦</Text>
                            <Text style={styles.price}>10,000.00</Text>
                            <Text style={styles.perHour}>/ hr</Text>
                        </View>
                    </View>
                </View>
            ))}
                        </ScrollView>


            {/* Hospitals & Clinics Section */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Hospitals & Clinics near you</Text>
                <Button>View more</Button>
            </View>
            <Items />

            <AdsComponent />

            {/* Labs & Diagnostic Clinics Section */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Labs & Diagnostic clinics near you</Text>
                <Button>View more</Button>
            </View>
            <Items2 />

            {/* Pharmacies Section */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Pharmacies near you</Text>
                <Button>View more</Button>
            </View>
            <Items3 />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileInfo: {
        flex: 1,
        marginLeft: 10,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    profileGreeting: {
        color: '#666',
    },
    switchAccountButton: {
        borderColor: '#0000ff',
        borderWidth: 1,
    },
    card: {
        marginBottom: 20,
    },
    editProfileButton: {
        marginTop: 10,
        backgroundColor: '#0000ff',
    },
     itemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: 358,
    height: 68,
  },
  item: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    gap: 4,
    width: 114,
    height: 68,
    backgroundColor: '#0040DD',
    borderRadius: 4,
  },
  hospitalItem: {
    backgroundColor: '#0071A4', // Teal
  },
  labsItem: {
    backgroundColor: '#3634A3', // Indigo
  },
  pharmacyItem: {
    backgroundColor: '#248A3D', // Green
  },
  iconBackground: {
    width: 20,
    height: 20,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  itemText: {
    width: 100,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 8,
    lineHeight: 12,
    textAlign: 'center',
    color: '#F2F2F7',
  },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    horizontalScroll: {
        marginBottom: 20,
    },
    specialtyCard: {
        width: 100,
        marginRight: 10,
    },
    doctorContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 0,
    gap: 12,
    width: 296,
    height: 76,
    backgroundColor: '#FCFCFC',
    borderRadius: 8,
  },
  doctorInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    width: 260,
    height: 76,
  },
  doctorImage: {
    width: 76,
    height: 76,
    borderRadius: 12,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    width: 176,
    height: 76,
  },
  doctorName: {
    width: 138,
    height: 16,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    color: '#1C1C1E',
  },
  specializationContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    width: 176,
    height: 16,
  },
  specialization: {
    width: 87,
    height: 16,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: '#0040DD',
  },
  hospital: {
    width: 85,
    height: 16,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: '#AEAEB2',
  },
  statusContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    width: 55,
    height: 16,
  },
  status: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: '#248A3D',
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    width: 36,
    height: 16,
  },
  ratingStar: {
    width: 16,
    height: 16,
    borderRadius: 24,
    backgroundColor: '#FFCC00',
  },
  rating: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: '#1C1C1E',
  },
  pricing: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    width: 296,
    height: 28,
    borderTopWidth: 0.45,
    borderTopColor: '#AEAEB2',
  },
  priceRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  currency: {
    width: 10,
    height: 10,
  },
  price: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: '#242426',
  },
  perHour: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: '#242426',
  },
});

export default HomeScreen;
