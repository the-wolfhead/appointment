import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Frame309 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Email Section */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Email Address</Text>
        <Text style={styles.sectionValue}>marouxd846@gmail.com</Text>
      </View>

      {/* First Name Section */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>First Name</Text>
        <Text style={styles.sectionValue}>John</Text>
      </View>

      {/* Last Name Section */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Last Name</Text>
        <Text style={styles.sectionValue}>Ighodalo</Text>
      </View>

      {/* Date of Birth Section */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Date of Birth</Text>
        <Text style={styles.sectionValue}>20th July, 1983</Text>
      </View>

      {/* Sex Section */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Sex</Text>
        <Text style={styles.sectionValue}>Male</Text>
      </View>

      {/* Address Section */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Address</Text>
        <Text style={styles.sectionValue}>6391 Elgin St. Celina, Delaware 10299</Text>
      </View>

      {/* Phone Number Section */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Phone Number</Text>
        <Text style={styles.sectionValue}>+234 8158 5249 40</Text>
      </View>

      {/* Close Account Section */}
      <View style={styles.closeAccountSection}>
        <Text style={styles.closeAccountLabel}>Close Account</Text>
        <Text style={styles.closeAccountDescription}>Deactivate your ZHS account</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  section: {
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: '#545456',
  },
  sectionValue: {
    fontSize: 12,
    fontWeight: '500',
    color: '#242426',
  },
  closeAccountSection: {
    marginTop: 24,
    alignItems: 'flex-start',
  },
  closeAccountLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#D70015',
  },
  closeAccountDescription: {
    fontSize: 10,
    fontWeight: '500',
    color: '#545456',
  },
});

export default Frame309;
