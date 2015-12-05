/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
*/

import React from 'react-native';
import Styles from './CardDetailStyles.js';
import CardDetailTextView from './CardDetailTextView';
import CustomPropTypes from '../../constants/CustomPropTypes';

const {
  View,
  ScrollView,
} = React;

const CardDetailViewFlashcard = React.createClass({
  propTypes: {
    flashcard: CustomPropTypes.flashcard,
  },

  render() {
    return (
      <View>
         <ScrollView style={Styles.listView}>
           <View style={Styles.flashcardHolder}>
             <CardDetailTextView
                 text={this.props.flashcard.frontText}
             />
             <View style={Styles.separator}/>
             <CardDetailTextView
               text={this.props.flashcard.backText}
             />
           </View>
         </ScrollView>
     </View>
    );
  },
});

export default CardDetailViewFlashcard;
