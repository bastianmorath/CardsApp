/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 */

import React from 'react-native';
const {
  AppRegistry,
} = React;
// import CardListContainer from './app/components/CardList/CardListContainer';
import CardDetailContainer from './app/components/CardDetail/CardDetailContainer';

/**
 * CardApp is the main iOS Component of the CardApps application.
 */
const CardsApp = React.createClass({
  displayName: 'CardsAppApplicationiOS',
  render() {
    return (
      <CardDetailContainer />
    );
  },
});

AppRegistry.registerComponent('cardsapp', () => CardsApp);
