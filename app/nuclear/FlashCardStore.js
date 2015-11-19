/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

import {Store, toImmutable} from 'nuclear-js';
import actionTypes from './actionTypes';
const {
  RECEIVE_FLASHCARDS,
} = actionTypes;

function receiveFlashcards(state, { flashcards } ) {
  const newFlashcards = toImmutable(flashcards)
    .toMap()
    .mapKeys( (k, v) => v.get('id') );
  return state.merge( newFlashcards );
}

export default Store({  // eslint-disable-line new-cap
  getInitialState() {
    return toImmutable({});
  },

  initialize() {
    this.on(RECEIVE_FLASHCARDS, receiveFlashcards );
  },
});
