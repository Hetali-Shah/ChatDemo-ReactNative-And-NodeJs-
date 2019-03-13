import { StyleSheet } from 'react-native';
import { WINDOW } from '../../common/global';
import StyleConfig from './config';

export default StyleSheet.create({
  container: {
    backgroundColor: StyleConfig.darkBlue,
    flex: 1,
    height: WINDOW.height,
    //width: WINDOW.width,
    //padding: StyleConfig.screenPaddingValue,
  },
  gridView: {
    justifyContent:'flex-end',
    marginTop: StyleConfig.countPixelRatio(20),
    padding: StyleConfig.screenPaddingValue,
  },
  inputRow: {
    paddingHorizontal: StyleConfig.countPixelRatio(10),
    paddingTop:StyleConfig.countPixelRatio(15),
    backgroundColor: StyleConfig.white,
    borderRadius:StyleConfig.countPixelRatio(15),
    marginBottom:StyleConfig.countPixelRatio(10)
  },
  gridRow: {
    paddingTop:StyleConfig.countPixelRatio(0),
    paddingBottom:StyleConfig.countPixelRatio(10),
    justifyContent:'center',
    alignItems:'center'
  },
  signInText:{
    fontFamily:StyleConfig.regular,
    fontSize:StyleConfig.fontSizeH2,
    color:StyleConfig.white
  },
  inputView:{
    marginBottom: StyleConfig.countPixelRatio(9),
    padding: StyleConfig.countPixelRatio(10)
  },
  signUpButtonView:{
    padding:StyleConfig.countPixelRatio(15),
    justifyContent:'flex-end',
    alignItems:'flex-end',
    elevation:10
  },
  buttonStyle: {
    width: StyleConfig.countPixelRatio(146),
    height: StyleConfig.countPixelRatio(36),
    backgroundColor: StyleConfig.darkBlue,
  },
  names: {
    fontSize: StyleConfig.fontSizeH8,
    fontFamily: StyleConfig.medium,
    elevation:10
  },
});
