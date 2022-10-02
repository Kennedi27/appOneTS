import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

export interface ModelProps {
    picture: number;
    index: number;
    currentIndex: Animated.SharedValue<number>;
}

const Model = ({picture, currentIndex, index}: ModelProps) => {
    const rFixModel = useAnimatedStyle(() => {
        const isActive = currentIndex.value === index;
        // const opacity = interpolate(currentIndex.value, [(index - 1) * width, index,(index + 1) * width], [0, 1, 0], Extrapolate.CLAMP);
        return {
            opacity: withTiming(isActive ? 1 : 0, {duration: 300}),
        };
    });
    return (
        <Animated.View style={[styles.underlay, rFixModel]}>
            <Image source={picture} style={styles.pictures} />
        </Animated.View>
    );
};

export default Model;

const styles = StyleSheet.create({
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        overflow: 'hidden',
    },
    pictures: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
    },
});
