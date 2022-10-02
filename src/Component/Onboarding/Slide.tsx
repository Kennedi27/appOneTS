import { View, Text, Dimensions,StyleSheet } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');
export const SLIDE_HEIGHT = 0.60 * height;

export interface SildeProps {
    label: string;
    right?: boolean;
}

const Slide = ({ label, right } : SildeProps) => {
    const transform = [
        {translateY: (SLIDE_HEIGHT - 100) / 2 },
        {translateX: right ? width / 2 - 50 : -width / 2 + 50 },
        {rotate: right ? '-90deg' : '90deg'},
    ];
    return (
        <View style={ styles.container }>
            <View style={[ styles.titleContainer, { transform }]}>
                <Text style={ styles.title }>{label}</Text>
            </View>
        </View>
    );
};

export default Slide;

const styles = StyleSheet.create({
    container: {
        width,
    },
    titleContainer: {
        height: 100,
        justifyContent: 'center',
    },
    title: {
        fontSize: 65,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
    },
});
