import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Ensure you have this package installed

const MedicalHistoryScreen2 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <View style={styles.iconContainer}>
                        <MaterialIcons name="supervisor-account" size={20} color="#0040DD" />
                    </View>
                    <Text style={styles.subAccounts}>Sub accounts</Text>
                    <Text style={styles.notifications}>Notifications</Text>
                    <MaterialIcons name="arrow-forward-ios" size={16} color="#242426" style={styles.arrow} />
                </View>
            </View>

            <View style={styles.medicalHistory}>
                <Text style={styles.medicalHistoryTitle}>Medical history:</Text>
                <View style={styles.conditions}>
                    <Text style={styles.condition}>Asthma</Text>
                    <Text style={styles.condition}>Diabetes</Text>
                    <Text style={styles.condition}>High blood pressure</Text>
                </View>
            </View>

            <View style={styles.bloodGroup}>
                <Text style={styles.bloodGroupTitle}>Blood group:</Text>
                <Text style={styles.bloodGroupValue}>NA</Text>
            </View>

            <View style={styles.genotype}>
                <Text style={styles.genotypeTitle}>Genotype:</Text>
                <Text style={styles.genotypeValue}>NA</Text>
            </View>

            <View style={styles.allergies}>
                <Text style={styles.allergiesTitle}>Allergies:</Text>
                <Text style={styles.allergiesValue}>None</Text>
            </View>

            <View style={styles.lifestyle}>
                <Text style={styles.lifestyleTitle}>Lifestyle:</Text>
                <View style={styles.lifestyleConditions}>
                    <View style={styles.lifestyleCondition}>
                        <Text style={styles.lifestyleLabel}>Smoker:</Text>
                        <Text style={styles.lifestyleValue}>No</Text>
                    </View>
                    <View style={styles.lifestyleCondition}>
                        <Text style={styles.lifestyleLabel}>Alcohol use:</Text>
                        <Text style={styles.lifestyleValue}>Casual drinker</Text>
                    </View>
                    <View style={styles.lifestyleCondition}>
                        <Text style={styles.lifestyleLabel}>Other recreational drugs:</Text>
                        <Text style={styles.lifestyleValue}>No</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonLabel}>Save & Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#FBFBFD',
    },
    header: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        paddingVertical: 12,
        gap: 8,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    iconContainer: {
        width: 20,
        height: 20,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subAccounts: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        color: '#242426',
    },
    notifications: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 12,
        color: '#545456',
    },
    arrow: {
        marginLeft: 'auto',
    },
    medicalHistory: {
        alignItems: 'flex-start',
        width: '100%',
        paddingVertical: 12,
    },
    medicalHistoryTitle: {
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 12,
        color: '#1C1C1E',
    },
    conditions: {
        flexDirection: 'column',
        gap: 8,
    },
    condition: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 20,
        color: '#242426',
    },
    bloodGroup: {
        paddingVertical: 12,
    },
    bloodGroupTitle: {
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 12,
        color: '#1C1C1E',
    },
    bloodGroupValue: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 20,
        color: '#242426',
    },
    genotype: {
        paddingVertical: 12,
    },
    genotypeTitle: {
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 12,
        color: '#1C1C1E',
    },
    genotypeValue: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 20,
        color: '#242426',
    },
    allergies: {
        paddingVertical: 12,
    },
    allergiesTitle: {
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 12,
        color: '#1C1C1E',
    },
    allergiesValue: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 20,
        color: '#242426',
    },
    lifestyle: {
        paddingVertical: 12,
    },
    lifestyleTitle: {
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 12,
        color: '#1C1C1E',
    },
    lifestyleConditions: {
        flexDirection: 'column',
        gap: 8,
    },
    lifestyleCondition: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    lifestyleLabel: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 20,
        color: '#242426',
    },
    lifestyleValue: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 20,
        color: '#242426',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#0040DD',
        borderRadius: 8,
        width: '100%',
    },
    buttonLabel: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 22,
        color: '#FFFFFF',
        textAlign: 'center',
    },
});

export default MedicalHistoryScreen2;
