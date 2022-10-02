import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from './Styles';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import Button from '../../Button/Button';
import { Navigations, StackNavigatorProps } from '../../../Navigation/Navigations';

const WelcomeScreen = ({navigation} : StackNavigatorProps<Navigations, 'WelcomeScreen'>) => {
    const sBackgroundColor = useAnimatedStyle(() => {
        return {backgroundColor: 'rgba(172, 148, 244, 0.5)'};
    });
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.topLayout, sBackgroundColor]}>
                <View style={styles.underlay}>
                    <Image source={require('../../../Assets/img/5.png')} style={styles.pictures} />
                </View>
            </Animated.View>
            <Animated.View style={[styles.bottomLayout, sBackgroundColor]}>
                <View style={styles.bottonLayoutContent}>
                    <Text style={styles.title}>Let's get Started</Text>
                    <Text style={styles.description}>Login to your account below or sign up for an amazing axperience</Text>
                    <Button variant="primary" label="Have an account? Login" onPress={() => navigation.navigate('Login')} />
                    <Button variant="default" label="Join us, Register" onPress={() => navigation.navigate('Register')} />
                    <Button variant="transparent" label="Forgot Password" onPress={() => navigation.navigate('ForgotPassword')} />
                </View>
            </Animated.View>
        </View>
    );
};

export default WelcomeScreen;
