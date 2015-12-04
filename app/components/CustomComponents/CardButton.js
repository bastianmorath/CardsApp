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
* buttonType: 'edit' or 'done'
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
    let buttonComponent;

    // set the image according to the button type
    if (this.props.buttonType === 'edit') {
      buttonComponent = (
       <Image
         style={Styles.icon}
          source={require('../../../Resources/done.png')}
         />
     );
    } else {
      buttonComponent = (
       <Image
         style={Styles.icon}
          source={require('../../../Resources/edit.png')}
         />
     );
    }
    return buttonComponent;
  },

  render() {
    const color = this.props.buttonType === 'edit' ? colors.Green : colors.Red;
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
