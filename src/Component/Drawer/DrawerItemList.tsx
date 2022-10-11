import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Config } from '../Config/Config';
import { RectButton } from 'react-native-gesture-handler';

interface DrawerItemProps {
    icon: string;
    bgColor: string;
    screen?: string;
    label: string;
    onPress: () => void;
}

const DrawerItemList = ({ icon, bgColor, label, onPress }: DrawerItemProps ) => {
    const backgroundColor = bgColor;
    return (
        <RectButton style={styles.container} {...{onPress}}>
            <View style={[styles.icon, {backgroundColor}]}>
                <Icon name={icon} size={15} color="#FFFFFF" />
            </View>
            <Text style={styles.label}>{label}</Text>
        </RectButton>
    );
};

export default DrawerItemList;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 15,
        paddingHorizontal: 15,
        paddingVertical: 8,
        alignItems: 'center',
    },
    label: {
        color: Config.colors.title,
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 15,
    },
    icon: {
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
