/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */
import React from 'react-native';
import Styles from './CardListStyles.js';
const {
  PropTypes,
  View,
  Text,
} = React;

/**
 * A CardListCell component is responsible to display the fronttext of a
 * flashcard, used in a ListView
 */

const CardListCell = React.createClass({
  propTypes: {
    flashcard: PropTypes.object,
  },

  render() {
    return (
        <View style={Styles.cell}>
          <Text style={Styles.text}>{this.props.flashcard.frontSide}</Text>
        </View>
    );
  },
});

export default CardListCell;
