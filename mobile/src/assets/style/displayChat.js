import { StyleSheet } from 'react-native';
import { WINDOW } from '../../common/global';
import StyleConfig from './config';

export default StyleSheet.create({
  container: {
    backgroundColor: StyleConfig.white,
    flex: 1,
    height: WINDOW.height,
    width: WINDOW.width,
    //padding: StyleConfig.screenPaddingValue,
  },
  contentContainerStyle: {
    backgroundColor: StyleConfig.white,
    //paddingHorizontal: StyleConfig.getScreenPadding
    paddingBottom: 20
  },
  peopleMainView:{
    paddingHorizontal: StyleConfig.countPixelRatio(16),
    marginBottom: StyleConfig.countPixelRatio(16),
    //paddingVertical: StyleConfig.countPixelRatio(16),
    paddingTop: StyleConfig.countPixelRatio(10),
  },
  singlePeopleResultView: {
    borderTopWidth:1,
    borderTopColor:StyleConfig.gallery,
    paddingTop: StyleConfig.countPixelRatio(16),
    paddingBottom: StyleConfig.countPixelRatio(5),
    // marginBottom: StyleConfig.countPixelRatio(20),
  },
  flexRow:{
    flex:1,
    flexDirection: 'row',
  },
  flexColumn:{
    flex:1,
    borderWidth:1,
    flexDirection: 'column',
    width:50
  },
  peopleImageStyle:{
    height:StyleConfig.countPixelRatio(86),
    width:StyleConfig.countPixelRatio(86),
    borderRadius:StyleConfig.countPixelRatio(43),
  },
  peopleImageView:{
    flex:0.4,
  },
  peopleTextView:{
    paddingLeft:StyleConfig.countPixelRatio(8),
    paddingTop:StyleConfig.countPixelRatio(8),
    flex:1.2,
  },
  ratingStarStyle: {
    height: StyleConfig.countPixelRatio(30),
    width: StyleConfig.countPixelRatio(30),
  },
  nameStyle:{
    paddingLeft:StyleConfig.countPixelRatio(10),
    fontFamily:StyleConfig.bold,
    fontSize:StyleConfig.fontSizeH6,
    color:StyleConfig.mineShaft,
  },
})
