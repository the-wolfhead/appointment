import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const HealthCareInfo = () => {
  return (
    <View style={styles.container}>
      <Frame isBordered>
        <IconContainer>
          <IconWrapper>
            <Icon name="stethoscope" size={20} color="#242426" /> {/* Example Icon */}
          </IconWrapper>
          <Text style={styles.iconText}>1</Text> {/* Ensure number is in Text */}
        </IconContainer>
        <Text style={styles.specialtiesText}>Specialties</Text>
      </Frame>
      <Frame isBordered>
        <IconContainer>
          <IconWrapper>
            <Icon name="account-group" size={20} color="#242426" /> {/* Example Icon */}
          </IconWrapper>
          <Text style={styles.iconText}>200k+</Text> {/* Ensure text is in Text */}
        </IconContainer>
        <Text style={styles.specialtiesText}>Number of Patients</Text>
      </Frame>
      <Frame>
        <IconContainer>
          <IconWrapper>
            <Icon name="star" size={20} color="#242426" /> {/* Example Icon */}
          </IconWrapper>
          <Text style={styles.iconText}>3.9</Text> {/* Ensure number is in Text */}
        </IconContainer>
        <Text style={styles.ratingText}>of 5</Text>
        <Text style={styles.ratingText}>Rating</Text>
      </Frame>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    height: 48,
  },
  frame: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: (width - 32) / 3,
    height: '100%',
  },
  bordered: {
    borderWidth: 1,
    borderColor: '#AEAEB2',
    borderRadius: 4,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    marginBottom: 4,
  },
  iconWrapper: {
    width: 24,
    height: 24,
    borderRadius: 24,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#242426',
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  iconText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: '#242426',
    marginLeft: 4,
  },
  specialtiesText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 8,
    lineHeight: 12,
    color: '#7C7C80',
  },
  ratingText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 8,
    lineHeight: 12,
    color: '#7C7C80',
  },
});

// Frame, IconContainer, IconWrapper components
const Frame = ({ isBordered, children }) => {
  return (
    <View style={[styles.frame, isBordered && styles.bordered]}>
      {children}
    </View>
  );
};

const IconContainer = ({ children }) => {
  return <View style={styles.iconContainer}>{children}</View>;
};

const IconWrapper = ({ children }) => {
  return <View style={styles.iconWrapper}>{children}</View>;
};

export default HealthCareInfo;
