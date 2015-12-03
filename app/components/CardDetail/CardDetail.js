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

const {
  View,
  ScrollView,
} = React;

/** The CardDetail is responsible
 * for displaying the front and backside of a flashcard.
 */

const CardDetail = React.createClass({
  displayName: 'CardDetail',

  propTypes: {
    flashcard: CustomPropTypes.flashcard,
  },

  render() {
    const flashcard = this.props.flashcard || {};
    return (
    // The ScrollView holds two CardDetailTextViews that each display the
    // frontText or backText, respectively.
    <View>
      <ScrollView style={Styles.listView}>
        <CardDetailTextView
          text={flashcard.frontText}
        />
        <View style={Styles.separator}/>
        <CardDetailTextView
          text={flashcard.backText}
        />
      </ScrollView>
    </View>
    );
  },
});

export default CardDetail;
