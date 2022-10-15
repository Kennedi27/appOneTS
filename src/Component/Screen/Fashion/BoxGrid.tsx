import { View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Config } from '../../Config/Config';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width: wWidht} = Dimensions.get('window');

interface BoxGridProps {
    width: number;
    itemOption: {
        id: number;
        color: string;
        aspectRatio: number;
        selectedItem: boolean;
    };
}

const BoxGrid = ({ itemOption, width}: BoxGridProps) => {
    const [select, setSelect] = useState(false);
    const backgroundColor = itemOption.color;
    const height = wWidht * itemOption.aspectRatio;
    return (
        <TouchableOpacity
            style={[{backgroundColor, height, width}, styles.container]}
            onPress={() => {
                        setSelect((prev) => !prev );
                        itemOption.selectedItem = !itemOption.selectedItem;
                        console.log(itemOption.selectedItem);
                    }
                }
            >
                {
                    itemOption.selectedItem && (
                        <View style={styles.endRow}>
                            <View style={styles.contCheck}>
                                <Icon size={16} name="check" color={Config.colors.white} />
                            </View>
                        </View>)
                }
        </TouchableOpacity>
    );
};

export default BoxGrid;

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        borderRadius: 10,
    },
    contCheck: {
        backgroundColor: Config.colors.blueActive,
        width: 22,
        height: 22,
        borderRadius: 11,
        alignItems: 'center',
        justifyContent: 'center',
    },
    endRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 10,
    },
});
