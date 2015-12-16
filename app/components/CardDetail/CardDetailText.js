/**
* @author    ::  Bastian Morath and Lukas Reichart
* @copyright ::  Bastian Morath and Lukas Reichart
*
* @flow
*/

import React from 'react-native';
import Styles from './CardDetailStyles.js';
import CustomPropTypes from '../../constants/CustomPropTypes';

const {
  View,
  PropTypes,
  TextInput,
  Text,
} = React;

/**
 * CardDetailText component displays the front or backText of a flashcard,
 * either editable or not.
 */
const CardDetailText = React.createClass({
  propTypes: {
    flashcard: CustomPropTypes.flashcard,
    isEditing: PropTypes.bool,
    updateFlashcard: PropTypes.func,
  },

  getInitialState() {
    const flashcard = this.props.flashcard || {};
    return {
      frontText: flashcard.frontText,
      backText: flashcard.backText,
    };
  },

  /**
   * TODO: this method is responsible for storing the text data, when the edit state changes.
   * We need a better solution for business logic processes that span multiple components.!
   */
  componentWillReceiveProps( nextProps: Object ) {
    // are we transitioning from edit to non edit mode?
    if (this.props.isEditing && !nextProps.isEditing) {
      this._updateFlashcardWithCurrentState();
    }
    const flashcard = nextProps.flashcard;
    this.setState( { frontText: flashcard.frontText, backText: flashcard.backText } );
  },

  /**
   * Helper function: calls the updateFlashcard function with the current state values
   * of frontText and backText.
   */
  _updateFlashcardWithCurrentState() {
    const updateFlashcard = this.props.updateFlashcard;
    if (updateFlashcard) {
      updateFlashcard(this.state.frontText, this.state.backText );
    }
  },

  _renderEditableTextView(): Object {
    return (
      <View>
        <TextInput
          style={Styles.editableTextView}
          onEndEditing={this._updateFlashcardWithCurrentState}
          onChangeText={ (text) => {this.setState({frontText: text}); } }
          value={this.state.frontText}
          placeholder="Enter the front side of your flashcard"
          multiline={true}
        />
        <View style={Styles.separator}/>
        <TextInput
          style={Styles.editableTextView}
          onEndEditing={this._updateFlashcardWithCurrentState}
          onChangeText={ (text) => {this.setState({backText: text}); } }
          value={this.state.backText}
          placeholder="Enter the back side of your flashcard"
          multiline={true}
        />
      </View>
    );
  },

  _renderTextView(): Object {
    const flashcard = this.props.flashcard || {};
    return (
      <View>
        <View style={Styles.detailTextView}>
          <Text style={Styles.textView}>{flashcard.frontText}</Text>
        </View>
        <View style={Styles.separator}/>
        <View style={Styles.detailTextView}>
          <Text style={Styles.textView}>{flashcard.backText}</Text>
        </View>
      </View>
    );
  },

  render(): Object {
    const component = this.props.isEditing ? this._renderEditableTextView() : this._renderTextView();
    return component;
  },
});

export default CardDetailText;
