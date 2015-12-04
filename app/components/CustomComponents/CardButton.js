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
     onPress: PropTypes.func,
     style: styleSheetPropType(textStylePropTypes),
     buttonType: PropTypes.string,
   },

   render() {
     let buttonComponent;
     let color;
     if (this.props.buttonType === 'edit') {
       color = colors.Green;
       buttonComponent = (
         <Image
           style={Styles.icon}
            source={require('../../../Resources/done.png')}
           />
       );
     } else {
       color = colors.Red;
       buttonComponent = (
         <Image
           style={Styles.icon}
            source={require('../../../Resources/edit.png')}
           />
       );
     }
     return (
        <TouchableHighlight
          onPress={this.props.onPress}
          style={[Styles.button, this.props.style, {backgroundColor: color}]}
        >
          {buttonComponent}
        </TouchableHighlight>
    );
   },
 });
 export default CardButton;
