import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const ServiceSelector = ({ services = [], onEditPress, onServiceSelect }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.chooseServiceText}>Choose Service</Text>
        <TouchableOpacity style={styles.editButton} onPress={onEditPress}>
          <View style={styles.iconBackground}>
            <Icon name="pencil" size={20} color="#1C1C1E" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Service Options */}
      {services.length > 0 ? (
        services.map((service, index) => (
          <View style={styles.serviceContainer} key={index}>
            <TouchableOpacity style={styles.serviceRow} onPress={() => onServiceSelect(service)}>
              <Text style={styles.categoryText}>{service}</Text>
              <View style={styles.expandIcon}>
                <Icon name="chevron-right" size={16} color="#1C1B1F" />
              </View>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text style={styles.noServicesText}>No services available</Text> // Optional message when no services
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%', // Responsive width
    maxWidth: 358, // Max width as per your design
    paddingVertical: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    width: '100%', // Full width
  },
  chooseServiceText: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: 12,
    color: '#1C1C1E',
  },
  editButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#D9D9D9',
    marginLeft: 8,
  },
  serviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    width: '100%', // Full width
    backgroundColor: '#F2F2F7',
    borderRadius: 4,
    borderColor: '#C7C7CC',
    borderWidth: 1.5,
    marginVertical: 4, // Add some spacing between service options
  },
  serviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  categoryText: {
    flex: 1, // Allow the text to take available space
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: 12,
    color: '#363638',
  },
  expandIcon: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noServicesText: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    color: '#888',
    padding: 12,
  },
});

export default ServiceSelector;
