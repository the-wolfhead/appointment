import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// Get screen width
const { width } = Dimensions.get('window');

const ConsultationSchedule = () => {
  // Array representing the schedule for the week
  const schedule = [
    { day: 'Mon', date: '24', active: false },
    { day: 'Tue', date: '24', active: false },
    { day: 'Wed', date: '24', active: false },
    { day: 'Thu', date: '24', active: true }, // Active day
    { day: 'Fri', date: '24', active: false },
    { day: 'Sat', date: '24', disabled: true },
    { day: 'Sun', date: '24', disabled: true },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Consultation Schedule</Text>
        <View style={styles.icon}></View>
      </View>

      {/* Schedule for the week */}
      <View style={styles.scheduleContainer}>
        {schedule.map((item, index) => (
          <View
            key={index}
            style={[
              styles.dayContainer,
              item.active ? styles.activeDay : item.disabled ? styles.disabledDay : styles.normalDay,
            ]}
          >
            <Text style={[styles.dayText, item.active ? styles.activeDayText : item.disabled ? styles.disabledText : styles.normalText]}>
              {item.day}
            </Text>
            <Text style={[styles.dateText, item.active ? styles.activeDateText : item.disabled ? styles.disabledText : styles.normalDate]}>
              {item.date}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: width * 0.04,
    gap: 12,
    flexGrow: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 24,
  },
  headerText: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 12,
    color: '#1C1C1E',
  },
  icon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#D9D9D9',
  },
  scheduleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 72,
  },
  dayContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 12,
    gap: 20,
    width: '13%', // Adjust based on screen width
    borderRadius: 4,
  },
  normalDay: {
    backgroundColor: '#F2F2F7',
  },
  activeDay: {
    backgroundColor: '#0040DD',
  },
  disabledDay: {
    backgroundColor: '#C7C7CC',
  },
  dayText: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    lineHeight: 16,
  },
  normalText: {
    color: '#7C7C80',
  },
  activeDayText: {
    color: '#FFFFFF',
  },
  disabledText: {
    color: '#EBEBF0',
  },
  dateText: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    lineHeight: 12,
    fontWeight: '600',
  },
  normalDate: {
    color: '#1C1C1E',
  },
  activeDateText: {
    color: '#FFFFFF',
  },
});

export default ConsultationSchedule;
