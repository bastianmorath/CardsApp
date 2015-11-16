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

const CardDetailStyles = StyleSheet.create({
  listView: {
    backgroundColor: 'greyColor',
    flex: 1,
  },

  scrollViewHolder: {
    flex: 1,
  },

  detailtextview: {
    flex: 1,
    backgroundColor: 'greyColor',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
    marginRight: 6,
    marginTop: 6,
    marginBottom: 6,
  },
  text: {
    fontSize: 20,
    color: 'red',
  },
  separator: {
    height: 1,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#CCCCCC',
  },
  fillListViewContainer: {
    marginTop: 20,
  },
});

export default CardDetailStyles;
