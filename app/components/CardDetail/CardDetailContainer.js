/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

import React from 'react-native';
const {
  PropTypes,
} = React;
import Nuclear from '../../nuclear/main';
const {getters, reactor, actions} = Nuclear;

import CardDetail from './CardDetail.js';

 /**
  * The CardDetailContainer is the data container for the CardDetail component.
  * At the moment, it just loads some mock data.
  */
const CardDetailContainer = React.createClass({
  displayName: 'CardDetailContainer',

  propTypes: {
    flashcardId: PropTypes.string,
    isEditing: PropTypes.bool,
  },

  mixins: [reactor.ReactMixin],

  // Keep this component's state in sync with the reactor
  getDataBindings(): Object {
    return {
      flashcards: getters.flashcardsMap,
    };
  },

  _updateFlashcard(frontText: string, backText: string) {
    actions.updateFlashcard(
      this.props.flashcardId,
      {
        backText: backText,
        frontText: frontText,
      },
    );
  },
  render() {
    let flashcard = this.state.flashcards.get(this.props.flashcardId);
    flashcard = flashcard ? flashcard.toJS() : {};

    return (
      <CardDetail
        flashcard={flashcard}
        isEditing={this.props.isEditing}
        updateFlashcard={this._updateFlashcard}
      />
    );
  },
});

export default CardDetailContainer;
