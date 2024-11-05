import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ItemsComponent2 = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.itemsContainer}
    >
      {/* Item 1 - Book consultation with a doctor */}
      <View style={styles.item}>
        <View style={styles.iconBackground}>
          <Image source={{ uri: 'stethoscope_icon_url' }} style={styles.icon} />
        </View>
        <Text style={styles.itemText}>Book consultation with a doctor</Text>
      </View>

      {/* Item 2 - Book a hospital/clinic appointment */}
      <View style={[styles.item, styles.hospitalItem]}>
        <View style={styles.iconBackground}>
          <Image source={{ uri: 'hospital_icon_url' }} style={styles.icon} />
        </View>
        <Text style={styles.itemText}>Book a hospital/clinic appointment</Text>
      </View>

      {/* Item 3 - Book a Labs/diagnostic clinic appointment */}
      <View style={[styles.item, styles.labsItem]}>
        <View style={styles.iconBackground}>
          <Image source={{ uri: 'labs_icon_url' }} style={styles.icon} />
        </View>
        <Text style={styles.itemText}>Book a Labs/diagnostic clinic appointment</Text>
      </View>

      {/* Item 4 - Find a pharmacy near you */}
      <View style={[styles.item, styles.pharmacyItem]}>
        <View style={styles.iconBackground}>
          <Image source={{ uri: 'pharmacy_icon_url' }} style={styles.icon} />
        </View>
        <Text style={styles.itemText}>Find a pharmacy near you</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8, // Add some padding for better spacing
  },
  item: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8, // Increased padding for touchable area
    marginRight: 16, // Space between items
    width: width * 0.25, // Responsive width (25% of screen width)
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
    marginBottom: 4, // Space between icon and text
  },
  icon: {
    width: 20,
    height: 20,
  },
  itemText: {
    width: '100%', // Full width for text
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: 10, // Slightly increased font size for better readability
    lineHeight: 12,
    textAlign: 'center',
    color: '#F2F2F7',
  },
});

export default ItemsComponent2;
