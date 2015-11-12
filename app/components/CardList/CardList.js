/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */
'use strict';

import _ from 'lodash';
import React from 'react-native';
var {
  PropTypes,
  View,
  Text,
} = React;

/**
 * The CardList component is responsible for displaying a scrollable list of an
 * array of flashcards.
 */
var CardList = React.createClass({
  displayName: 'CardList',
  propTypes: {
    flashcards: PropTypes.array,
  },

  render: function() {
    var count = _.size(this.props.flashcards);
    return (
      <View style={{height: 100, backgroundColor: 'yellow', padding: 10,}}>
        <Text style={{fontSize: 16, marginTop: 20,}}>Here we would display a list of: {count} flashcards.</Text>
      </View>
    );
  },
});

export default CardList;
