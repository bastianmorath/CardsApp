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
  DELETE_FLASHCARDS,
} = actionTypes;
import FlashCardLibrary from '../api/flashCardLibrary';

export default {
  /**
   * Fetches flashcards from the database and dispatches: RECEIVE_FLASHCARDS, when finished.
   */
  fetchFlashcards(): Promise {
    return FlashCardLibrary.fetchFlashcards().then( flashcards => {
      reactor.dispatch(RECEIVE_FLASHCARDS, {flashcards} );
    });
  },

  /**
   * Adds a single flashcard to the database. Initailiized with the data passed
   * by flashcardToCreate arguemnt.
   * Note: The 'id' attribute will be overwritten.
   */
  addFlashcard( flashcardToCreate: Object ): Promise {
    if (!flashcardToCreate) {
      // TODO: Error handling goes here
    }
    return this.addFlashcards( [flashcardToCreate] );
  },

  /**
   * Batch creates an array of flashcards in the database. The new flashcards are initialized
   * with the data passed in the flashcardsToCreate array.
   * Note: The 'id' attribute will be overwritten.
   */
  addFlashcards( flashcardsToCreate:Array<Object> ): Promise {
    if (!flashcardsToCreate) {
      // TODO: Error handling goes here
      // ErrorHandler.wrongxArgument('flashcards');
    }
    return FlashCardLibrary.createFlashcards( flashcardsToCreate ).then( flashcards => {
      reactor.dispatch(CREATE_FLASHCARDS, {flashcards} );
    });
  },

  /**
   * Delete a single flashcard identified by the passed id from the database.
   */
  deleteFlashcard( flashcardIdToDelete: string ): Promise {
    if (!flashcardIdToDelete) {
      // TODO: handling error goes here.
      return Promise.reject();
    }
    return this.deleteFlashcards( [flashcardIdToDelete] );
  },

  /**
   * Deletes a batch of flashcards, identified by an array of passed ids.
   */
  deleteFlashcards( flashcardIdsToDelete: Array<string> ): Promise {
    if (!flashcardIdsToDelete) {
      // TODO: Error handling goes here.
      return Promise.reject();
    }

    return FlashCardLibrary.deleteFlashcards( flashcardIdsToDelete ).then( (flashcardIds) => {
      reactor.dispatch(DELETE_FLASHCARDS, {flashcardIds} );
    });
  },
};
