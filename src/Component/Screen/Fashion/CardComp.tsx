import { View, Image, StyleSheet, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { mix } from 'react-native-redash';
import Animated, { Easing, useAnimatedGestureHandler, useAnimatedReaction, useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');
const CardWidth = width * 0.8;
const CardHeight = width * (400 / 350);
const CardBorderRadius = 24;


interface CardCompProps {
    position: Animated.Adaptable<number>;
    backgroundColor?: string;
    imageContent?: number;
    index: number;
    shuffleBack: Animated.SharedValue<boolean>;
}

const side = (width + CardWidth) / 2;
const SNAP_POINTS = [-side, 0, side];

const CardComp = ({ position, backgroundColor, imageContent, index, shuffleBack }: CardCompProps) => {
    const translateY = mix(position, 0, -50);
    const scale = mix(position, 1, 0.9);

    const x  = useSharedValue(0);
    const y  = useSharedValue(-height);

    useAnimatedReaction(() => shuffleBack.value, () => {
        if (shuffleBack.value){
            const delay = 100 + index;
            x.value = withDelay(delay, withSpring(0, {},  () => {
                shuffleBack.value = false;
            }));
            // x.value = withSpring(0);
        }
    });

    const EventGesturere = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, {x: number; y: number;}>({
        onStart: (_, ctx) => {
            ctx.x = x.value;
            ctx.y = y.value;
        },
        onActive: ({ translationX, translationY }, ctx) => {
            x.value = ctx.x + translationX;
            y.value = ctx.y + translationY;
        },
        onEnd: ({ velocityX, velocityY }) => {
            const SnapW = x.value < -(CardWidth / 2) ? SNAP_POINTS[0] : (x.value >= (CardWidth / 2) ? SNAP_POINTS[2] : SNAP_POINTS[1]);
            x.value = withSpring(SnapW, {velocity: velocityX}, () => {
                if (index === 0 && SnapW !== 0) {
                    shuffleBack.value = true;
                }
            });
            y.value = withSpring(0, {velocity: velocityY}, () => {
                if (index === 0 && SnapW !== 0) {
                    shuffleBack.value = true;
                }
            });
        },
    });

    const rStyle = useAnimatedStyle(() => {
        return {transform: [{translateX: x.value}, {translateY: y.value}]}
    });

    useEffect(() => {
        const delay = 100 + index * 200;
        const easeInO = () => {
            y.value = withDelay(delay, withTiming(0, {
                duration: 200,
                easing: Easing.inOut(Easing.ease),
            }));
        };

        return easeInO();

    }, [index, y, x]);

    return (
        <>
            <PanGestureHandler onGestureEvent={EventGesturere}>
                <Animated.View style={[styles.container, rStyle]}>
                    <Animated.View style={[ styles.card, {transform: [{ translateY }, {scale}]}, {backgroundColor} ]}>
                        <Image source={imageContent} style={styles.images} />
                    </Animated.View>
                </Animated.View>
            </PanGestureHandler>
        </>
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
