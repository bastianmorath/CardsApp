/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

import _ from 'lodash';
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
    backgroundColor: colors.LightGrey,
  },

  listView: {
    flex: 1,
    marginTop: kMarginTop,
    overflow: 'visible',
    margin: kCellMarginSide,
  },

// Stayle properties of a CardDetail TextView
  detailTextView: {
    backgroundColor: 'white',
  },

// Style properties of the seperator that seperates the backText and the
// frontText of the flashCard in CardDetail
  separator: {
    height: 1,
    backgroundColor: 'black',
    borderRightWidth: kCellMarginSide + 10,
    borderLeftWidth: kCellMarginSide + 10,
    borderLeftColor: 'white',
    borderRightColor: 'white',
  },

  // style properties of a text-element in a CardDetailTextView
  textBox: _.assign({
    margin: 20,
  }, fonts.text ),
});

export default CardDetailStyles;
