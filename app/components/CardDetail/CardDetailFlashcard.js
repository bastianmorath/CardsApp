/**
* @author    ::  Bastian Morath and Lukas Reichart
* @copyright ::  Bastian Morath and Lukas Reichart
*
* @flow
*/

import React from 'react-native';
import Styles from './CardDetailStyles.js';
import CardDetailText from './CardDetailText';
import CustomPropTypes from '../../constants/CustomPropTypes';

const {
  View,
  ScrollView,
  PropTypes,
} = React;

/** CardDetailFlashcard component displays the flashcard itself with
 *  Text, Tags, user, etc.
 *  Right now, it holds CardDetailText components to display
 *  the front- and backText of a flashcard. At the moment most of the code of CardDetailFlashcard
 *  lives in CardDetailText. This is good design, because there will be other components
 *  that we need to display on the flashcard.
 */
const CardDetailFlashcard = React.createClass({
  propTypes: {
    flashcard: CustomPropTypes.flashcard,
    isEditing: PropTypes.bool,
    updateFlashcard: PropTypes.func,
  },

  render() {
    return (
      <View>
        <ScrollView style={Styles.listView}>
          <View style={Styles.flashcardHolder}>
            <CardDetailText
              flashcard={this.props.flashcard}
              isEditing={this.props.isEditing}
              updateFlashcard={this.props.updateFlashcard}
            />
          </View>
        </ScrollView>
      </View>
    );
  },
});

export default CardDetailFlashcard;
