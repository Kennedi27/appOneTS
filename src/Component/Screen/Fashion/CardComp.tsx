import { View, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { mix } from 'react-native-redash';
import Animated from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const CardWidth = width * 0.8;
const CardHeight = width * (400 / 350);
const CardBorderRadius = 24;

interface CardCompProps {
    position: Animated.Adaptable<number>;
    backgroundColor?: string;
    imageContent?: number;

}

const CardComp = ({ position, backgroundColor, imageContent }: CardCompProps) => {
    const translateY = mix(position, 0, -50);
    const scale = mix(position, 1, 0.9);
    return (
        <View style={styles.container}>
            <Animated.View style={[ styles.card, {transform: [{ translateY }, {scale}]}, {backgroundColor} ]}>
                <Image source={imageContent} style={styles.images} />
            </Animated.View>
        </View>
    );
};

export default CardComp;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        height: CardHeight,
        width: CardWidth,
        borderRadius: CardBorderRadius,
        justifyContent: 'flex-end',
        overflow: 'hidden',
    },
    images: {
        // position: 'absolute',
        height: CardHeight * 0.85,
        width: undefined,
        resizeMode: 'contain',
    },
});
