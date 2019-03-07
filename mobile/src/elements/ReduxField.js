import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Item } from 'native-base';
import { Field } from 'redux-form';
import { LayoutStyle } from '../assets/style';
import { StyleConfig } from '../assets/style';
import AppIcon from './AppIcon';

class CustomField extends Component {
  focusInput() {
    if(this.input) {
      this.input.focus();
    }
  }

  _doFormat = (mask, reference) => {
    const { onChangeText } = this.props;
    let newReference = mask;
    let ignoreCount = 0;
    for (let n = 0; n < reference.length; n++) {
      if (reference.charAt(n) != mask.charAt(n)) {
        newReference = newReference.replace('X', reference.charAt(n));
        mask.charAt(n) != 'X' && ignoreCount++;
      }
    }
    newReference = newReference.substr(0, reference.length + ignoreCount);
    onChangeText(newReference);
  }

  render() {
    const {
      refProp,
      input,
      inputStyle = {},
      multiline,
      keyboardType,
      inputFormat,
      onChangeText,
      changeSuccessColor,
      placeholder,
      label,
      secureTextEntry,
      _onFocus = false,
      _onBlur = false,
      _onPress = false,
      _onKeyPress = false,
      ellipsizeMode,
      numberOfLines,
      returnKeyType,
      autoFocus,
      autoGrow,
      maxLength,
      autoCapitalize,
      autoCorrect,
      disabled,
      meta: { touched, error, warning },
      onSubmitEditing,
      onEndEditing,
      onLayout,
      inputIconRight = false,
      inputTextRight = '',
      inputIconLeft = false,
      onInputIconRightPress = false,
      onInputIconLeftPress = false,
      inputViewStyle = {}
    } = this.props;

    const hasError = (typeof error !== 'undefined' ? true : false);

    const itemStyle = (hasError && touched)
      ? LayoutStyle.itemInputError
      : (changeSuccessColor && touched)
        ? LayoutStyle.itemInputSuccess
        : LayoutStyle.itemInput;

    const labelInput = (hasError && touched)
      ? LayoutStyle.labelInputError
      : (changeSuccessColor && touched)
        ? LayoutStyle.labelInputSuccess
        : LayoutStyle.labelInput;

    return (
      <View onLayout={onLayout} style={inputViewStyle}>
        <Item style={[itemStyle]} underline error={hasError && touched} success={!hasError && touched}>
          {
            inputIconLeft && <TouchableOpacity onPress={() => (onInputIconLeftPress) ? onInputIconLeftPress() : null}>
              <AppIcon style={inputIconLeft.style} name={inputIconLeft.name} family={inputIconLeft.family}/>
            </TouchableOpacity>
          }
          <TextInput {...input}
                     ref={refProp ? refProp : (node) => this.input = node}
                     multiline={multiline}
                     keyboardType={keyboardType}
                     placeholder={placeholder}
                     secureTextEntry={secureTextEntry}
                     placeholderTextColor={StyleConfig.iron}
                     style={[LayoutStyle.inputStyle, inputStyle]}
                     placeholderStyle={LayoutStyle.placeholder}
                     autoCapitalize={autoCapitalize}
                     autoCorrect={autoCorrect}
                     autoGrow={autoGrow}
                     returnKeyType={returnKeyType}
                     autoFocus={autoFocus}
                     onEndEditing={onEndEditing}
                     onSubmitEditing={onSubmitEditing}
                     numberOfLines={numberOfLines}
                     ellipsizeMode={ellipsizeMode}
                     maxLength={maxLength}
                     editable={!disabled}
                     underlineColorAndroid={Platform.OS === 'android' ? 'transparent' : null}
                     onChangeText={(typeof inputFormat != 'undefined') ? this._doFormat.bind(this, inputFormat) : onChangeText}
                     {...(_onKeyPress) ? { onKeyPress: _onKeyPress }  : {}}
                     {...(_onPress) ? { onPress: (e) => { _onPress(e) } } : {}}
                     {...(_onFocus) ? { onFocus: () => { _onFocus() } } : {}}
                     {...(_onBlur) ? { onBlur: () => { _onBlur() } } : {}}
          />
          {
            inputIconRight && <TouchableOpacity onPress={() => (onInputIconRightPress) ? onInputIconRightPress() : null}>
              <AppIcon name={inputIconRight.name} family={inputIconRight.family} />
            </TouchableOpacity>
          }
        </Item>
        <View style={[LayoutStyle.labelInputView]}>
          <Text style={[labelInput]}>{(hasError && touched) ? error : label}</Text>
          {!!inputTextRight &&
          <Text style={LayoutStyle.inputRightText}> {inputTextRight} </Text>
          }
        </View>
      </View>
    )
  }
}

class ReduxField extends Component {
  focus() {
    this.inputRef.getRenderedComponent().focusInput()
  }

  render() {
    return (
      <Field
        {...this.props}
        component={CustomField}
        ref={node => this.inputRef = node}
        withRef
      />
    );
  }

}

export default ReduxField;
