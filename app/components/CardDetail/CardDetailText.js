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

const CardDetailText = React.createClass({
  propTypes: {
    flashcard: CustomPropTypes.flashcard,
    isEditing: PropTypes.bool,
    updateFlashcard: PropTypes.func,
  },

  getInitialState() {
    return {
      frontText: this.props.flashcard.frontText,
      backText: this.props.flashcard.backText,
    };
  },

  _frontTextHasChanged(text) {
    this.setState({
      frontText: text,
    });
  },

  _backTextHasChanged(text) {
    this.setState({
      backText: text,
    });
  },

  _didEndEditing() {
    this.props.updateFlashcard(this.state.frontText, this.state.backText);
  },

  _renderEditableTextView(): Object {
    let component;
    component = (
      <View>
        <TextInput
          style={Styles.editableTextView}
          onEndEditing={this._didEndEditing}
          onChangeText={this._frontTextHasChanged}
          value={this.state.frontText}
          placeholder="Enter the front side of your flashcard"
          multiline={true}
        />
        <View style={Styles.separator}/>
        <TextInput
          style={Styles.editableTextView}
          onEndEditing={this._didEndEditing}
          onChangeText={this._backTextHasChanged}
          value={this.state.backText}
          placeholder="Enter the back side of your flashcard"
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
          <Text style={Styles.textView}>{this.props.flashcard.backText}</Text>
        </View>
      </View>
    );
    return component;
  },

  render() {
    const component = this.props.isEditing ? this._renderEditableTextView() : this._renderTextView();

    return (
      <View>
        {component}
      </View>
    );
  },
});

export default CardDetailText;
