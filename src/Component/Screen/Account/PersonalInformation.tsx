import { View, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import HeaderComp from '../../Drawer/HeaderComp';
import { Config } from '../../Config/Config';
import { DrawerNavigatorPropsList } from '../../../Navigation/Navigations';
import { CardComp } from '../Fashion';
import BackgroundComp from '../Fashion/BackgroundComp';

const { height } = Dimensions.get('window');

const cardItems = [
  {
    potition: 1,
    image: require('../../../Assets/img/1.png'),
    bgColor: Config.cardColor.g0,
  },
  {
    potition: 0.5,
    image: require('../../../Assets/img/1.png'),
    bgColor: Config.cardColor.g2,
  },
  {
    potition: 0,
    image: require('../../../Assets/img/1.png'),
    bgColor: Config.cardColor.g4,
  },
];

const PersonalInformation = ({navigation}: DrawerNavigatorPropsList<'PersonalInformation'> ) => {
  return (
    <View style={styles.container}>
      <HeaderComp
        labelHeader="Account"
        left={{ icon: 'reorder', onPress: () => navigation.openDrawer() }}
        right={{ icon: 'shopping-bag', onPress: () => true }}
        size={18}
      />
      <View style={ styles.flex1 }>
        <BackgroundComp />
        {
          cardItems.map((item, index) => {
            return (<CardComp key={index} position={item.potition} backgroundColor={item.bgColor} imageContent={item.image} />);
          })
        }
      </View>
    </View>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  Config.colors.white,
    height: height,
  },
  flex1: {
    flex: 1,
  },
});
