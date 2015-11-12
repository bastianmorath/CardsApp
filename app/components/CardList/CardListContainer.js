/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */
'use strict';

import React from 'react-native';

import CardList from './CardList';
import flashcards from '../../../test/mock/flashcard.json';

/**
 * The CardListContainer is the data container for the CardList component.
 * In futurue the CardListContainer will do all the data fetching and handling for
 * the CardList component, at the moment it only loads some mock data and passes it
 * along to the component.
 */
var CardListContainer = React.createClass({
  displayName: 'CardListContainer',

  render() {
    return (
      <CardList flashcards={flashcards} />
    );
  },
});

export default CardListContainer;
