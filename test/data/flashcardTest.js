/**
* @author    ::  Bastian Morath and Lukas Reichart
* @copyright ::  Bastian Morath and Lukas Reichart
*
*	Tests for the flashcard actions, store and getters.
*/

/* eslint-env node, mocha */
import sinon from 'sinon';
import expect from 'expect';

import reactor from '../../app/nuclear/reactor';
import Project from '../../app/nuclear/main';  // The module to test
import Api from '../../app/api/flashCardLibrary';

const mockFlashcards = [
  { id: '13', frontText: 'frontText 1', backText: 'backText 1' },
  { id: '14', frontText: 'frontText 2', backText: 'backText 2' },
];

describe('modules/Flashcard', () => {
  afterEach( () => {
    reactor.reset();
  });

  describe('actions', () => {
    describe('#fetchFlashcards', () => {
      beforeEach( () => {
        const fetchFlashcardPromise = new Promise((resolve) => {
          resolve(mockFlashcards);
        });

        sinon.stub(Api, 'fetchFlashcards').returns(fetchFlashcardPromise);
      });
      afterEach( () => {
        Api.fetchFlashcards.restore();
      });

      it('should load flashcards into the FlashCardStore', () => {
        Project.actions.fetchFlashcards().then( () => {
          const flashcardsMap = reactor.evaluateToJS( Project.getters.flashcardsMap );
          expect(flashcardsMap).to.eql({
            '13': { id: '13', frontText: 'frontText 1', backText: 'backText 1' },
            '14': { id: '14', frontText: 'frontText 2', backText: 'backText 2' },
          });
        });
      });
    });
  });
});
