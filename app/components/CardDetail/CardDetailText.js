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
} = React;

const CardDetailText = React.createClass({
  propTypes: {
    flashcard: CustomPropTypes.flashcard,
    isEditing: PropTypes.bool,
    updateFlashcard: PropTypes.func,
  },

  _didEndEditing(text) {
    this.props.updateFlashcard(text);
  },

  _renderEditableTextView(): Object {
    const flashcard = this.props.flashcard || {};
    let component;
    component = (
      <View>
        <TextInput
          style={Styles.editableTextView}
          onEndEditing={this._didEndEditing}
          value={flashcard.frontText}
          multiline={true}
        />
        <View style={Styles.separator}/>
        <TextInput
          style={Styles.editableTextView}
          onEndEditing={this._didEndEditing}
          value={flashcard.backText}
          multiline={true}
        />
      </View>
    );
    return component;
  },

  _renderTextView(): Object {
    let component;
    component = (
      <View>
        <View style={Styles.detailTextView}>
          <Text style={Styles.textView}>{this.props.flashcard.frontText}</Text>
        </View>
        <View style={Styles.separator}/>
        <View style={Styles.detailTextView}>
          <Text style={Styles.textView}>{this.props.flashcard.backtext}</Text>
        </View>
      </View>
    );
    return component;
  },

  render() {
    const component = this.props.isEditing ? this._renderEditableTextView : this._renderTextView;

    return (
      <View>
        {component}
      </View>
    );
  },
});

export default CardDetailText;
