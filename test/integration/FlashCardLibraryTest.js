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

function testUpdateFlashcards() {
  updateMessage('should update flashcards');
  done();
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

      updateMessage('createFlashcard correctly created a new flashcard' );
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

      updateMessage('fetchFlashcard correctly loaded flashcards from the database');
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
