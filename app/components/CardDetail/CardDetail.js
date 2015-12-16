/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

import React from 'react-native';
import Styles from './CardDetailStyles';

import CustomPropTypes from '../../constants/CustomPropTypes';
import Button from '../CustomComponents/CardButton.js';
import CardDetailFlashcard from './CardDetailFlashcard';

const {
  View,
  PropTypes,
} = React;

/**
 * The CardDetail component is responsible for displayng the CardDetail Screen.
 * The CardDetail component holds a CardDetailFlashcard component
 * and a button component
 */
const CardDetail = React.createClass({
  displayName: 'CardDetail',

  propTypes: {
    flashcard: CustomPropTypes.flashcard,
    isEditing: PropTypes.bool,
    updateFlashcard: PropTypes.func,
  },

  getInitialState() {
    return {
      isEditing: this.props.isEditing,
    };
  },

  _onEditButtonPress() {
    this.setState({ isEditing: !this.state.isEditing});
  },

  render() {
    const isEditing = this.state.isEditing;
    const buttonType = isEditing ? 'done' : 'edit';
    const style = [Styles.scrollViewHolder, isEditing && Styles.scrollViewHolderEditMode];
    return (
      /* This view  holds a CardDetailFlashcard and a Button
      */
      <View style={style}>
        <CardDetailFlashcard
          flashcard={this.props.flashcard}
          updateFlashcard={this.props.updateFlashcard}
          isEditing={this.state.isEditing}
        />
        <Button
          style={Styles.editButton}
          onPress={this._onEditButtonPress}
          buttonType={buttonType}
        />
      </View>
    );
  },
});

export default CardDetail;
