/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 *	Defines the nuclear-js getters for the Flashcard application.
 *
 * @flow
 */

const flashcardsMap = ['flashcards'];
const flashcardsArray = [
  ['flashcards'],
  (flashcards: Object): Object => {
    return flashcards.toList();
  },
];

export default { flashcardsMap, flashcardsArray };
