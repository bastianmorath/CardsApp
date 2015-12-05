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
const kCellHeight = 120;
const kCellMarginVertical = 7;
const kCellMarginSide = 10;

 /**
 * This StyleSheet handles styles for CardList components.
 */
const CardListStyles = StyleSheet.create({
  listViewHolder: {
    backgroundColor: colors.LightGrey,
    flex: 1,
  },

  listView: {
    flex: 1,
    overflow: 'visible',
    marginTop: kMarginTop,
  },

  // style properties of a CardListElement
  cell: {
    height: kCellHeight,
    backgroundColor: 'white',
    marginBottom: kCellMarginVertical,
    marginTop: 0,
    marginRight: kCellMarginSide,
    marginLeft: kCellMarginSide,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 20,
    shadowOffset: {width: 8, height: 8},
    shadowColor: '#808080',
    shadowOpacity: 0.3,
  },

  // style properties of a text-element in a CardListElement
  text: fonts.text,
});

export default CardListStyles;
