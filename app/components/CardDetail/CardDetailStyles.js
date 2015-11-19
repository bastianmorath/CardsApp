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

const kMarginTop = 32;
const kCellMarginVertical = 3;
const kCellMarginSide = 10;

const CardDetailStyles = StyleSheet.create({

  scrollViewHolder: {
    flex: 1,
    backgroundColor: colors.Grey,
  },

  listView: {
    flex: 1,
    marginTop: kMarginTop,
    backgroundColor: colors.White,
    margin: kCellMarginSide,
  },

  detailtextview: {
    flex: 1,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  separator: {
    height: 1,
    marginRight: kCellMarginSide + 10,
    marginLeft: kCellMarginSide + 10,
    backgroundColor: colors.Grey,
  },


  // style properties of a text-element in a CardDetailTextView
  text: fonts.text,
});

export default CardDetailStyles;
