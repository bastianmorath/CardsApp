/**
* @author    ::  Bastian Morath and Lukas Reichart
* @copyright ::  Bastian Morath and Lukas Reichart
*
*	Tests for the flashcard actions, store and getters.
*/

/* eslint-env node, mocha */
import _ from 'lodash';
import sinon from 'sinon';
import expect from 'expect.js';

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

      it('should load flashcards into the FlashCardStore', ( done ) => {
        Project.actions.fetchFlashcards().then( () => {
          const flashcardsMap = reactor.evaluateToJS( Project.getters.flashcardsMap );
          expect(flashcardsMap).to.eql({
            '13': { id: '13', frontText: 'frontText 1', backText: 'backText 1' },
            '14': { id: '14', frontText: 'frontText 2', backText: 'backText 2' },
          });
          done();
        });
      });
    });
    describe('#addFlashcard(s)', () => {
      it('should create a single flashcard', (done) => {
        const flashcardToCreate = { frontText: 'Here is some text' };
        Project.actions.addFlashcard(flashcardToCreate).then( () => {
          const flashcardsMap = reactor.evaluateToJS( Project.getters.flashcardsMap );
          const flashcard = _.first(_.where(flashcardsMap, flashcardToCreate ) );

          expect(flashcard).to.be.ok();
          expect(flashcard).to.be.an('object');
          expect(flashcard.id).to.be.a('string');
          done();
        }).catch( done );
      });

      it('should create multiple flashcards', (done) => {
        const flashcardsToCreate = [
          { frontText: 'frontText 3', backText: 'backText 3' },
          { frontTExt: 'frontText 4' },
        ];

        Project.actions.addFlashcards( flashcardsToCreate ).then( () => {
          const flashcardsMap = reactor.evaluateToJS( Project.getters.flashcardsMap );
          _.each( flashcardsToCreate, (flashcardToCreate) => {
            const flashcard = _.first(_.where(flashcardsMap, flashcardToCreate));
            expect(flashcard).to.be.ok();
            expect(flashcard).to.be.an('object');
            expect(flashcard.id).to.be.a('string');
          });

          done();
        });
      });

      it('should not create a new card, when passed undefined.', () => {
        // TODO add test for empty flashcard.
      });
    });
  });
});
