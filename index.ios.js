/**
 * Sample React Natiive App
 * https://github.com/facebook/react-native
 */

import React from 'react-native';
const {
  AppRegistry,
  View,
} = React;
import CardListContainer from './app/components/CardList/CardListContainer';

let CardsApp;

CardsApp = React.createClass({
  displayName: 'CardsAppApplicationiOS',
  render() {
    return (
      <View>
        <CardListContainer />
      </View>
    );
  },
});

AppRegistry.registerComponent('cardsapp', () => CardsApp);
