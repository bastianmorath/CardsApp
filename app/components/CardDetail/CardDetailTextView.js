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
  Text,
} = React;

/**
 * A CardDetailTextView component is responible to display a given text
 * of a flashcard, used CardDetail to display the front- and backText of
 * a flashcard.
 */
const CardDetailTextView = React.createClass({
  propTypes: {
    text: PropTypes.string,
  },

  render() {
    return (
      <View style={Styles.detailTextView}>
        <Text style={Styles.textBox}>{this.props.text}</Text>
      </View>
    );
  },
});

export default CardDetailTextView;