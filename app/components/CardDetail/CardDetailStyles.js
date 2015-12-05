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

const kMarginTop = 40;
const kCellMarginSide = 10;
const kSize = 50; // Size of button

/**
* This StyleSheet handles styles for CardDetail components.
*/
const CardDetailStyles = StyleSheet.create({

  scrollViewHolder: {
    flex: 1,
    backgroundColor: colors.LightGrey,
  },

  // add a shadow around the view that holds the front and backside of the flashcard
  flashcardHolder: {
    shadowRadius: 35,
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'grey',
    shadowOpacity: 0.7,
  },

  listView: {
    flex: 1,
    marginTop: kMarginTop,
    overflow: 'visible',
    margin: kCellMarginSide,
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

  // style properties of a text-element in CardDetailTextView
  textBox: _.assign({
    margin: 20,
  }, fonts.text ),

  editButton: {
    right: 2 * kCellMarginSide + 10,
    top: kMarginTop - kSize / 2,
  },

  // Style properties of a CardDetail TextView
  detailTextView: {
    backgroundColor: 'white',
  },

  editableTextView: _.assign({
    backgroundColor: 'white',
    margin: 20,
    height: 130,
  }, fonts.text ),

});

export default CardDetailStyles;
