/**
 * Sample React Natiive App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
var {
  AppRegistry,
  View,
} = React;
import CardListContainer from './app/components/CardList/CardListContainer';

var CardsApp = React.createClass({
  displayName: 'CardsAppApplicationiOS',
  render: function() {
    return (
      <View>
        <CardListContainer />
      </View>
    );
  },
});

AppRegistry.registerComponent('cardsapp', () => CardsApp);
