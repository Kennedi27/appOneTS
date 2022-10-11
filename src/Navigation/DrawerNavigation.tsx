import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeRoute } from './Navigations';
import { Homescreen } from './ListRouter';

const Drawer = createDrawerNavigator<HomeRoute>();
import DrawerContentItems, { DRAWER_WIDTH } from './DrawerContentItems';

import PersonalInformation from '../Component/Screen/Account/PersonalInformation';

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Homescreen"
            drawerContent={() => <DrawerContentItems />}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    width: DRAWER_WIDTH,
                },
            }}
        >
                <Drawer.Screen
                    name="Homescreen"
                    component={Homescreen}
                />
                <Drawer.Screen
                    name="PersonalInformation"
                    component={PersonalInformation}
                />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
