import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const AdsComponent = () => {
  const [activeDot, setActiveDot] = useState(0);
  const totalDots = 4; // Total number of ads/dots

  useEffect(() => {
    // Automatically scroll every 5 seconds
    const interval = setInterval(() => {
      setActiveDot((prevDot) => (prevDot + 1) % totalDots);
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [totalDots]);

  const handleDotPress = (index) => {
    setActiveDot(index);
    // Reset automatic scroll timer on manual press
  };

  const renderAdContent = () => {
    // Placeholder for actual ad content based on the activeDot
    switch (activeDot) {
      case 0:
        return <Text>Ad Content 1</Text>;
      case 1:
        return <Text>Ad Content 2</Text>;
      case 2:
        return <Text>Ad Content 3</Text>;
      case 3:
        return <Text>Ad Content 4</Text>;
      default:
        return <Text>Ad Content 1</Text>;
    }
  };

  return (
    <View style={styles.adsContainer}>
      <View style={styles.adsContent}>
        <View style={styles.adRectangle}>
          {renderAdContent()}
        </View>

        <View style={styles.paginationContainer}>
          {Array.from({ length: totalDots }).map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleDotPress(index)}
              style={index === activeDot ? styles.activeDot : styles.inactiveDot}
              activeOpacity={0.7} // Add a slight opacity effect on press
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  adsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    width: '100%', // Full width of the screen
    height: height * 0.25, // 25% of the screen height
    backgroundColor: '#EBEBF0',
  },
  adsContent: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '95%', // 95% of the screen width
    height: '100%', // Full height of the adsContainer
  },
  adRectangle: {
    width: '100%', // Full width of the adsContent
    height: '80%', // 80% of the adsContent height
    backgroundColor: '#D9D9D9',
    borderRadius: 4,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  paginationContainer: {
    flexDirection: 'row',
    padding: 8,
    gap: 8,
    width: 104,
    height: 20,
  },
  activeDot: {
    width: 16,
    height: 4,
    backgroundColor: '#48484A', // Dark Gray for active dot
    borderRadius: 8,
  },
  inactiveDot: {
    width: 16,
    height: 4,
    backgroundColor: '#D9D9D9', // Light Gray for inactive dots
    borderRadius: 8,
  },
});

export default AdsComponent;
