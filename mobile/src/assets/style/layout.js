import {StyleSheet, Platform} from 'react-native';
import {WINDOW} from '../../common/global';
import StyleConfig from './config';

export default StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  content: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop:40
    // paddingHorizontal: StyleConfig.getScreenPadding
  },
  screenContainer: {
    marginTop: StyleConfig.countPixelRatio(20),
  },
  backgroundImage: {
    flex: 1,
  },
  inputStyle: {
    flex: 1,
    fontFamily: StyleConfig.regular,
    color: StyleConfig.black3,
    fontSize: StyleConfig.fontSizeH6,
    //letterSpacing: StyleConfig.countPixelRatio(0.5) >= 0.25 ? StyleConfig.countPixelRatio(0.5) : 0.25,
    padding: 0,
    marginBottom: StyleConfig.countPixelRatio(8),
   // lineHeight: StyleConfig.countPixelRatio(24),
  },
  labelInput: {
    color: StyleConfig.lightGray,
    fontFamily: StyleConfig.regular,
    fontSize: StyleConfig.fontSizeH7,
    //letterSpacing:StyleConfig.countPixelRatio(1),
    lineHeight: StyleConfig.countPixelRatio(20),
    padding: 0,
    backgroundColor: 'transparent',
    marginTop: StyleConfig.countPixelRatio(5)
  },

  labelInputSuccess: {
    color: 'green',
    fontFamily: StyleConfig.regular,
    fontSize: StyleConfig.fontSizeH7,
    //letterSpacing:StyleConfig.countPixelRatio(1),
    lineHeight: StyleConfig.countPixelRatio(20),
    padding: 0,
    backgroundColor: 'transparent',
    marginTop: StyleConfig.countPixelRatio(6)
  },

  labelInputError: { //not used
    color: 'red',
    fontFamily: StyleConfig.regular,
    fontSize: StyleConfig.fontSizeH7,
    //letterSpacing: StyleConfig.countPixelRatio(1),
    lineHeight: StyleConfig.countPixelRatio(20),
    padding: 0,
    backgroundColor: 'transparent',
    marginTop: StyleConfig.countPixelRatio(6)
  },

  labelInputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputRightTextView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderWidth: 1
  },
  inputRightText: {
    alignSelf: 'flex-end',
    fontFamily: StyleConfig.regular,
    fontSize: StyleConfig.fontSizeH9,
    color: StyleConfig.black2,
    //letterSpacing:StyleConfig.countPixelRatio(1),
    lineHeight: StyleConfig.countPixelRatio(20),
    padding: 0,
    backgroundColor: 'transparent',
    //marginTop:StyleConfig.countPixelRatio(6)
  },


  placeholder: {
    borderColor: StyleConfig.iron,
    fontFamily: StyleConfig.medium,
    //letterSpacing:1,
    borderWidth:1
  },

  itemInput: {
    borderColor: StyleConfig.darkBlue,
    borderWidth: StyleConfig.countPixelRatio(10),
    marginLeft: StyleConfig.countPixelRatio(0)
  },

  itemInputError: {
    borderColor: StyleConfig.red,
    marginLeft: StyleConfig.countPixelRatio(0)
  },

  itemInputSuccess: {
    borderColor: StyleConfig.green,
    marginLeft: StyleConfig.countPixelRatio(0)
  },
  mainContainerWithLoader: {
    flex: 1,
    position: 'absolute',
    right: 0,
    left: 0,
    height: WINDOW.height,
    width: WINDOW.width,
    zIndex: 999999
  },
  indicatorWithLoader: {
    flex: 1,
    position: 'absolute',
    right: 0,
    left: 0,
    height: WINDOW.height,
    width: WINDOW.width,
    zIndex: 9999999,
    // backgroundColor: 'rgba(0,0,0,0.6)', // for flip image or else remove this
    // alignItems: 'center', // for flip image or else remove this
    // justifyContent:'center', // for flip image or else remove this
  },
  empty: {
    height: 0,
    width: 0
  },
  indicator: {
    flex: 1,
    right: 0,
    height: 0,
    width: 0,
    zIndex: 0
  },
  mainContainer: {
    flex: 1,
    position: 'absolute',
    right: 0,
    left: 0,
    height: 10,
    width: WINDOW.width,
    zIndex: 9999,
  },
  disabled: {
    opacity: 0.5
  },
  buttonH1: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: StyleConfig.buttonHeightH1,
    shadowColor: StyleConfig.black1,
    shadowOffset: {width: 0, height: StyleConfig.countPixelRatio(2)},
    shadowOpacity: 0.25,
    shadowRadius: StyleConfig.countPixelRatio(2),
    borderRadius: StyleConfig.buttonHeightH1,
    backgroundColor: StyleConfig.white,
    elevation: 1
  },
  buttonH1Text: {
    fontFamily: StyleConfig.medium,
    fontSize: StyleConfig.fontSizeH5,
    lineHeight: StyleConfig.countPixelRatio(20),
    //letterSpacing:StyleConfig.countPixelRatio(1.5),
    color: StyleConfig.white,
    backgroundColor: 'transparent'
  },
  buttonH2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: StyleConfig.buttonHeightH2,
    shadowColor: StyleConfig.black1,
    shadowOffset: {width: 0, height: StyleConfig.countPixelRatio(1)},
    shadowOpacity: 0.25,
    shadowRadius: StyleConfig.countPixelRatio(2),
    borderWidth: StyleConfig.countPixelRatio(1),
    borderRadius: StyleConfig.buttonHeightH2,
    backgroundColor: StyleConfig.white,
    borderColor: StyleConfig.white,
    padding: StyleConfig.countPixelRatio(0),
    elevation: 1
  },
  buttonH2Text: {
    fontFamily: StyleConfig.medium,
    fontSize: StyleConfig.fontSizeH3,
    lineHeight: StyleConfig.countPixelRatio(20),
    //letterSpacing:StyleConfig.countPixelRatio(1.5),
    color: StyleConfig.white,
    backgroundColor: 'transparent'
  },
  modalContent: {
    backgroundColor: StyleConfig.white,
    padding: StyleConfig.getScreenPadding,
    borderRadius: StyleConfig.countPixelRatio(4),
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalTitle: {
    fontFamily: StyleConfig.bold,
    color: StyleConfig.blueviolet,
    fontSize: StyleConfig.fontSizeH2,
    marginVertical: StyleConfig.countPixelRatio(10),
  },
  modal: {},
  cancelBtn: {
    alignItems: 'center'
  },
  cancelText: {
    fontSize: StyleConfig.fontSizeH3,
    fontFamily: StyleConfig.regular,
    color: StyleConfig.gray,
    textAlign: 'center',
    alignSelf: 'center'
  },
  headerTitle: {
    fontFamily: StyleConfig.medium,
    fontSize: StyleConfig.fontSizeH5,
    //textAlign: 'center',
    paddingLeft: StyleConfig.countPixelRatio(20),
    flex: 1,
    color: StyleConfig.darkBlue
  },
  headerArrow: {
    fontSize: 30,
    textAlign: 'left',
    color: StyleConfig.darkBlue,
    fontFamily: StyleConfig.medium,
  },
  headerRightIcon: {
    fontSize: 30,
    textAlign: 'right',
    color: StyleConfig.darkBlue,
    fontFamily: StyleConfig.medium,
  },
  screenView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StyleConfig.countPixelRatio(25),
    width: WINDOW.width,
    backgroundColor: StyleConfig.white,
    height: StyleConfig.countPixelRatio(50)
  },
  headerIcon: {
    fontSize: 30,
    textAlign: 'right',
    color: StyleConfig.darkBlue,
    fontFamily: StyleConfig.medium,
    paddingRight: StyleConfig.countPixelRatio(20)
  },
  headerView: {
    padding: StyleConfig.countPixelRatio(5),
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer:{
    backgroundColor: StyleConfig.darkBlue,
    justifyContent:'flex-end',
    alignItems:'flex-end'
  },
  footerBtn:{
    justifyContent:'center',
    backgroundColor: StyleConfig.white,
    margin: StyleConfig.countPixelRatio(10),
    height: StyleConfig.countPixelRatio(36),
    marginBottom: StyleConfig.countPixelRatio(10),
    width:StyleConfig.countPixelRatio(146),
  },
  footerText:{
    textAlign:'center',
    fontSize: StyleConfig.fontSizeH8,
    color: StyleConfig.darkBlue,
    fontFamily: StyleConfig.bold
  }
});
