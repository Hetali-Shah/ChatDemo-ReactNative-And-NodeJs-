import { StyleSheet } from 'react-native';
import { WINDOW } from '../../common/global';
import StyleConfig from './config';

export default StyleSheet.create({
  container: {
    backgroundColor: StyleConfig.darkBlue2,
    flex: 1,
    padding: StyleConfig.screenPaddingValue,
  },
  chatInputView:{
    justifyContent:'flex-end',
    flex:1,
  },
  chatInputStyle:{
    fontSize:StyleConfig.fontSizeH8,
    color:StyleConfig.doveGray3,
    backgroundColor: StyleConfig.white,
    fontFamily:StyleConfig.bold,
    borderRadius:StyleConfig.countPixelRatio(10)
  },
  chatMsg:{
    alignSelf:'flex-start',
    fontSize:StyleConfig.fontSizeH9,
    color:StyleConfig.fountainBlue,
    backgroundColor: StyleConfig.white2,
    fontFamily:StyleConfig.bold,
    borderBottomLeftRadius:StyleConfig.countPixelRatio(10),
    borderTopRightRadius:StyleConfig.countPixelRatio(10),
    padding: StyleConfig.countPixelRatio(5),
    elevation: 10
  },
  chatReply:{
    alignSelf:'flex-end',
    fontSize:StyleConfig.fontSizeH9,
    color:StyleConfig.brilliantRose,
    backgroundColor: StyleConfig.white2,
    fontFamily:StyleConfig.bold,
    borderBottomRightRadius:StyleConfig.countPixelRatio(10),
    borderTopLeftRadius:StyleConfig.countPixelRatio(10),
    padding: StyleConfig.countPixelRatio(5),
    elevation: 10
  },
  placeHolderStyle:{
    fontSize:StyleConfig.fontSizeH8,
    color:StyleConfig.black1,
    fontFamily:StyleConfig.regular,
    paddingHorizontal:10
  },
  userName:{
    fontSize:StyleConfig.fontSizeH6,
    color:StyleConfig.black1,
    fontFamily:StyleConfig.bold,
    alignSelf:'flex-end',
    padding:StyleConfig.countPixelRatio(10),
  }
})
