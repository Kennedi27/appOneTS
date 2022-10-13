import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Config } from '../../Config/Config';

const { height } = Dimensions.get('window');

const BackgroundComp = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.boxHeader]} />
            <View style={[styles.box, styles.boxBody]}>
            <View style={styles.boxChildBody}/>
            </View>
            <View style={[styles.box, styles.boxFooter]} />
        </View>
    );
};

export default BackgroundComp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        flex: 1 / 3,
    },
    boxHeader: {
        backgroundColor: '#FFF',
    },
    boxBody: {
        backgroundColor: Config.colors.title,
    },
    boxChildBody: {
    flex: 1,
        backgroundColor: '#FFF',
        borderBottomEndRadius: (height / 3) / 2,
    },
    boxFooter: {
        backgroundColor: Config.colors.title,
        borderTopLeftRadius: (height / 3) / 2,
    },
});
