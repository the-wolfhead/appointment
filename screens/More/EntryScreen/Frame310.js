import React from 'react';
import { View, StyleSheet } from 'react-native';

const Frame310 = () => {
  return (
    <View style={styles.container}>
      {/* Your child components go here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: 24, // React Native does not support "gap" directly; use margin/padding in child elements instead.
    marginHorizontal: 'auto', // Center horizontally in React Native by combining margin with `alignSelf`.
    width: 342,
    height: 426,
  },
});

export default Frame310;
