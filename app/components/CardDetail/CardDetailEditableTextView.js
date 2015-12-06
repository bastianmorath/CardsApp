/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

import React from 'react-native';
import Styles from './CardDetailStyles.js';

const {
  PropTypes,
  View,
  TextInput,
} = React;

/**
 * A CardDetailEditFlashcard component displays the front and backside
 * of a flashcard in a editable view so the user can change its text
 */
const CardDetailEditableFlashcard = React.createClass({
  propTypes: {
    text: PropTypes.string, // Text to display
    textHasChanged: PropTypes.func,
  },

  getInitialState() {
    return {
      editedText: this.props.text,
    };
  },

  _textHasChanged(updatedText: String) {
    this.props.textHasChanged(text: updatedText),
    this.setState({
      editedText: updatedText,
    });
  },

  render() {
    return (
      <View style={Styles.detailTextView}>
        <TextInput
          style={Styles.editableTextView}
          onChangeText={this._textHasChanged}
          value={this.state.editedText}
          multiline = {true}
        />
      </View>
    );
  },
});

export default CardDetailEditableFlashcard;
