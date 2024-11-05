import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserProfileScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <View style={styles.avatarContainer}>
                    <Image source={{ uri: 'your-image-url.jpg' }} style={styles.avatar} />
                </View>
                <View style={styles.userInfo}>
                    <Text style={styles.username}>Mr John Ighodalo</Text>
                    <Text style={styles.emailLabel}>Email Address</Text>
                    <Text style={styles.email}>marouxd846@gmail.com</Text>
                    <Text style={styles.dateOfBirthLabel}>Date Of Birth</Text>
                    <Text style={styles.dateOfBirth}>20th July, 1983</Text>
                    <Text style={styles.sexLabel}>Sex</Text>
                    <Text style={styles.sex}>Male</Text>
                    <Text style={styles.addressLabel}>Address</Text>
                    <Text style={styles.address}>6391 Elgin St. Celina, Delaware 10299</Text>
                    <Text style={styles.phoneLabel}>Phone Number</Text>
                    <Text style={styles.phone}>+234 8158 5249 40</Text>
                </View>
            </View>
            <View style={styles.notificationsContainer}>
                <View style={styles.subAccounts}>
                    <Text style={styles.subAccountsText}>Sub accounts</Text>
                    <Text style={styles.notificationsText}>Notifications</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#FBFBFD',
    },
    profileHeader: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 0,
        gap: 24,
        width: 342,
        height: 592,
    },
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 104,
        height: 104,
    },
    avatar: {
        width: 104,
        height: 104,
        borderRadius: 52, // For a circular avatar
    },
    userInfo: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 0,
    },
    username: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 16,
        color: '#242426',
    },
    emailLabel: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 14,
        color: '#545456',
    },
    email: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        color: '#242426',
    },
    dateOfBirthLabel: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 14,
        color: '#545456',
    },
    dateOfBirth: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        color: '#242426',
    },
    sexLabel: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 14,
        color: '#545456',
    },
    sex: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        color: '#242426',
    },
    addressLabel: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 14,
        color: '#545456',
    },
    address: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        color: '#242426',
    },
    phoneLabel: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 14,
        color: '#545456',
    },
    phone: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        color: '#242426',
    },
    notificationsContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 12,
        gap: 4,
        width: 342,
        height: 58,
    },
    subAccounts: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: 342,
        height: 58,
    },
    subAccountsText: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        color: '#242426',
    },
    notificationsText: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 12,
        color: '#545456',
    },
});

export default UserProfileScreen;
