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
      it('should load flashcards into the FlashCardStore', () => {
        return Project.actions.fetchFlashcards().then( () => {
          const flashcardsMap = reactor.evaluateToJS( Project.getters.flashcardsMap );
          expect(_.size(flashcardsMap)).to.eql(_.size(mockFlashcards));

          _.each( flashcardsMap, (flashcard) => {
            const originalFlashcard = _.find( mockFlashcards, {id: flashcard.id} );
            expect(originalFlashcard).to.be.ok();
            expect(flashcard).to.eql(originalFlashcard);
          });
        });
      });
    });
    describe('#addFlashcard(s)', () => {
      it('should create a single flashcard', () => {
        const flashcardToCreate = { frontText: 'Here is some text' };
        return Project.actions.addFlashcard(flashcardToCreate).then( () => {
          const flashcardsMap = reactor.evaluateToJS( Project.getters.flashcardsMap );
          const flashcard = _.first(_.where(flashcardsMap, flashcardToCreate ) );

          expect(flashcard).to.be.ok();
          expect(flashcard).to.be.an('object');
          expect(flashcard.id).to.be.a('string');
        });
      });

      it('should create multiple flashcards', () => {
        const flashcardsToCreate = [
          { frontText: 'frontText 3', backText: 'backText 3' },
          { frontTExt: 'frontText 4' },
        ];

        return Project.actions.addFlashcards( flashcardsToCreate ).then( () => {
          const flashcardsMap = reactor.evaluateToJS( Project.getters.flashcardsMap );
          _.each( flashcardsToCreate, (flashcardToCreate) => {
            const flashcard = _.first(_.where(flashcardsMap, flashcardToCreate));
            expect(flashcard).to.be.ok();
            expect(flashcard).to.be.an('object');
            expect(flashcard.id).to.be.a('string');
          });
        });
      });

      it('should not create a new card, when passed undefined.', () => {
        // TODO add test for empty flashcard.
      });
    });
    describe('#updateFlashcard(s)', () => {
      beforeEach( (done) => {
        Project.actions.fetchFlashcards().then(done);
      });
      it('should update a single flashcard', () => {
        const flashcardsMap = reactor.evaluateToJS( Project.getters.flashcardsMap );
        const flashcardToUpdate = _.sample(flashcardsMap);
        const flashcardUpdates = {
          frontText: 'this is a new front text',
          backText: 'this is a new back text',
        };

        return Project.actions.updateFlashcard( flashcardToUpdate.id, flashcardUpdates).then( () => {
          const updatedFlashcardsMap = reactor.evaluateToJS( Project.getters.flashcardsMap );
          const updatedFlashcard = _.get(updatedFlashcardsMap, flashcardToUpdate.id );

          expect(_.size(flashcardsMap)).to.eql(_.size(updatedFlashcardsMap) );
          expect(updatedFlashcard).to.eql(_.assign(flashcardToUpdate, flashcardUpdates) );
        });
      });
      it('should batch update multiple flashcards', () => {
        const flashcardsMap = reactor.evaluateToJS( Project.getters.flashcardsMap );
        const flashcardsToUpdate = _.sample(flashcardsMap, 3 );
        const flashcardUpdates = [
          { frontText: 'first update to the front Text' },
          { backText: 'what ever we want to update.' },
          { frontText: 'frontText update', backText: 'update the back text' },
        ];

        const flashcardUpdatesMap = {};
        _.each( flashcardsToUpdate, (flashcardToUpdate, i) => {
          _.set(flashcardUpdatesMap, flashcardToUpdate.id, flashcardUpdates[i] );
        });

        return Project.actions.updateFlashcards( flashcardUpdatesMap ).then( () => {
          const updatedFlashcardsMap = reactor.evaluateToJS( Project.getters.flashcardsMap );
          _.each( flashcardsToUpdate, (flashcardToUpdate) => {
            const updatedFlashcard = _.get(updatedFlashcardsMap, flashcardToUpdate.id );
            expect(updatedFlashcard).to.eql(_.assign(flashcardToUpdate, flashcardUpdatesMap[flashcardToUpdate.id]) );
          });
        });
      });
    });
    describe('#deleteFlashcard(s)', () => {
      // import some flashcards into the reactor, so we have something to delete.
      beforeEach( () => {
        return Project.actions.fetchFlashcards().then();
      });
      it('should delete a single flashcard', () => {
        const flashcardsMap = reactor.evaluateToJS( Project.getters.flashcardsMap );
        const flashcardIdToDelete = _.sample(flashcardsMap).id;

        return Project.actions.deleteFlashcard( flashcardIdToDelete ).then( () => {
          const newFlashcardsMap = reactor.evaluateToJS( Project.getters.flashcardsMap );
          const deletedFlashcard = _.get(newFlashcardsMap, flashcardIdToDelete );

          expect( _.size(flashcardsMap) - 1).to.eql( _.size(newFlashcardsMap) );
          expect(deletedFlashcard).to.be(undefined);
        });
      });
      it('should batch delete multiple flashcards', () => {
        const flashcardsMap = reactor.evaluateToJS( Project.getters.flashcardsMap );
        const flashcardIdsToDelete = _.pluck( _.sample(flashcardsMap, 3 ), 'id' );

        return Project.actions.deleteFlashcards( flashcardIdsToDelete ).then( () => {
          const newFlashcardsMap = reactor.evaluateToJS( Project.getters.flashcardsMap );
          expect( _.size(flashcardsMap) - 3).to.eql( _.size(newFlashcardsMap) );

          _.each( flashcardIdsToDelete, (deletedFlashcardId) => {
            const deletedFlashcard = _.get(newFlashcardsMap, deletedFlashcardId);
            expect(deletedFlashcard).to.eql(undefined);
          });
        });
      });
      it('should not try to delete a flashcard when passed an empty string', (done) => {
        // TODO implement this test here.
        done();
      });
    });
  });
});
