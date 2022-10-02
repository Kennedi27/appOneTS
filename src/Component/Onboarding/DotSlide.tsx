import { StyleSheet, View } from 'react-native';
import React from 'react';
import Animated, {useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Config } from '../Config/Config';

export interface DotProps {
    index: number;
    currentIndex: Animated.SharedValue<number>;
}

const DotSlide = ({ currentIndex, index } : DotProps) => {
    const rBackground = useAnimatedStyle(() => {
        const isActive = currentIndex.value === index;
        return {
            backgroundColor: withTiming(isActive ? Config.colors.blueActive : Config.colors.blue, {duration: 200}),
            transform: [{ scale: withTiming(isActive ? 1.5 : 1, {duration: 250}) }],
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
        width: Config.dotSlide.sm,
        height: Config.dotSlide.sm,
        borderRadius: Config.dotSlide.sm / 2,
        margin: Config.dotSlide.sm / 2,
    },
});
