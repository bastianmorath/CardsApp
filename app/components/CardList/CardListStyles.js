/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */
import React from 'react-native';
const {
   StyleSheet,
 } = React;

const kMarginTop = 15;
const kCellHeight = 100;
const kCellMargin = 6;

 /**
 * This StyleSheet handles styles for CardList components.
 */
const CardListStyles = StyleSheet.create({
  listViewHolder: {
    backgroundColor: 'green',
    flex: 1,
  },

  listView: {
    flex: 1,
    marginTop: kMarginTop,
  },

  // style properties of a CardListCell
  cell: {
    height: kCellHeight,
    backgroundColor: 'white',
    margin: kCellMargin,
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // style properties of a text-element in a cardListCell
  text: {
    fontSize: 20,
    color: '107896',  // royal blue text color
  },
});

export default CardListStyles;
