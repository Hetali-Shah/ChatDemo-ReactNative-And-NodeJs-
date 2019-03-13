import { StyleSheet } from 'react-native';
import { WINDOW } from '../../common/global';
import StyleConfig from './config';

export default StyleSheet.create({
  container: {
    backgroundColor: StyleConfig.darkBlue,
    flex: 1,
    height: WINDOW.height,
    //width: WINDOW.width,
    padding: StyleConfig.screenPaddingValue,
    borderWidth:1
  },
  chatInputView:{
    paddingTop:100,
    flex:1,
    justifyContent:'flex-start',
    //alignItems:'flex-end'
  },
  chatInputStyle:{
    borderRadius: StyleConfig.countPixelRatio(10),
    fontSize:StyleConfig.fontSizeH8,
    color:StyleConfig.doveGray3,
    backgroundColor: StyleConfig.white,
    fontFamily:StyleConfig.bold
  },
  chatText:{
    paddingVertical:20,
    marginBottom:20,
    borderBottomEndRadius:StyleConfig.countPixelRatio(20),
    fontSize:StyleConfig.fontSizeH8,
    color:StyleConfig.black1,
    backgroundColor: StyleConfig.turbo,
    fontFamily:StyleConfig.black,
    borderWidth: 1
  },
  placeHolderStyle:{
    fontSize:StyleConfig.fontSizeH8,
    color:StyleConfig.black1,
    fontFamily:StyleConfig.regular
  },
})
