/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */
import _ from 'lodash';
import reactor from './reactor';
import actionTypes from './actionTypes';
const {
  RECEIVE_FLASHCARDS,
  CREATE_FLASHCARDS,
  UPDATE_FLASHCARDS,
  DELETE_FLASHCARDS,
} = actionTypes;
import FlashCardLibrary from '../api/flashCardLibrary';

export default {
  /**
   * Fetches flashcards from the database and dispatches: RECEIVE_FLASHCARDS, when finished.
   * @example fetchFlashcards();
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
   * @example addFlashcard( {frontText: 'front text of the new flashcard' } );
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
   * @example addFlashcards( [{frontText: 'front text of thew card'}, {frontText: 'front text of another new card' }] );
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
   * Applies the passed updates to the flashcard identified by flashcardIdToUpdate.
   * @example updateFlashcard( '1', {backText: 'this is the new backText'});
   */
  updateFlashcard( flashcardIdToUpdate: string, flashcardUpdates: Object): Promise {
    if (!flashcardIdToUpdate) {
      // TODO: Error handling goes here§
      return Promise.reject();
    }
    const flashcardsToUpdate = {};
    _.set(flashcardsToUpdate, flashcardIdToUpdate, flashcardUpdates );
    return this.updateFlashcards( flashcardsToUpdate );
  },

  /**
   * Batch updates flashcards.
   * @example updateFlashcards( { 1: {frontText: 'change front text of card 1'}, 2: {backText: 'change back text of card 2'}})
   */
  updateFlashcards( flashcardUpdatesMap: Object ): Promise {
    if (!flashcardUpdatesMap) {
      // TODO: Error handling goes here.
      return Promise.reject();
    }
    return FlashCardLibrary.updateFlashcards( flashcardUpdatesMap ).then( flashcards => {
      reactor.dispatch(UPDATE_FLASHCARDS, {flashcards} );
    });
  },

  /**
   * Delete a single flashcard identified by the passed id from the database.
   * @example deleteFlashcard( '1' );
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
   * @example deleteFlaschards(['1', '2', '3'] );
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
