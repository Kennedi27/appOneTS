import { View, StyleSheet, Dimensions, Image } from 'react-native';
import React, {useRef} from 'react';
import Animated, { interpolateColor, useAnimatedScrollHandler, useAnimatedStyle, useDerivedValue, useSharedValue } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import {
    Model,
    DotSlide,
    Slide,
    SubSlide,
    SLIDE_HEIGHT,
} from './Index';
import { Config } from '../Config/Config';

import { Navigations, StackNavigatorProps } from '../../Navigation/Navigations';

const BORDER_RADIUS = Config.borderRadius.md;
const { width } = Dimensions.get('window');

const slidesItem = [
    {
        label: 'Relaxed',
        color: '#BFEAF5',
        description: 'This is for Description Only. Test For Footer Content, So you can changes',
        subtitle: 'Title footer 1',
        pictures: require('../../Assets/img/4.png'),
    },
    {
        label: 'Playful',
        color: '#BEECC4',
        description: 'This is for Description Only. Test For Footer Content, So you can changes',
        subtitle: 'Title footer 2',
        pictures: require('../../Assets/img/1.png'),
    },
    {
        label: 'Excentric',
        color: '#FFE4d9',
        description: 'This is for Description Only. Test For Footer Content, So you can changes',
        subtitle: 'Title footer 3',
        pictures: require('../../Assets/img/3.png'),
    },
    {
        label: 'Funky',
        color: '#BFEAF5',
        description: 'This is for Description Only. Test For Footer Content, So you can changes',
        subtitle: 'Title footer 4',
        pictures: require('../../Assets/img/2.png'),
    },
];

const OnboardingScreen = ({ navigation }: StackNavigatorProps<Navigations, 'OnboardingScreen'>) => {
    const x = useSharedValue(0);
    const scroll = useRef<Animated.ScrollView>(null);
    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            x.value = event.contentOffset.x;
        },
    });

    const rStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            x.value,
            slidesItem.map((_, i) => i * width ),
            slidesItem.map((item) => item.color ),
        );
        // console.log(x.value);
        return {backgroundColor};
    });

    const rContentFooter = useAnimatedStyle(() => {
        return {
            transform: [{
                translateX: -x.value,
            }],
        };
    });

    const isActiveDot = useDerivedValue(() => {
        return Math.round(x.value / width);
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, rStyle]}>
                {
                    slidesItem.map((item, index) => {
                    return (
                            <Model picture={item.pictures} key={index.toString()} currentIndex={isActiveDot}  index={index}/>
                        );
                    })
                }
                <Animated.ScrollView
                    ref={scroll}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    snapToInterval={width}
                    decelerationRate="fast"
                    scrollEventThrottle={1}
                    onScroll={scrollHandler}
                >
                {
                    slidesItem.map((item, index) => {
                        return <Slide key={index} label={ item.label } right={!!(index % 2)} />;
                    })
                }
                </Animated.ScrollView>
            </Animated.View>
            <Animated.View style={[styles.footer, rStyle]}>
                <Animated.View style={ styles.footerContent }>
                    <View style={styles.pagination}>
                        {
                            slidesItem.map((_, index) => {
                                return <DotSlide key={index.toString()} index={index} currentIndex={isActiveDot} />;
                            })
                        }
                    </View>
                    <Animated.View style={[ styles.footerSlide, rContentFooter]}>
                        {
                        slidesItem.map(({ subtitle, description }, i) => {
                            const last = i === slidesItem.length - 1;
                            return <SubSlide
                                        key={i.toString()}
                                        last={last}
                                        onPress={() => {
                                            if (last){
                                                navigation.navigate('WelcomeScreen');
                                            } else if (scroll.current) {
                                                scroll.current?.scrollTo({x: width * (i + 1), animated: true});
                                            }
                                        }}
                                        {...{subtitle, description}}
                                    />;
                            })
                        }
                    </Animated.View>
                </Animated.View>
            </Animated.View>
        </View>
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: BORDER_RADIUS,
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: Config.spacing.md,
    },
    footer: {
        flex: 1,
    },
    footerContent: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'white',
        borderTopLeftRadius: BORDER_RADIUS,
    },
    footerSlide: {
        display: 'flex',
        flexDirection: 'row',
        width: width * slidesItem.length,
    },
});
