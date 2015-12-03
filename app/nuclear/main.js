/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

import reactor from './reactor';
import FlashCardStore from './FlashCardStore';
import getters from './getters';
import actions from './actions';

reactor.registerStores({
  'flashcards': FlashCardStore,
});

// Fetch the initial flashcards
actions.fetchFlashcards();

export default { reactor, getters, actions };
