import { View } from 'react-native';
import React from 'react';
import Styles from './Styles';
import Button from '../../Button/Button';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { HomeRoute } from '../../../Navigation/Navigations';

interface LoginProps {
    navigation: DrawerNavigationProp<HomeRoute, 'Homescreen'>
}

const Homescreen = ({navigation}: LoginProps) => {
    return (
        <View style={Styles.container}>
            <Button variant="primary" label="Open Drawer" onPress={() => navigation.openDrawer()}/>
        </View>
    );
};

export default Homescreen;
