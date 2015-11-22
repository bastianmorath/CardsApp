/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

import React from 'react-native';
import Styles from './CardListStyles.js';
import CustomPropTypes from '../../constants/CustomPropTypes';
import Router from 'react-native-router-flux';
const RouterActions = Router.Actions;

const {
  View,
  Text,
  TouchableWithoutFeedback,
} = React;

/**
 * A cardListElement component is responsible to display the fronttext of a
 * flashcard, used in a ListView
 */
const CardListElement = React.createClass({
  propTypes: {
    flashcard: CustomPropTypes.flashcard,
  },

  render() {
    const flashcard = this.props.flashcard || {};

    return (
      <TouchableWithoutFeedback
        onPress={() => RouterActions.cardDetail({flashcardId: flashcard.id}) } >
        <View style={Styles.cell}>
          <Text style={Styles.text}>{flashcard.frontText}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  },
});

export default CardListElement;
