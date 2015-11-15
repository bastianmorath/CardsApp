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

 /**
 * This component handles styles for various classes
 */

const CardListStyles = StyleSheet.create({

// TODO: Set full height of view
  listview: {
    backgroundColor: 'green',
    flex: 1,
  },

  fillListViewContainer: {
    flex: 1,
    alignItems: 'stretch',
    marginTop: 20,
  },
  // style properties of a CardListCell
  cell: {
    height: 100,
    backgroundColor: 'white',
    marginLeft: 6,
    marginRight: 6,
    marginTop: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // style properties of a text-element in a cardListCell
  // TODO: Align Text vertically
  text: {
    fontSize: 20,
    // royal blue text color
    color: '107896',
  },
});

export default CardListStyles;
