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
import CardDetailEditFlashcard from './CardDetailEditFlashcard';
import CardDetailViewFlashcard from './CardDetailViewFlashcard';

const {
  View,
  PropTypes,
} = React;

/** The CardDetail is responsible
 * for displaying the front and backside of a flashcard.
 */
const CardDetail = React.createClass({
  displayName: 'CardDetail',

  propTypes: {
    flashcard: CustomPropTypes.flashcard,
    isEditing: PropTypes.bool,
    textHasChanged: PropTypes.func,
  },

  getInitialState() {
    return {
      isEditing: this.props.isEditing,
      newFrontText: this.props.flashcard.frontText,
      newBackText: this.props.flashcard.backText,
    };
  },

  _onEditButtonPress() {
    //  Update flashcard text in dataStore
    if (this.state.isEditing) {
      this.props.textHasChanged(this.state.newFrontText, this.state.newBackText);
    }
    this.setState({ isEditing: !this.state.isEditing});
  },

  _textHasChanged(frontText: String, backText: String) {
    // Update flashcard text in dataBase
    this.setState({
      newFrontText: frontText,
      newBackText: backText,
    });
  },

  render() {
    const buttonType = this.state.isEditing ? 'edit' : 'done';
    let component;
    if (this.state.isEditing) {
      component = (
        <CardDetailEditFlashcard
          flashcard={this.props.flashcard
          textHasChanged={this._textHasChanged}
        }/>
      );
    } else {
      component = (
        <CardDetailViewFlashcard flashcard={this.props.flashcard}/>
      );
    }
    return (
      /* The ScrollView holds two CardDetailTextViews that each display
       * (editable or non editable) the
       * frontText or backText, respectively.
      */
      <View style={Styles.scrollViewHolder}>
        {component}
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
