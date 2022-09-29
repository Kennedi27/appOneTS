import { Text, StyleSheet, TouchableOpacity  } from 'react-native';
import React from 'react';
import { RectButton } from 'react-native-gesture-handler';


export interface ButtonProps {
  variant: 'default' | 'primary';
  label: string;
  onPress: () => void;
}

const Button = ({ variant, label, onPress } : ButtonProps) => {
  const backgroundColor = variant === 'primary' ? '#2CB980' : 'rgba(12, 13, 52, 0.05)';
  const color = variant === 'primary' ? '#FFF' : '#000';

  return (
    <TouchableOpacity style={[ styles.container, {backgroundColor} ]} {...{onPress}}>
      <Text style={[ styles.label, {color} ]}>{ label }</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = { variant: 'default' };

export default Button;

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  label: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
