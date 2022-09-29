import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Button from '../Button/Button';

export interface PropsSubSlide {
    subtitle: string;
    description: string;
    last?: boolean;
    onPress: () => void;
}

const SubSlide = ({ subtitle, description, last, onPress }: PropsSubSlide) => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.subtitle }>{ subtitle }</Text>
            <Text style={ styles.description }>{ description }</Text>
            <Button
                variant={ last ? 'primary' : 'default' }
                label={ last ? "Let's Started" : 'Next' }
                onPress={onPress}
            />
        </View>
    );
};

export default SubSlide;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 15,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    subtitle: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 25,
    },
    description: {
        color: '#000',
        fontSize: 14,
        marginBottom: 40,
    },
});
