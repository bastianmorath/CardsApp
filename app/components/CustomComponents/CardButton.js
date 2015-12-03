/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

 import React from 'react-native';
 import StyleSheetPropType from 'react-native/Libraries/StyleSheet/StyleSheetPropType';
 import TextStylePropTypes from 'react-native/Libraries/Text/TextStylePropTypes';

 import Styles from './CardButtonStyles';
 const {
   Component,
   StyleSheet,
   Text,
   View,
   Image,
   TouchableOpacity,
   PropTypes,
 } = React;


 /** This component handeles a button with properties:
  *
  * onPress: Function that should be called when the button is pressed
  * style: Style of the button
  * buttonType: 'edit' or .
  *
  */

  const CardButton = React.createClass({
    displayName: 'CardButton',
    propTypes: {
      onPress: PropTypes.string,
      style: StyleSheetPropType(TextStylePropTypes),
      buttonType: PropTypes.string,
    },
    render () {


      return (
        <TouchableOpacity
          style={[Styles.button, this.props.style]}>
          <Image
            style={Styles.icon}
            source={require('./EditIcon.png')}
            />
        </TouchableOpacity>
      )},

      onPress() {

      },
});

export default CardButton;
