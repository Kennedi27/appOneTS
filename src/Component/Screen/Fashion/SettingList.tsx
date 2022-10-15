import { View, Text, StyleSheet, Switch } from 'react-native';
import React, { useState } from 'react';
import { Config } from '../../Config/Config';

interface SettingListProps {
    title: string;
    description: string;
}

const SettingList = ({ title, description } : SettingListProps) => {
    const [selected, setSelected] = useState(false);
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            <Switch value={selected} trackColor={{ true: Config.colors.primary, false: '#CCC' }} onValueChange={setSelected} />
        </View>
    );
};

export default SettingList;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: Config.colors.title,
    },
    description: {
        fontSize: 12,
        color: Config.colors.description,
    },
});
