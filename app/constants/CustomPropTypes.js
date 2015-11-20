/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

 /** The CustomPropTypes is responsible
  * to define custom propTypes
  */

import React from 'react-native';

const {
  PropTypes,
} = React;

const CustomPropTypes = {
  flashcard:
    PropTypes.shape({
      id: PropTypes.string,
      frontText: PropTypes.string,
      backText: PropTypes.string,
    }),
};

export default CustomPropTypes;
