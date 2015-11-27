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
import MockApi from '../mock/flashCardLibrary';

import mockFlashcards from '../mock/flashcard';

describe('modules/Flashcard', () => {
  before( () => {
    // stub all the API function we use.
    sinon.stub(Api, 'fetchFlashcards', MockApi.fetchFlashcards);
    sinon.stub(Api, 'createFlashcards', MockApi.createFlashcards );
    sinon.stub(Api, 'deleteFlashcards', MockApi.deleteFlashcards );
  });
  after( () => {
    // restore all of our stubs.
    Api.fetchFlashcards.restore();
    Api.createFlashcards.restore();
    Api.deleteFlashcards.restore();
  });
  afterEach( () => {
    reactor.reset();
  });

  describe('actions', () => {
    describe('#fetchFlashcards', () => {
      it('should load flashcards into the FlashCardStore', ( done ) => {
        Project.actions.fetchFlashcards().then( () => {
          const flashcardsMap = reactor.evaluateToJS( Project.getters.flashcardsMap );
          expect(_.size(flashcardsMap)).to.eql(_.size(mockFlashcards));

          _.each( flashcardsMap, (flashcard) => {
            const originalFlashcard = _.find( mockFlashcards, {id: flashcard.id} );
            expect(originalFlashcard).to.be.ok();
            expect(flashcard).to.eql(originalFlashcard);
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
    describe('#deleteFlashcard(s)', () => {
      // import some flashcards into the reactor, so we have something to delete.
      beforeEach( (done) => {
        Project.actions.fetchFlashcards().then( done );
      });
      it('should delete a single flashcard', (done) => {
        const flashcardsMap = reactor.evaluateToJS( Project.getters.flashcardsMap );
        const flashcardIdToDelete = _.sample(flashcardsMap).id;

        Project.actions.deleteFlashcard( flashcardIdToDelete ).then( () => {
          const newFlashcardsMap = reactor.evaluateToJS( Project.getters.flashcardsMap );
          const deletedFlashcard = _.get(newFlashcardsMap, flashcardIdToDelete );

          expect( _.size(flashcardsMap) - 1).to.eql( _.size(newFlashcardsMap) );
          expect(deletedFlashcard).to.be(undefined);

          done();
        });
      });
      it('should batch delete multiple flashcards', (done) => {
        const flashcardsMap = reactor.evaluateToJS( Project.getters.flashcardsMap );
        const flashcardIdsToDelete = _.pluck( _.sample(flashcardsMap, 3 ), 'id' );

        Project.actions.deleteFlashcards( flashcardIdsToDelete ).then( () => {
          const newFlashcardsMap = reactor.evaluateToJS( Project.getters.flashcardsMap );
          expect( _.size(flashcardsMap) - 3).to.eql( _.size(newFlashcardsMap) );

          _.each( flashcardIdsToDelete, (deletedFlashcardId) => {
            const deletedFlashcard = _.get(newFlashcardsMap, deletedFlashcardId);
            expect(deletedFlashcard).to.eql(undefined);
          });
          done();
        });
      });
      it('should not try to delete a flashcard when passed an empty string', (done) => {
        // TODO implement this test here.
        done();
      });
    });
  });
});
