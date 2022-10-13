import { View, ScrollView, Dimensions, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { HomeRoute } from '../../../Navigation/Navigations';
import HeaderComp from '../../Drawer/HeaderComp';
import { Config } from '../../Config/Config';
import BoxGrid from '../Fashion/BoxGrid';
import Button from '../../Button/Button';
import ButtonCustom from '../../Button/ButtonCustom';

interface HomescreenProps {
    navigation: DrawerNavigationProp<HomeRoute, 'Homescreen'>
}

const { width, height } = Dimensions.get('window');

const boxItems = [
    {
        id: 1,
        color: Config.colors.blueActive,
        aspectRatio: 0.7,
        selectedItem: false,
    },
    {
        id: 2,
        color: Config.colors.chocolate,
        aspectRatio: 1,
        selectedItem: false,
    },
    {
        id: 3,
        color: Config.colors.pink,
        aspectRatio: 0.6,
        selectedItem: false,
    },
    {
        id: 4,
        color: Config.colors.primary,
        aspectRatio: 1,
        selectedItem: false,
    },
    {
        id: 5,
        color: Config.colors.danger,
        aspectRatio: 1,
        selectedItem: false,
    },
    {
        id: 6,
        color: Config.colors.primary,
        aspectRatio: 170 / 145,
        selectedItem: false,
    },
    {
        id: 7,
        color: Config.colors.chocolate,
        aspectRatio: 198 / 145,
        selectedItem: false,
    },
    {
        id: 8,
        color: Config.colors.blueActive,
        aspectRatio: 0.5,
        selectedItem: false,
    },
];

const Homescreen = ({navigation}: HomescreenProps) => {
    const [items, setItems] = useState(boxItems);
    const removeBoxSelect = () => {
        setItems(items.filter((item) => !item.selectedItem));
    };

    useEffect(() => {
        const subscriber = navigation.addListener('focus', function(){
            setItems(boxItems);
        });

        return () => {
            subscriber()
        }
    }, [navigation]);

    return (
        <View style={Styles.container}>
            <HeaderComp
                labelHeader="Favorite Color"
                size={20}
                left={{ icon: 'reorder', onPress: () => navigation.openDrawer() }}
                right={{ icon: 'shopping-bag', onPress: () => true }}
            />
            <ScrollView>
                <View style={Styles.boxContainer}>
                    <View style={ Styles.boxContainerChildR }>
                        {
                            items.filter((_,i) => i % 2 !== 0).map((item) => <BoxGrid key={item.id} itemOption={item} width={(width - 30) / 2} />)
                        }
                    </View>
                    <View style={ Styles.boxContainerChildL }>
                        {
                            items.filter((_,i) => i % 2 === 0).map((item) => <BoxGrid key={item.id} width={(width - 30) / 2} itemOption={item} />)
                        }
                    </View>
                </View>
            </ScrollView>
            <View style={Styles.footer}>
                <ButtonCustom label="Remove From Favorite" variant="primary" onPress={() => removeBoxSelect()} />
            </View>
        </View>
    );
};

export default Homescreen;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:  Config.colors.white,
        height: height,
    },
    boxContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 10,
    },
    boxContainerChildR: {
        marginRight: 5,
    },
    boxContainerChildL: {
        marginLeft: 5,
    },
    footer: {
        backgroundColor: Config.colors.title,
        padding: 20,
        borderTopStartRadius: 150,
    },
});
