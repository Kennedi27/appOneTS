import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
    OnboardingScreen,
    WelcomeScreen,
    Login,
    Register,
    ForgotPassword,
    Homescreen,
} from './ListRouter';
import { Navigations } from './Navigations';

const AuthenticationStack = createStackNavigator<Navigations>();
    const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator initialRouteName="OnboardingScreen">
            <AuthenticationStack.Screen
                name="OnboardingScreen"
                component={OnboardingScreen}
                options={{
                    headerShown: false,
                }}
            />
            <AuthenticationStack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <AuthenticationStack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <AuthenticationStack.Screen
                name="Register"
                component={Register}
                options={{
                    headerShown: false,
                }}
            />
            <AuthenticationStack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{
                    headerShown: false,
                }}
            />
            <AuthenticationStack.Screen
                name="Homescreen"
                component={Homescreen}
                options={{
                    headerShown: false,
                }}
            />
        </AuthenticationStack.Navigator>
    );
};

const Routers = () => {
    return (
        <NavigationContainer>
            <AuthenticationNavigator />
        </NavigationContainer>
    );
};

export default Routers;
