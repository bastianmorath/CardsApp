/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 */

import React from 'react-native';
import {Router, Schema, Route} from 'react-native-router-flux';
import CardListContainer from './app/components/CardList/CardListContainer';
import CardDetailContainer from './app/components/CardDetail/CardDetailContainer';
const {
  AppRegistry,
  Navigator,
} = React;

/**
 * CardApp is the main iOS Component of the CardApps application.
 */
const CardsApp = React.createClass({
  displayName: 'CardsAppApplicationiOS',
  render() {
    return (
      <Router>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.PushFromRight} />

        <Route name="cardList" component={CardListContainer} title="CardListContainer"/>
        <Route name="cardDetail" schema="default" component={CardDetailContainer} title="CardDetailContainer"/>
      </Router>
    );
  },
});

AppRegistry.registerComponent('cardsapp', () => CardsApp);
