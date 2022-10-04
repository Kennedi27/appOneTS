import { Text, StyleSheet  } from 'react-native';
import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Config } from '../Config/Config';

export interface ButtonProps {
    variant: 'default' | 'primary' | 'transparent';
    label: string;
    onPress: () => void;
}

const ButtonCustom = ({ variant, label, onPress } : ButtonProps) => {
    const backgroundColor = variant === 'primary' ? Config.colors.primary : ( variant === 'transparent' ? 'transparent' : Config.colors.grey);
    const color = variant === 'primary' ? '#FFF' : '#000';

    return (
        <RectButton style={[ styles.container, {backgroundColor} ]} {...{onPress}}>
            <Text style={[ styles.label, {color} ]}>{ label }</Text>
        </RectButton>
    );
};

ButtonCustom.defaultProps = { variant: 'default' };

export default ButtonCustom;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    label: {
        color: '#FFF',
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
