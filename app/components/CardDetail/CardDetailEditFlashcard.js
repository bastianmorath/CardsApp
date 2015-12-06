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
    textHasChanged: PropTypes.func,
  },

  _frontTextHasChanged(text: String) {
     this.props.textChanged(frontText: text, backText: this.props.flashcard.backText),
  },

  _backTextHasChanged(text: String) {
     this.props.textChanged(this.props.flashcard.frontText,text),
  },

  render() {
    return (
      <View>
           <ScrollView style={Styles.listView}>
             <View style={Styles.flashcardHolder}>
               <CardDetailEditableTextView
                   text={this.props.flashcard.frontText}
                   textHasChanged = {this._frontTextHasChanged}
               />
               <View style={Styles.separator}/>
               <CardDetailEditableTextView
                 text={this.props.flashcard.backText}
                 textHasChanged = {this._backTextHasChanged}
               />
             </View>
           </ScrollView>
     </View>
    );
  },
});

export default CardDetailEditFlashcard;
