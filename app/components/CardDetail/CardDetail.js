/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */


import React from 'react-native';
import Styles from './CardDetailStyles';
import EventEmitter from 'EventEmitter';

import CustomPropTypes from '../../constants/CustomPropTypes';
import Button from '../CustomComponents/CardButton.js';
import CardDetailFlashcard from './CardDetailFlashcard';

const {
  View,
  PropTypes,
} = React;

/** The CardDetail component holds a CardDetailFlashcard component
 *  and a button component
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

  /** Pass an event to CardDetailText so CardDetailText gets notified
   * when the user pressed the editbutton. The component can then update the flashcard
   */
  componentWillMount() {
    this.eventEmitter = new EventEmitter();
  },

  _onEditButtonPress() {
    this.setState({ isEditing: !this.state.isEditing});
    this.eventEmitter.emit('onEditButtonPressed');
  },

  render() {
    const buttonType = this.state.isEditing ? 'edit' : 'done';

    return (
      /* This view  holds a CardDetailFlashcard and a Button
      */
      <View style={Styles.scrollViewHolder}>
        <CardDetailFlashcard
          flashcard={this.props.flashcard}
          updateFlashcard={this.props.updateFlashcard}
          isEditing={this.state.isEditing}
          events={this.eventEmitter}
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
