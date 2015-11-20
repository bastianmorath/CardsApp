/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

const TIMEOUT = 100;
import _flashcards from '../../test/mock/flashcard';

/**
 * FlashCardLibrary is the API for all data operations regarding the flashcard data
 * objects.
 * @type {Object}
 */
const FlashCardLibrary = {
  /**
   * Fetches all flashcards of a user from the database.
   * At the moment this only passes our mock data.
   * @return {Promise} [description]
   */
  fetchFlashcards() {
    return new Promise( (resolve) => {
      setTimeout( () => {
        resolve( _flashcards );
      }, TIMEOUT);
    });
  },
};

export default FlashCardLibrary;
