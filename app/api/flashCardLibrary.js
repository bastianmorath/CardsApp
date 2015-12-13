/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

const TIMEOUT = 100;
const USER_ID = 'luke';
import _ from 'lodash';

// TODO: This is an ugly fix, but otherwise the mocha tests do not work (because they can't require React)
let React;
try {
  React = require('react-native');
} catch (e) {
  React = {NativeModules: {}};
}
const { CADataStore } = React.NativeModules;

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
    return new Promise( (resolve, reject) => {
      CADataStore.fetchEntitiesForUser(USER_ID, 'Flashcard', (err, flashcards) => {
        if (err) {
          return reject(err);
        }
        return resolve(flashcards);
      });
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

    const promises = [];
    _.each(flashcardsToCreate, (flashcardToCreate) => {
      promises.push( new Promise( (resolve, reject) =>{
        CADataStore.createEntityForUser(USER_ID, 'Flashcard', _.omit(flashcardToCreate, 'id'), (err, flashcard) => {
          if (err) {
            return reject(err);
          }
          return resolve(flashcard);
        });
      }) );
    });
    return Promise.all(promises);
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
