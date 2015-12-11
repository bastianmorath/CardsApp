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
* size: 'small', 'default', 'big'
*/
const CardButton = React.createClass({
  displayName: 'CardButton',

  propTypes: {
    onPress: PropTypes.func,
    style: styleSheetPropType(textStylePropTypes),
    buttonType: PropTypes.string,
    size: PropTypes.string,
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
      source = require('../../../Resources/trash.png');
      break;
    default:
      // TODO: Put place holder image here.
      source = require('../../../Resources/question.png');
    }
    return (
      <Image
        style={Styles.icon}
        source={source}
      />
    );
  },

  render() {
    const color = this.props.buttonType === 'done' ? colors.Orange : colors.DarkGrey;
    const buttonComponent = this._renderButtonComponent();
    const style = [
      Styles.button,
      {backgroundColor: color},
      (this.props.size === 'small') && Styles.buttonSmall,
      (this.props.size === 'big') && Styles.buttonBig,
      this.props.style,
    ];
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={style}>
        {buttonComponent}
      </TouchableHighlight>
    );
  },
});

export default CardButton;
