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
 * of a flashcard in a editable view so the suer can change its text
 */
const CardDetailEditFlashcard = React.createClass({
  propTypes: {
    text: PropTypes.string,
  },

  getInitialState() {
    return {
      editedText: this.props.text,
    };
  },

  _textHasChanged(value) {
    this.setState({
      editedText: value,
    });
  },

  render() {
    return (
      <View style={Styles.detailTextView}>
        <TextInput
          style={Styles.editTextBox}
          onChangeText={this._textHasChanged}
          value={this.state.editedText}
          multiline = {true}
        />
      </View>
    );
  },
});

export default CardDetailEditFlashcard;
