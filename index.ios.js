/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 */

import React from 'react-native';
const {
  AppRegistry,
} = React;
import CardListContainer from './app/components/CardList/CardListContainer';

/**
 * CardApp is the main iOS Component of the CardApps application.
 */
const CardsApp = React.createClass({
  displayName: 'CardsAppApplicationiOS',
  render() {
    return (
      <CardListContainer />
    );
  },
});

AppRegistry.registerComponent('cardsapp', () => CardsApp);
