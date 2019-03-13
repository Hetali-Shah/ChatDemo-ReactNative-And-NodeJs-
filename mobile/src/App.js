import React, { Component } from 'react';
import { StyleProvider, Container } from 'native-base';
import getTheme from '../native-base-theme/components';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import Routes from './Routes';
import AppTheme from '../native-base-theme/variables/material';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(AppTheme)}>
          <Container>
            <Routes />
          </Container>
        </StyleProvider>
      </Provider>
    );
  }
}
