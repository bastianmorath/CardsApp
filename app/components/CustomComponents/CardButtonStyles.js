/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */
import React from 'react-native';
import colors from '../../constants/colors';

const {
   StyleSheet,
} = React;

const kSize = 50;

const CardButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: colors.Red,
    height: kSize,
    width: kSize,
    justifyContent: 'center',
    borderRadius: kSize * 0.5,
    position: 'absolute',
    shadowRadius: 15,
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'grey',
    shadowOpacity: 1.0,
  },

  icon: {
    height: kSize * 0.5,
    width: kSize * 0.5,
    alignSelf: 'center',
    backgroundColor: 'black',
  },
});

export default CardButtonStyles;
