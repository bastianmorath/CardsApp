/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 */

import React from 'react-native';
const {
  AppRegistry,
  View,
} = React;
import CardListContainer from './app/components/CardList/CardListContainer';

/**
 * CardApp is the main android Component of the CardApps application.
 */
const CardsApp = React.createClass({
  displayName: 'CardsAppApplicationAndroid',
  render() {
    return (
      <View>
        <CardListContainer />
      </View>
    );
  },
});

AppRegistry.registerComponent('cardsapp', () => CardsApp);
