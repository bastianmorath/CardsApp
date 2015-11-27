/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

const TIMEOUT = 100;
import _ from 'lodash';
import _flashcards from '../../test/mock/flashcard';
let idCounter = 0;
_.each( _flashcards, (flashcard) => {
  flashcard.id = idCounter.toString();
  idCounter++;
});

/**
 * FlashCardLibrary is the API for all data operations regarding the flashcard data
 * objects.
 * @type {Object}
 */
const FlashCardLibrary = {
  /**
   * Fetches all flashcards of a user from the database.
   * At the moment this only passes our mock data.
   * @return {Promise}
   */
  fetchFlashcards(): Promise {
    return new Promise( (resolve) => {
      setTimeout( () => {
        resolve( _flashcards );
      }, TIMEOUT);
    });
  },

  /**
   * Takes a single data object or array of objects and create new flashcards entry
   * in the database.
   * @param  {array|object} flashcards to create.
   * @return {Promise}
   */
  createFlashcards( flashcards:Array<Object> ): Promise {
    if (!flashcards) {
      // TODO: handle the error here.
      return Promise.reject();
    }

    let flashcardsToCreate = flashcards;
    if (!_.isArray(flashcards)) {
      flashcardsToCreate = [flashcards]; // eslint-disable-line no-param-reassign
    }

    return new Promise( (resolve) => {
      setTimeout( () => {
        _.each( flashcardsToCreate, (flashcard) => {
          flashcard.id = idCounter.toString();
          _flashcards.push( flashcard );
          idCounter++;
        });
        resolve( flashcardsToCreate );
      }, TIMEOUT );
    });
  },

  /**
   * API method: batch deletes flashcards from the database identified by the passed
   * array of ids.
   */
  deleteFlashcards( flashcardIdsToDelete: Array<string> ): Promise {
    if (!flashcardIdsToDelete) {
      // TODO: hanlde the error here.
      return Promise.reject();
    }

    return new Promise( (resolve) => {
      setTimeout( () => {
        // delete all the flashcards from the in memory map.
        _.remove( _flashcards, (flashcard) => {
          return _.find(flashcardIdsToDelete, flashcard.id );
        });
        resolve(flashcardIdsToDelete);
      });
    });
  },
};

export default FlashCardLibrary;
