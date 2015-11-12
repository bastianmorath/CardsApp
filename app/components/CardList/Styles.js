/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */
import React from 'react-native'
 const {
   StyleSheet,
 } = React;

 /**
 * This component handles styles for various classes
 */
var Styles = StyleSheet.create({

// TO DO: Set full height of view
  listview: {
    flex: 1
  },
  // style properties of a CardListCell
  cell: {
    height: 100,
    backgroundColor: 'D9D7D7',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },

  // style properties of a text-element in a cardListCell
  text: {
    fontSize: 20,
    color: 'A19C9C',
    textAlign: 'center',
    paddingTop: 40,
  }
});

export default Styles;
