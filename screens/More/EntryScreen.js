import React from 'react';
import { View, StyleSheet } from 'react-native';

const EntryScreen = () => {
  return (
    <View style={styles.container}>
      {/* Add your components here, like a welcome message, buttons, etc. */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 48,
    width: 390,
    height: 649,
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -195 }], // Centering (50% of width)
    top: 111,
    backgroundColor: '#FBFBFD',
  },
});

export default EntryScreen;
