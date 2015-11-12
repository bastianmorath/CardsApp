/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */
'use strict';

import React from 'react-native';

import CardList from './CardList';

/**
 * The CardListContainer is the data container for the CardList component.
 */
var CardListContainer = React.createClass({
  displayName: 'CardListContainer',

  render() {
    return (
      <CardList />
    );
  },
});

export default CardListContainer;
