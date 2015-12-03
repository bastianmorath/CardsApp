/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */

 import React from 'react-native';
 const {
   Component,
   StyleSheet,
   Text,
   View,
   Animated,
   TouchableOpacity,
   Dimensions
 } = React;
 import StyleSheetPropType from 'react-native/Libraries/StyleSheet/StyleSheetPropType';
 import TextStylePropTypes from 'react-native/Libraries/Text/TextStylePropTypes';

 /** This component handeles a button with properties:
  *
  * onPress: Function that should be called when the button is pressed
  * style: Style of the button
  * buttonType: 'edit' or .
  *
  */

  const CardButton = React.createClass({
    displayName: 'CardButton',




    render () {
  // Extract TouchableOpacity props
  var touchableProps = {
    onPress: this.props.onPress,
    onPressIn: this.props.onPressIn,
    onPressOut: this.props.onPressOut,
    onLongPress: this.props.onLongPress
  };

  if (this.props.isDisabled === true || this.props.isLoading === true) {
    return (
      <View style={[styles.button]}>
      </View>
    );
  } else {
    return (
      <TouchableOpacity {...touchableProps}
        style={[styles.button, this.props.style]}>
      </TouchableOpacity>
    );
  }
},
  });

  var styles = StyleSheet.create({
    button: {
      backgroundColor: '#1abc9c',
      height: 50,
      width: 50,
      marginTop: 50,
      marginTop: 50,
      justifyContent: 'center',
      borderRadius: 25,
    },
    textButton: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center',
    },
    opacity: {
      opacity: 0.5,
    },
    buttonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  });
export default CardButton;
