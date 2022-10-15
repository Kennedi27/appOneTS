import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeRoute } from './Navigations';
import { Homescreen, PersonalInformation, Setting } from './ListRouter';

const Drawer = createDrawerNavigator<HomeRoute>();
import DrawerContentItems, { DRAWER_WIDTH } from './DrawerContentItems';

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
                <Drawer.Screen
                    name="Setting"
                    component={Setting}
                />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
