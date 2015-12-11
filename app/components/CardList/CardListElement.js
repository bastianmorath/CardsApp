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
import Button from '../CustomComponents/CardButton.js';

const RouterActions = Router.Actions;

const {
  View,
  Text,
  TouchableWithoutFeedback,
  PropTypes,
} = React;

/**
 * A cardListElement component is responsible for displaying the fronttext of a
 * flashcard, used in a ListView
 */
const CardListElement = React.createClass({
  propTypes: {
    flashcard: CustomPropTypes.flashcard,
    isEditing: PropTypes.bool,
  },

  _onDeleteButtonPress() {
  },

  _renderDeleteButton(): Object {
    if (this.props.isEditing) {
      return (
        <Button
          style={Styles.deleteButton}
          onPress={this._onDeleteButtonPressed}
          buttonType="delete"
          size="small"
        />
      );
    }
  },

  render() {
    const flashcard = this.props.flashcard || {};
    const deleteButton = this._renderDeleteButton();
    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => RouterActions.cardDetail({flashcardId: flashcard.id, isEditing: false})}
        >
          <View style={Styles.cell}>
            <Text style={Styles.text}>{flashcard.frontText}</Text>
          </View>
        </TouchableWithoutFeedback>
        {deleteButton}
    </View>
    );
  },
});

export default CardListElement;
