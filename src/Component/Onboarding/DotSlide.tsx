import { StyleSheet, View } from 'react-native';
import React from 'react';
import Animated, {useAnimatedStyle, withTiming } from 'react-native-reanimated';

export interface DotProps {
    index: number;
    currentIndex: Animated.SharedValue<number>;
}

const DotSlide = ({ currentIndex, index } : DotProps) => {
    const rBackground = useAnimatedStyle(() => {
        const isActive = currentIndex.value === index;
        return {
            backgroundColor: withTiming(isActive ? 'blue' : 'grey', {duration: 200}),
        };
    });

    return (
        <Animated.View
            style={[styles.dot, rBackground]}
        />
    );
};

export default DotSlide;

const styles = StyleSheet.create({
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 4,
    },
});
