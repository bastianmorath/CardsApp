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
const kCellMarginSide = 10;

/**
* This StyleSheet handles styles for CardDetail components.
*/

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

// Stayle properties of a CardDetail TextView
  detailtextview: {
    flex: 1,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

// Style properties of the seperator that seperates the backText and the
// frontText of the flashCard in CardDetail
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
