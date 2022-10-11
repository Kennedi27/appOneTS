import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import HeaderComp from '../../Drawer/HeaderComp';
import { Config } from '../../Config/Config';
import { DrawerNavigatorPropsList } from '../../../Navigation/Navigations';

const { height } = Dimensions.get('window');

const PersonalInformation = ({navigation}: DrawerNavigatorPropsList<'PersonalInformation'> ) => {
  return (
    <View style={styles.container}>
      <HeaderComp
        labelHeader="Account"
        left={{ icon: 'reorder', onPress: () => navigation.openDrawer() }}
        right={{ icon: 'shopping-bag', onPress: () => true }}
      />
      <Text>PersonalInformation</Text>
    </View>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  Config.colors.white,
    paddingHorizontal: Config.spacing.md,
    height: height,
  },
});
