import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Config } from '../Component/Config/Config';
import { RectButton, ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import DrawerItemList from '../Component/Drawer/DrawerItemList';

const { width, height } = Dimensions.get('window');
export const DRAWER_WIDTH = width * 0.85;

const items = [
    {
        icon: 'umbrella',
        bgColor: Config.colors.primary,
        label: 'Outfit Ideas',
        screen: 'Homescreen',
    },
    {
        icon: 'heartbeat',
        bgColor: Config.colors.blueActive,
        label: 'Favorite Outfit',
        screen: 'PersonalInformation',
    },
    {
        icon: 'user',
        bgColor: Config.colors.chocolate,
        label: 'Personal Information',
        screen: 'PersonalInformation',

    },
    {
        icon: 'clock-o',
        bgColor: Config.colors.danger,
        label: 'Transaction History',
        screen: 'PersonalInformation',
    },
    {
        icon: 'gears',
        bgColor: Config.colors.pink,
        label: 'Setting',
        screen: 'Setting',

    },
    {
        icon: 'sign-out',
        bgColor: Config.colors.title,
        label: 'Logout',
        screen: 'PersonalInformation',
    },
] as const;

const DrawerContentItems = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.headerInfo}>
                <View style={styles.headerTitle}>
                    <RectButton onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
                        <Icon size={15} name="close" color={Config.colors.white} />
                    </RectButton>
                    <Text style={styles.headerText}>My Profile</Text>
                    <TouchableWithoutFeedback>
                        <Icon size={15} name="close" color={Config.colors.white} />
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <View style={styles.wrapProfileImage}>
                <View style={styles.profileImage} />
            </View>
            <View style={styles.bodyInfo}>
                <View style={styles.contentItems}>
                    <View style={styles.wrapAccountInfo}>
                        <Text style={styles.accountName}>Kennedi Nadeak</Text>
                        <Text style={styles.accountEmail}>kennedinadeak@gmail.com</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {items.map((item, index) => {
                            return <DrawerItemList key={index} {...item} />;
                        })}
                    </ScrollView>
                </View>
            </View>
            <View style={styles.footerInfo} />
        </View>
    );
};

export default DrawerContentItems;

const styles = StyleSheet.create({
    container: {
        height,
        overflow: 'hidden',
        backgroundColor: Config.colors.white,
    },
    headerInfo: {
        height: height * 0.2,
        backgroundColor: Config.colors.title,
        borderBottomEndRadius: (height * 0.2) / 2,
    },
    headerTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 15,
        fontWeight: '400',
        color: Config.colors.white,
    },
    bodyInfo: {
        height: height * 0.65,
        backgroundColor: Config.colors.title,
    },
    wrapProfileImage: {
        ...StyleSheet.absoluteFillObject,
        transform: [{translateY: (height * 0.2) - 40}],
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        zIndex: 3,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'green',
    },
    contentItems: {
        height: height * 0.65,
        backgroundColor: Config.colors.white,
        borderTopStartRadius: (height * 0.2) / 2,
        borderBottomEndRadius: (height * 0.2) / 2,
    },
    wrapAccountInfo: {
        marginTop: 60,
        marginBottom: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    accountName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Config.colors.title,
    },
    accountEmail: {
        fontSize: 13,
        color: Config.colors.title,
    },
    footerInfo: {
        height: height * 0.15,
        backgroundColor: Config.colors.title,
        borderTopStartRadius: (height * 0.2) / 2.5,
        bottom: 0,
    },
});
