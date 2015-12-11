/**
 * @author    ::  Bastian Morath and Lukas Reichart
 * @copyright ::  Bastian Morath and Lukas Reichart
 *
 * @flow
 */
import React from 'react-native';

const {
   StyleSheet,
} = React;

const kSize = 40; // Size of button; Also change its value in CardDetailStyles and CardListStyles!
const kButtonSizeSmall = 0.5 * kSize;
const kButtonSizeBig = 1.5 * kSize;
const kMarginTop = 46; // Margin on top of views, so to center the button vertically

const CardButtonStyles = StyleSheet.create({
  button: {
    top: kMarginTop - kSize * 0.5,
    height: kSize,
    width: kSize,
    justifyContent: 'center',
    borderRadius: kSize * 0.5,
    position: 'absolute',
  },

  buttonSmall: {
    top: kMarginTop - kButtonSizeSmall * 0.5,
    height: kButtonSizeSmall,
    width: kButtonSizeSmall,
    borderRadius: kButtonSizeSmall * 0.5,
  },

  buttonBig: {
    top: kMarginTop - kButtonSizeBig * 0.5,
    height: kButtonSizeBig,
    width: kButtonSizeBig,
    borderRadius: kButtonSizeBig * 0.5,
  },

  icon: {
    height: kSize - 25,
    width: kSize - 25,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
});

export default CardButtonStyles;
