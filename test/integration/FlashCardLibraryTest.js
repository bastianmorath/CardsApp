/**
* @author    ::  Bastian Morath and Lukas Reichart
* @copyright ::  Bastian Morath and Lukas Reichart
*
*	Tests for the flashCardLibary. This tests use the objective-c code.
* @flow
*/

import _ from 'lodash';
import React from 'react-native';
import expect from 'expect.js';

const DEBUG = true;
const {
  Text,
  View,
} = React;
const { TestModule } = React.NativeModules;
const logError = require('logError');

import FlashCardLibrary from '../../app/api/flashCardLibrary';
import mockFlashcards from '../mock/flashcard';

let done = (result : ?boolean) => result;
let updateMessage = (message : string ) => message;

function throwError( err ) {
  TestModule.markTestPassed(false);
  logError(err.message);
}

function testDeleteFlashcards() {
  updateMessage('should delete flashcard' );
  FlashCardLibrary.fetchFlashcards()
    .then( (flashcards) => {
      const flashcardIdsToDelete = _.pluck(_.sample(flashcards, 1), 'id' );
      FlashCardLibrary.deleteFlashcards( flashcardIdsToDelete )
        .then( (flashcardIds) => {
          expect(flashcardIds).to.be.an('array');
          _.each(flashcardIds, (flashcardId) => {
            expect(flashcardId).to.be.a('string');
          });

          updateMessage('deleteFlashcard: correctly deleted a flashcard');
          done();
        })
        .catch(throwError);
    })
    .catch(throwError);
}

function testUpdateFlashcards() {
  updateMessage('should update flashcards');
  FlashCardLibrary.fetchFlashcards()
    .then( (flashcards) => {
      const flashcardToUpdate = _.sample(flashcards);

      const flashcardUpdates = { frontText: 'this is the updated text'};
      const flashcardsUpdateMap = {};
      _.set(flashcardsUpdateMap, flashcardToUpdate.id, flashcardUpdates );
      FlashCardLibrary.updateFlashcards( flashcardsUpdateMap )
        .then( (updatedFlashcards) => {
          expect(updatedFlashcards).to.be.an('array');
          _.each(updatedFlashcards, (updatedFlashcard) => {
            expect(updatedFlashcard).to.be.an('object');
            expect(updatedFlashcard.id).to.be.a('string');
            expect(updatedFlashcard.frontText).to.equal(flashcardUpdates.frontText);
          });

          updateMessage('updateFlashcard: correctly updated a flashcard');
          testDeleteFlashcards();
        })
        .catch( throwError );
    })
    .catch( throwError);
}

function testCreateFlashcards() {
  updateMessage('should create flashcards' );
  const flashcardData = _.sample(mockFlashcards);
  FlashCardLibrary.createFlashcards([flashcardData])
    .then( (flashcards) => {
      const flashcard = _.first(flashcards);

      expect(flashcard).to.be.ok();
      expect(flashcard.id).to.be.a('string');
      flashcardData.id = flashcard.id;
      expect(flashcard).to.eql(flashcardData);

      updateMessage('createFlashcard: correctly created a new flashcard' );
      testUpdateFlashcards();
    })
    .catch( throwError );
}

function testFetchFlashcards() {
  updateMessage('should fetch flashcards');
  FlashCardLibrary.fetchFlashcards()
    .then( (flashcards) => {
      expect(flashcards).to.be.an('array');

      _.each(flashcards, (flashcard) => {
        expect(flashcard).to.be.an('object');
        expect(flashcard.id).to.be.a('string');
      });

      updateMessage('fetchFlashcard: correctly loaded flashcards from the database');
      testCreateFlashcards();
    })
    .catch( throwError );
}

const FlashCardLibraryTest = React.createClass({
  getInitialState() {
    return {
      messages: 'Initializing...',
      done: false,
    };
  },

  componentDidMount() {
    done = () => this.setState({done: true}, TestModule.markTestCompleted);
    updateMessage = (msg) => {
      this.setState({messages: this.state.messages.concat('\n' + msg)});
      DEBUG && console.log(msg); //eslint-disable-line
    };
    testFetchFlashcards();
  },

  render() {
    return (
      <View style={{backgroundColor: 'white', padding: 40}}>
        <Text>
          {this.constructor.displayName + ': '}
          {this.state.done ? 'Done' : 'Testing...'}
          {'\n\n' + this.state.messages}
        </Text>
      </View>
    );
  },
});

export default FlashCardLibraryTest;
