/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

import _ from 'lodash';
import React from 'react-native';
const {
  PropTypes,
  View,
} = React;
import CardDetail from './CardDetail.js';
import Styles from './CardDetailStyles';
import Button from '../CustomComponents/CardButton.js';

import Nuclear from '../../nuclear/main';
const {getters, reactor} = Nuclear;

 /**
  * The CardDetailContainer is the data container for the CardDetail component.
  * At the moment, it just loads some mock data.
  */
const CardDetailContainer = React.createClass({
  displayName: 'CardDetailContainer',

  propTypes: {
    flashcardId: PropTypes.string,
  },

  mixins: [reactor.ReactMixin],

  // Keep this component's state in sync with the reactor
  getDataBindings(): Object {
    return {
      flashcards: getters.flashcardsMap,
    };
  },

  render() {
    let flashcard = this.state.flashcards.get(this.props.flashcardId);
    if (typeof(flashcard) !== 'undefined') {
      flashcard = flashcard.toJS();
    } else {
      // Error handling
    }
    return (
      <View style={Styles.scrollViewHolder}>
        <CardDetail flashcard={flashcard}/>
        <Button style={Styles.editButton}/>
      </View>
    );
  },

  _buttonPressed() {

  }
});

export default CardDetailContainer;
