/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */
import React from 'react-native';
import Styles from './CardListStyles.js';
import CustomPropTypes from '../../constants/CustomPropTypes';

const {
  View,
  Text,
} = React;

/**
 * A cardListElement component is responsible to display the fronttext of a
 * flashcard, used in a ListView
 */

const cardListElement = React.createClass({
  propTypes: {
    flashcard: CustomPropTypes.flashcard,
  },

  render() {
    const flashcard = this.props.flashcard || {};
    return (
        <View style={Styles.cell}>
          <Text style={Styles.text}>{flashcard.frontText}</Text>
        </View>
    );
  },
});

export default cardListElement;
