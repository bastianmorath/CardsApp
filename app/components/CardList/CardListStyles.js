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
const kCellHeight = 120;
const kCellMarginVertical = 10;
const kCellMarginSide = 10;
const kSize = 40; // Size of button; Also change its value in CardButtonStyle and CardDetailStyles!

 /**
 * This StyleSheet handles styles for CardList components.
 */
const CardListStyles = StyleSheet.create({
  listViewHolder: {
    backgroundColor: colors.LightestGrey,
    flex: 1,
  },

  listViewHolderEditMode: {
    backgroundColor: colors.LightGrey,
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
  },

  // style properties of a text-element in a CardListElement
  text: _.assign({
    margin: 20,
  }, fonts.text),

  editButton: {
    right: 2 * kCellMarginSide + 10,
    top: kMarginTop - kSize / 2,
  },
});

export default CardListStyles;
