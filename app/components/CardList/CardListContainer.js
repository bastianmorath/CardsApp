/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

import React from 'react-native';
import CardList from './CardList';
import Nuclear from '../../nuclear/main';
const {reactor, getters, actions} = Nuclear;

/**
 * The CardListContainer is the data container for the CardList component.
 * In future the CardListContainer will do all the data fetching and handling for
 * the CardList component, at the moment it only loads some mock data and passes it
 * along to the component.
 */
const CardListContainer = React.createClass({
  displayName: 'CardListContainer',
  mixins: [reactor.ReactMixin],

  // Keep this component's state in sync with the reactor
  getDataBindings(): Object {
    return {
      flashcards: getters.flashcardsArray,
    };
  },

  _deleteFlashcardById(flashcardId: String) {
    actions.deleteFlashcard(flashcardId);
  },

  render() {
    const flashcards = this.state.flashcards.toJS();
    return (
      <CardList
      flashcards={flashcards}
      deleteFlashcardById={this._deleteFlashcardById}/>
    );
  },
});

export default CardListContainer;
