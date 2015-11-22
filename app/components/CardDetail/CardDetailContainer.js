/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

import _ from 'lodash';
import React from 'react-native';
const { PropTypes } = React;

import flashcards from '../../../test/mock/flashcard';
import CardDetail from './CardDetail.js';

 /**
  * The CardDetailContainer is the data container for the CardDetail component.
  * At the moment, it just loads some mock data.
  */
const CardDetailContainer = React.createClass({
  displayName: 'CardDetailContainer',
  propTypes: {
    flashcardId: PropTypes.string,
  },

  render() {
    const flashcard = _.first( _.where(flashcards, {id: this.props.flashcardId} ));
    return (
      <CardDetail flashcard={flashcard}/>
    );
  },
});

export default CardDetailContainer;
