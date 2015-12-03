/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

import _ from 'lodash';
import React from 'react-native';
const { PropTypes } = React;

import CardDetail from './CardDetail.js';

import Nuclear from '../../nuclear/main';
const {getters, reactor} = Nuclear;
 /**
  * The CardDetailContainer is the data container for the CardDetail component.
  * At the moment, it just loads some mock data.
  */
const CardDetailContainer = React.createClass({
  displayName: 'CardDetailContainer',
  propTypes: {
    flashcardId: PropTypes.string,
  },

  render() {
    const flashcard = (reactor.evaluate(getters.flashcardsMap).get(this.props.flashcardId) || {}).toJS();
    return (
      <CardDetail flashcard={flashcard}/>
    );
  },
});

export default CardDetailContainer;
