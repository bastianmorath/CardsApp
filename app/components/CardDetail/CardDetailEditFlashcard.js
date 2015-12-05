/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

import React from 'react-native';
import Styles from './CardDetailStyles.js';
import CardDetailEditableTextView from './CardDetailEditableTextView';
import CustomPropTypes from '../../constants/CustomPropTypes';

const {
  PropTypes,
  View,
  ScrollView,
} = React;

/**
 * A CardDetailTextView component is responsible to display a given text
 * of a flashcard, used CardDetail to display the front- and backText of
 * a flashcard.
 */
const CardDetailEditFlashcard = React.createClass({
  propTypes: {
    flashcard: CustomPropTypes.flashcard,
    textChanged: PropTypes.func,
  },

  _frontTextChanged(text: String) {
    // this.props.textChanged(frontText: text, backText: this.props.flashcard.backText),
  },

  _backTextChanged(text: String) {
    // this.props.textChanged(frontText: this.props.flashcard.frontText, backText: text),
  },

  render() {
    return (
      <View>
           <ScrollView style={Styles.listView}>
             <View style={Styles.flashcardHolder}>
               <CardDetailEditableTextView
                   text={this.props.flashcard.frontText}
                   textChanged = {this.props._frontTextChanged}
               />
               <View style={Styles.separator}/>
               <CardDetailEditableTextView
                 text={this.props.flashcard.backText}
                 textChanged = {this.props._backTextChanged}
               />
             </View>
           </ScrollView>
     </View>
    );
  },
});

export default CardDetailEditFlashcard;
