import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Config } from '../Config/Config';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


interface HeaderCompProps {
    labelHeader: string;
    left: {
        icon: string;
        onPress: () => void
    },
    right: {
        icon: string;
        onPress: () => void
    },
    size: number;
}

const HeaderComp = ({labelHeader, left, right, size}: HeaderCompProps) => {
    return (
        <View style={styles.container}>
            <RectButton style={styles.roundedIcon} onPress={left.onPress}>
                <Icon name={left.icon} {...{size}} color={Config.colors.title} />
            </RectButton>
            <Text style={styles.labelHeader}>{labelHeader}</Text>
            <RectButton style={styles.roundedIcon} onPress={right.onPress}>
                <Icon name={right.icon} {...{size}} color={Config.colors.title} />
            </RectButton>
        </View>
    );
};

export default HeaderComp;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        alignItems: 'center',
    },
    labelHeader:{
        color: Config.colors.title,
        fontSize: 16,
        fontWeight: 'bold',
    },
    roundedIcon: {
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
    },

});
