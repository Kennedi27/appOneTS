import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const {width: wWidht} = Dimensions.get('window');

interface BoxGridProps {
    // id?: number;
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
                <View>
                    {
                        itemOption.selectedItem ?
                            <Text>{itemOption.selectedItem ? 'Y' : 'N'}</Text> : <Text>N</Text>
                        
                    }
                </View>
        </TouchableOpacity>
    );
};

export default BoxGrid;

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        borderRadius: 10,
    },
});
