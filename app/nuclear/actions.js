/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */
import reactor from './reactor';
import actionTypes from './actionTypes';
const {
  RECEIVE_FLASHCARDS,
  CREATE_FLASHCARDS,
} = actionTypes;
import FlashCardLibrary from '../api/flashCardLibrary';

export default {
  /**
   * Fetches flashcards from the database and dispatches: RECEIVE_FLASHCARDS, when finished.
   */
  fetchFlashcards() {
    return FlashCardLibrary.fetchFlashcards().then( flashcards => {
      reactor.dispatch(RECEIVE_FLASHCARDS, {flashcards} );
    });
  },

  /**
   * Create one or more flashcards in the user database.
   */
  addFlashcard( flashcardsToCreate ) {
    if (!flashcardsToCreate) {
      // ErrorHandler.wrongArgument('flashcards');
    }
    return FlashCardLibrary.createFlashcards( flashcardsToCreate ).then( flashcards => {
      reactor.dispatch(CREATE_FLASHCARDS, { flashcards } );
    });
  },
};
