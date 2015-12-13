/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

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
   * TODO: what if a single create Request fails?
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
   * TODO: what if a single update Request fails?
   */
  updateFlashcards( flashcardUpdatesMap: Object ): Promise {
    if (!flashcardUpdatesMap ) {
      // TODO: hanbdle the error here
      return Promise.reject();
    }

    const promises = [];
    _.each(flashcardUpdatesMap, (flashcardUpdates, flashcardId) => {
      const flashcardToUpdate = _.merge(flashcardUpdates, {id: flashcardId});
      promises.push( new Promise( (resolve, reject) =>{
        CADataStore.updateEntityForUser(USER_ID, 'Flashcard', flashcardToUpdate, (err, flashcard) => {
          if (err) {
            return reject(err);
          }
          return resolve(flashcard);
        });
      }));
    });
    return Promise.all(promises);
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

    const promises = [];
    _.each(flashcardIdsToDelete, (flashcardIdToDelete) => {
      promises.push( new Promise( (resolve, reject) =>{
        CADataStore.deleteEntityForUser(USER_ID, 'Flashcard', flashcardIdToDelete, (err) => {
          if (err) {
            return reject(err);
          }
          return resolve(flashcardIdToDelete);
        });
      }));
    });
    return Promise.all(promises);
  },
};

export default FlashCardLibrary;
