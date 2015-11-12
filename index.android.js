/**
 * Sample React Native App
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
  displayName: 'CardsAppApplicationAndroid',
  render: function() {
    return (
      <View>
        <CardListContainer />
      </View>
    );
  },
});

AppRegistry.registerComponent('cardsapp', () => CardsApp);
