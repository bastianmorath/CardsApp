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
