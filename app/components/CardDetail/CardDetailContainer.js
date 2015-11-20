/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

import React from 'react-native';
import flashcards from '../../../test/mock/flashcard';
import CardDetail from './CardDetail.js';

 /**
  * The CardDetailContainer is the data container for the CardDetail component.
  * At the moment, it just loads some mock data.
  */
const CardDetailContainer = React.createClass({
  displayName: 'CardDetailContainer',

  render() {
    return (
      <CardDetail flashcard={flashcards[0]}/>
    );
  },
});

export default CardDetailContainer;
