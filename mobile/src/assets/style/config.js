/**
 * @providesModule StyleConfig
 */

import { Platform } from 'react-native';
import { WINDOW, deviceType } from '../../common/global';

const iPhoneX = Platform.OS === 'ios' && WINDOW.height === 812

const height = Platform.OS === 'ios' ? iPhoneX ? WINDOW.height - 78 : WINDOW.height : WINDOW.height - 24

const smartScale = (value) => {
  return (WINDOW.width + WINDOW.height) * (value / ((Platform.OS === 'ios') ? 1100 : 1000));
}

const screenPaddingValue = iPhoneX ? smartScale(17) : smartScale(26);

const scalarSpace = iPhoneX ? smartScale(11) : smartScale(13);

const getWidthByColumn = (column = 1) => {
  const totalPixel = WINDOW.width;
  const totalSpace = ((screenPaddingValue * 2) + (scalarSpace * (column - 1)));
  return ((totalPixel - totalSpace) / column);
}

const AppColors = {
  //Color
  darkBlue:'rgba(3,71,172,1)',
  darkBlue2:'rgba(3, 71, 172, 0.87)',
  white:'rgba(255,255,255,1)',
  white2:'rgba(255,255,255,0.84)',
  white3:'rgba(255, 255, 255, 0.37)',
  black1: 'rgba(0,0,0,0.54)',
  black2:'rgba(0,0,0,0.38)',
  black3:'rgba(0,0,0,0.87)',
  black4:'rgba(0, 0, 0, 1)',
  doveGray: 'rgba(112,112,112,1)',
  doveGray2:'rgba(222, 222, 222, 1)',
  doveGray3:'rgba(201, 201, 201, 1)',
  gray1:'rgba(215, 215, 215, 1)',
  porcelain:'#ECEFF0',
  limedSpruce:'#37474F',
  fountainBlue: '#4CB5AB',
  fiord: '#455A64',
  alto:'rgba(222, 222, 222, 1)',
  turbo: 'rgba(255,238,0,1)',
  boulder: 'rgba(117,117,117,1)',
  silver: '#C9C9C9',
  persimmon:'rgba(255, 87, 87, 1)',
  gallery:'#EFEFEF',
  iron: '#BAB9BA',
  red: 'rgb(255,0,0)',
  progressGreen: '#1F973A',
  progressOrange: '#F5951B',
  completedBlue: '#2980B9',
  recoverGreen: '#1B8633',
  clementine: '#ed6000',
  ironLight:'#cdd2d3',
  catlinaBlue: '#273C5A',
  brilliantRose: '#FF1D78'
}

export default {
  countPixelRatio: (defaultValue) => {
    return smartScale(defaultValue);
  },

  screen: {
    height,
  },

  // Fonts
  bold: 'roboto.bold',
  regular: 'Roboto-Regular',
  medium: 'Roboto-Medium',
  light: 'Roboto-Light',
  black: 'roboto.black',

  //Colors
  ...AppColors,

  //Font Size for Phone & Tablet
  headerHeight: Platform.OS === 'ios' ? iPhoneX ? smartScale(87) : smartScale(65) : smartScale(45),

  fontSizeParagraph: smartScale((deviceType == 'phone') ? 13 : 15),
  fontSizeSubParagraph: smartScale((deviceType == 'phone') ? 10 : 12),
  fontSizeH1: smartScale((deviceType == 'phone') ? 48 : 53),
  fontSizeH2: smartScale((deviceType == 'phone') ? 24 : 29),
  fontSizeH3: smartScale((deviceType == 'phone') ? 22 : 27),
  fontSizeH4: smartScale((deviceType == 'phone') ? 19 : 24),
  fontSizeH5: smartScale((deviceType == 'phone') ? 18 : 23),
  fontSizeH6: smartScale((deviceType == 'phone') ? 16 : 21),
  fontSizeH7: smartScale((deviceType == 'phone') ? 15 : 20),
  fontSizeH8: smartScale((deviceType == 'phone') ? 14 : 19),
  fontSizeH9: smartScale((deviceType == 'phone') ? 12 : 17),
  fontSizeH10: smartScale((deviceType == 'phone') ? 11 : 16),
  fontSizeFieldTitle: smartScale((deviceType == 'phone') ? 15 : 17),
  fieldButtonFontSize: smartScale(10),


  //Buttons Config
  buttonHeightH1: smartScale(40),
  buttonHeightH2: smartScale(25),

  buttonTextH1: smartScale((deviceType == 'phone') ? 15 : 17),
  buttonTextH2: smartScale((deviceType == 'phone') ? 10 : 13),

  //Grid values
  screenPaddingValue: smartScale(16),
  scalarSpace: scalarSpace,
  getScreenPadding: screenPaddingValue,
  getWidthByColumn: (column = 1) => {
    return (column == 3)
      ? getWidthByColumn(2) + getWidthByColumn(4) + scalarSpace
      : getWidthByColumn(column);
  }
}
