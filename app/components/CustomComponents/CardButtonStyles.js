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

const kSize = 40; // Size of button; Also change its value in CardDetailStyles!

const CardButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: colors.Red,
    height: kSize,
    width: kSize,
    justifyContent: 'center',
    borderRadius: kSize / 2,
    position: 'absolute',
    shadowRadius: 15,
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'grey',
    shadowOpacity: 1.0,
  },

  icon: {
    height: kSize - 25,
    width: kSize - 25,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
});

export default CardButtonStyles;
