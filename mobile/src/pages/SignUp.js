import React, {Component} from 'react';
import {Text, TextInput} from 'react-native';
import {Col, Grid, Row} from 'native-base';
import { reduxForm } from 'redux-form';
import { Actions } from 'react-native-router-flux';
import { Screen, ReduxField, AppButton } from  '../elements'
import {SignUpStyle } from '../assets/style';
import {emailRegex, ROUTE_MAP} from '../common/global';
import io from "socket.io-client";

class SignUp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: '',
      users:[]
    }
  }

  componentDidMount(){
    this.socket = io("http://192.168.1.39:3000");
    this.socket.on("new user", user => {
      this.setState({
        users : [...this.state.users, user]
      })
    })
  }
  _onSubmit = (formData) =>{
    console.log("formData", formData)
    this.socket.emit("new user", formData.user)
    this.setState({
      user: ''
    })
    Actions[ROUTE_MAP[1]]()
  };

  render() {
    const {invalid, handleSubmit} = this.props;
    return (
      <Screen style={SignUpStyle.container}
              disableKBDismissScroll={true}
              keyboardShouldPersistTaps='always'
              enableAutoAutomaticScroll={false}>
        <Grid style={SignUpStyle.gridView}>
          <Row style={SignUpStyle.inputRow}>
            <Col style={SignUpStyle.inputView}>
              <ReduxField
                name="user"
                placeholder="UserName"
                changeSuccessColor={true}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={user => {
                  this.setState({ user })
                }}
                value={this.state.user}
                onSubmitEditing={handleSubmit(this._onSubmit)}
              />
              <Row style={SignUpStyle.signUpButtonView}>
                <AppButton
                  name={'Next'}
                  buttonStyle={SignUpStyle.buttonStyle}
                  nameStyle={SignUpStyle.names}
                  onPress={handleSubmit(this._onSubmit)}
                />
              </Row>
            </Col>
          </Row>
        </Grid>
      </Screen>
    );
  }
}

const validate = values => {
  let errors = {};
  errors.user = !values.user
    ? 'UserName Required'
    // : !emailRegex.test(values.email)
    //   ? 'Email Invalid'
      : undefined;
  return errors;
};

const initialState = {
  user:'',
};

const withForm = reduxForm({
  form: 'signUpForm',
  validate,
  initialValues: initialState
});

export default withForm(SignUp);
