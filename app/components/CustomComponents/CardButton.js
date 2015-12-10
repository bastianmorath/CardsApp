/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

import React from 'react-native';
import styleSheetPropType from 'react-native/Libraries/StyleSheet/StyleSheetPropType';
import textStylePropTypes from 'react-native/Libraries/Text/TextStylePropTypes';
import colors from '../../constants/colors';
import Styles from './CardButtonStyles';
const {
 Image,
 TouchableHighlight,
 PropTypes,
} = React;


/** This component displays a button with properties:
*
* onPress: Function that should be called when the button is pressed
* style: Style of the button
* buttonType: 'edit' or 'done' or 'delete'
*
*/
const CardButton = React.createClass({
  displayName: 'CardButton',

  propTypes: {
    onPress: PropTypes.func,
    style: styleSheetPropType(textStylePropTypes),
    buttonType: PropTypes.string,
  },

  _renderButtonComponent(): Object {
    let source;
    switch (this.props.buttonType) {
    case 'edit':
      source = require('../../../Resources/edit.png');
      break;
    case 'done':
      source = require('../../../Resources/done.png');
      break;
    case 'delete':
      source = require('../../../Resources/delete.png');
      break;
    default:
      source = '../../../Resources/delete.png';
    }
    return (
      <Image
        style={Styles.icon}
        source={source}
      />
    );
  },

  render() {
    const color = this.props.buttonType === 'done' ? colors.Red : colors.Green;
    const buttonComponent = this._renderButtonComponent();

    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={[Styles.button, this.props.style, {backgroundColor: color}]}>
        {buttonComponent}
      </TouchableHighlight>
    );
  },
});

export default CardButton;
