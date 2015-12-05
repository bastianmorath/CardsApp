/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */


import React from 'react-native';
import Styles from './CardDetailStyles';
import CardDetailTextView from './CardDetailTextView';
import CardDetailEditFlashcard from './CardDetailEditFlashcard';
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
      isEditing: this.props.isEditing,
    };
  },

  _onEditButtonPress() {
    this.setState({ isEditing: !this.state.isEditing});
  },

  _renderEditViewComponent(): Object {
    const flashcard = this.props.flashcard || {};

    let editComponent;
    // The ScrollView holds two CardDetailTextViews that each display the
    // frontText or backText, respectively.

    editComponent = (
      <View>
        <ScrollView style={Styles.listView}>
          <View style={Styles.flashcardHolder}>
            <CardDetailEditFlashcard
              text={flashcard.frontText}
            />
            <View style={Styles.separator}/>
            <CardDetailEditFlashcard
              text={flashcard.backText}
            />
          </View>
        </ScrollView>
      </View>
    );
    return editComponent;
  },

  _renderNonEditViewComponent(): Object {
    const flashcard = this.props.flashcard || {};
    let nonEditComponent;
    nonEditComponent = (
      <View>
        <ScrollView style={Styles.listView}>
          <View style={Styles.flashcardHolder}>
            <CardDetailTextView
              text={flashcard.frontText}
            />
            <View style={Styles.separator}/>
            <CardDetailTextView
              text={flashcard.backText}
            />
          </View>
        </ScrollView>
      </View>
    );
    return nonEditComponent;
  },

  render() {
    const component = this.state.isEditing ? this._renderEditViewComponent() : this._renderNonEditViewComponent();
    const buttonType = this.state.isEditing ? 'edit' : 'done';

    return (
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
