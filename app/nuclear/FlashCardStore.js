/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

import _ from 'lodash';
import {Store, toImmutable} from 'nuclear-js';
import actionTypes from './actionTypes';
const {
  RECEIVE_FLASHCARDS,
  CREATE_FLASHCARDS,
  UPDATE_FLASHCARDS,
  DELETE_FLASHCARDS,
} = actionTypes;

/**
 * Called on RECEIVE_FLASHCARDS.
 */
function receiveFlashcards(state, { flashcards } ) {
  const newFlashcards = toImmutable(flashcards)
    .toMap()
    .mapKeys( (k, v) => v.get('id') );
  return state.merge( newFlashcards );
}

/**
 * Called on CREATE_FLASHCARDS.
 */
function createFlashcards(state, { flashcards } ) {
  const newFlashcards = toImmutable(flashcards)
    .toMap()
    .mapKeys( (k, v) => v.get('id') );
  return state.merge( newFlashcards );
}

/**
 * Called on UPDATE_FLASHCARDS.
 */
function updateFlashcards(state, {flashcards} ) {
  const updatedFlashcards = toImmutable(flashcards)
    .toMap()
    .mapKeys( (k, v) => v.get('id') );
  return state.merge(updatedFlashcards);
}

/**
 * Called on DELETE_FLASHCARDS.
 */
function deleteFlashcards(state, { flashcardIds } ) {
  return state.withMutations( (map) => {
    _.each( flashcardIds, (flashcardId) => {
      map.remove(flashcardId);
    });
  });
}

export default Store({  // eslint-disable-line new-cap
  getInitialState() {
    return toImmutable({});
  },

  initialize() {
    this.on(RECEIVE_FLASHCARDS, receiveFlashcards );
    this.on(CREATE_FLASHCARDS, createFlashcards );
    this.on(UPDATE_FLASHCARDS, updateFlashcards );
    this.on(DELETE_FLASHCARDS, deleteFlashcards );
  },
});
