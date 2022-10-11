import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import DrawerNavigation from './DrawerNavigation';
import { StackAppRouters } from './Navigations';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator<StackAppRouters>();

const Routers = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen
                    name="Authentication"
                    component={StackNavigation}
                    options={{
                        headerShown: false,
                    }}
                />
                <AppStack.Screen
                    name="Home"
                    component={DrawerNavigation}
                    options={{
                        headerShown: false,
                    }}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routers;
