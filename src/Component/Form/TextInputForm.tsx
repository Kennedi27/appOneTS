import { View, TouchableWithoutFeedback, StyleSheet, TextInput, TextInputProps } from 'react-native';
import React from 'react';
import { Config } from '../../Component/Config/Config';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface TextInputFormProps extends TextInputProps {
    secureText?: boolean;
    width: number;
}

const TextInputForm = ({ placeholder, secureText, width, ...props } : TextInputFormProps) => {
    return (
        <View style={[styles.container]}>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={secureText}
                style={[styles.inputText, {...{width}}]}
                {...props}
            />
        </View>
    );
};

export default TextInputForm;

export interface TextInputFormIconProps extends TextInputProps {
    secureText?: boolean;
    icon: string;
    width: number;
    size: number;
    color: string;
    onPress?: () => void;
}

export const TextInputFormIcon = ({ placeholder, secureText, width, icon, size, color, onPress, ...props } : TextInputFormIconProps) => {
    return (
        <View style={[styles.container]}>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={secureText}
                style={[styles.inputText, {...{width}}]}
                {...props}
            />
            <TouchableWithoutFeedback style={styles.icon} {...{onPress}}>
                <Icon name={icon} size={size} {...{color}} />
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: Config.spacing.lg,
        height: 55,
        alignItems: 'center',
        backgroundColor: Config.colors.grey,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    inputText: {
        // backgroundColor: Config.colors.grey,
        fontWeight: '500',
    },
    icon: {
        width: 50,
        height: 55,
        justifyContent: 'center',
        // backgroundColor: 'red',
        alignItems: 'flex-start',
    },
});
