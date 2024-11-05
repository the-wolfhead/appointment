import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ItemsComponent = () => {
  const handlePress = (item) => {
    console.log(`Clicked on: ${item}`);
    // You can navigate to different screens or perform other actions here
  };

  return (
    <ScrollView 
      style={styles.itemsContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.itemsContent}>
        {['General Practice Clinic', 'ENT', 'Dentist', 'Urology', 'Gynaecology', 'Orthopedic', 'Family Medicine'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.item} onPress={() => handlePress(item)}>
            <View style={styles.rectangle}></View>
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemsContainer: {
    width: '100%', // Full width of the screen
    height: 76.4,
    paddingHorizontal: 8,
  },
  itemsContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 16, // Increased margin for better spacing
  },
  rectangle: {
    width: 56,
    height: 56.4,
    backgroundColor: '#D9D9D9',
    borderRadius: 4,
  },
  itemText: {
    width: 'auto', // Automatically adjust width
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'center',
    color: '#1C1C1E',
    marginTop: 4,
  },
});

export default ItemsComponent;
