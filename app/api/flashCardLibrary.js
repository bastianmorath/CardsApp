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
 */
const FlashCardLibrary = {
  /**
   * Fetches all flashcards of a user from the database.
   */
  fetchFlashcards(): Promise {
    return new Promise( (resolve) => {
      setTimeout( () => {
        resolve( _flashcards );
      }, TIMEOUT);
    });
  },

  /**
   * API method: batch creates flashcards in the database.
   */
  createFlashcards( flashcardsToCreate:Array<Object> ): Promise {
    if (!flashcardsToCreate) {
      // TODO: handle the error here.
      return Promise.reject();
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
   * API method: batch updates flashcards in the database.
   * Takes a map of updates to apply to the flashcards.
   */
  updateFlashcards( flashcardUpdatesMap: Object ): Promise {
    if (!flashcardUpdatesMap ) {
      // TODO: hanbdle the error here
      return Promise.reject();
    }

    return new Promise( (resolve) => {
      setTimeout( () => {
        const updatedFlashcards = [];
        _.each( flashcardUpdatesMap, (flashcardUpdates, flashcardId) => {
          const flashcard = _.get(_flashcards, flashcardId );
          _.assign(flashcard, _.omit(flashcardUpdates, 'id'));
          updatedFlashcards.push( flashcard );
        });
        resolve( updatedFlashcards );
      }, TIMEOUT);
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
