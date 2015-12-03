/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */
import React from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const {
   StyleSheet,
 } = React;

 const kSize = 50;

 const CardButtonStyles = StyleSheet.create({
   button: {
     //backgroundColor: '#1abc9c',
     height: kSize,
     width: kSize,
     justifyContent: 'center',
     borderRadius: kSize/2,
   },
   opacity: {
     opacity: 0.5,
   },
   icon: {
     height: kSize-25,
     width: kSize-25,
     alignSelf: 'center',
     backgroundColor: 'rgba(0,0,0,0)'
   },
 });

 export default CardButtonStyles;
