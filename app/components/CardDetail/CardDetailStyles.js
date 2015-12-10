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

const kMarginTop = 46;
const kCellMarginSide = 10;
const kSize = 40; // Size of button; Also change its value in CardButtonStyle and CardListStyles!

/**
* This StyleSheet handles styles for CardDetail components.
*/
const CardDetailStyles = StyleSheet.create({

  scrollViewHolder: {
    backgroundColor: colors.LightestGrey,
    flex: 1,
  },

  scrollViewHolderEditMode: {
    backgroundColor: colors.LightGrey,
  },

  flashcardHolder: {
    shadowRadius: 35,
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'grey',
    shadowOpacity: 0.7,
    backgroundColor: 'white',
  },

  listView: {
    flex: 1,
    marginTop: kMarginTop,
    overflow: 'visible',
    margin: kCellMarginSide,
  },

  /**
   * Style properties of the seperator that seperates the backText and the
   * frontText of the flashCard in CardDetail
   */
  separator: {
    height: 1,
    backgroundColor: 'black',
    borderRightWidth: kCellMarginSide + 10,
    borderLeftWidth: kCellMarginSide + 10,
    borderLeftColor: 'white',
    borderRightColor: 'white',
  },

  /**
   * style properties of a text-element in CardDetailTextView
   */
  textView: _.assign({
    margin: 20,
  }, fonts.text ),

  editButton: {
    right: 2 * kCellMarginSide + 10,
    top: kMarginTop - kSize / 2,
  },

  /**
   * Style properties of a CardDetail TextView
   */
  detailTextView: {
    backgroundColor: 'white',
  },

  editableTextView: _.assign({
    backgroundColor: 'white',
    margin: 20,
    height: 100,
  }, fonts.text ),

});

export default CardDetailStyles;
