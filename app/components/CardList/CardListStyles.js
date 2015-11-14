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

// TO DO: Set full height of view
  listview: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  // style properties of a CardListCell
  cell: {
    height: 100,
    backgroundColor: 'white',
    marginLeft: 6,
    marginRight: 6,
    marginTop: 3,
    marginBottom: 3,
  },

  // style properties of a text-element in a cardListCell
  // TODO: Align Text vertically
  text: {
    fontSize: 20,
    // royal blue text color
    color: '107896',
    textAlign: 'center',
    paddingTop: 40,
  },
});

export default CardListStyles;
