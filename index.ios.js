/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 */

import React from 'react-native';
import CardListContainer from './app/components/CardList/CardListContainer';
import CardDetailContainer from './app/components/CardDetail/CardDetailContainer';

const {
  AppRegistry,
} = React;
import {Router, Route} from 'react-native-router-flux';
// import {NavBar, NavBarModal} from './components/NavBar';


/**
 * CardApp is the main iOS Component of the CardApps application.
 */
const CardsApp = React.createClass({
  displayName: 'CardsAppApplicationiOS',
  render() {
    return (
      <Router>
        <Route name="launch" component={CardListContainer} hideNavBar={false} title="Launch"/>
        <Route name="detailTextView" component={CardDetailContainer} title="Register"/>
      </Router>

    );
  },
});

AppRegistry.registerComponent('cardsapp', () => CardsApp);
