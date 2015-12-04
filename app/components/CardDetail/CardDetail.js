/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

import React from 'react-native';
import Styles from './CardDetailStyles';
import CardDetailTextView from './CardDetailTextView';
import CustomPropTypes from '../../constants/CustomPropTypes';
import Button from '../CustomComponents/CardButton.js';

const {
  View,
  ScrollView,
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
  },

  getInitialState() {
    return {
      isEditing: false,
    };
  },

  _buttonPressed() {
    this.setState({ isEditing: this.props.isEditing ? false : true});
  },

  render() {
    const flashcard = this.props.flashcard || {};
    const buttonType = this.props.isEditing ? 'edit' : 'done';

    return (
    // The ScrollView holds two CardDetailTextViews that each display the
    // frontText or backText, respectively.
    <View style={Styles.scrollViewHolder}>
      <ScrollView style={Styles.listView}>
        <CardDetailTextView
          text={flashcard.frontText}
        />
        <View style={Styles.separator}/>
        <CardDetailTextView
          text={flashcard.backText}
        />
      </ScrollView>
      <Button
        style={Styles.editButton}
        onPress={this._buttonPressed}
        buttonType={buttonType}
      />
    </View>
    );
  },
});

export default CardDetail;
