/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */
'use strict';

import React from 'react-native';
var {
  PropTypes,
  View,
} = React;

/**
 * The CardList component is responsible for displaying a scrollable list of an
 * array of flashcards.
 */
var CardList = React.createClass({
  displayName: 'CardList',
  propTypes: {
    cards: PropTypes.array.of(PropTypes.object),
  },

  render: function() {
    return (
      <View />
    );
  },
});

export default CardList;
