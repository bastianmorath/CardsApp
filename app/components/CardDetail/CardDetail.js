/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

// TODO: The ListView doesn't fill the entire screen, just as much as it needs to display the text.

import React from 'react-native';
import Styles from './CardDetailStyles.js';
import CardDetailTextView from './CardDetailTextView';

const {
  PropTypes,
  View,
  ScrollView,
} = React;

/** The CardDetail is responsible
 * for displaying the front and backside of a flashcard.
 */

const CardDetail = React.createClass({
  displayName: 'CardDetail',

  propTypes: {
    flashcard: PropTypes.arrayOf(PropTypes.object),
  },

  render() {
    const flashcard = this.props.flashcard;
    return (
      <View style={Styles.scrollViewHolder}>
      <ScrollView style={Styles.listView}>
        <CardDetailTextView
          style={Styles.carddetailtextview}
          text={flashcard.frontText}
        />
        <View style={Styles.separator}/>
        <CardDetailTextView
          style={Styles.carddetailtextview}
          text={flashcard.backText}
        />
      </ScrollView>
    </View>
    );
  },
});

export default CardDetail;
