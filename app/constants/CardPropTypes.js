/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

import React from 'react-native';

const {
  PropTypes,
} = React;


const CardPropTypes = {
  flashcard:
    PropTypes.shape({
      id: PropTypes.string,
      frontText: PropTypes.string,
      backText: PropTypes.string,
    }),
};

export default CardPropTypes;
