import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import HeaderComp from '../../Drawer/HeaderComp';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { HomeRoute } from '../../../Navigation/Navigations';
import SettingList from '../Fashion/SettingList';

interface SettingProps {
    navigation: DrawerNavigationProp<HomeRoute>
}

const Setting = ({navigation} : SettingProps ) => {
    return (
        <View style={styles.container}>
            <HeaderComp
                left={{ onPress: () => navigation.openDrawer(), icon: 'reorder' }}
                right={{ onPress: () => true, icon: 'shopping-bag' }}
                labelHeader="Setting"
                size={18}
            />
            <View style={styles.wrapContent}>
                <SettingList title="Get Notification" description="Description" />
                <SettingList title="Get Notification" description="Description" />
                <SettingList title="Get Notification" description="Description" />
            </View>
        </View>
    );
};

export default Setting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapContent: {
        paddingHorizontal: 10,
    },
});
