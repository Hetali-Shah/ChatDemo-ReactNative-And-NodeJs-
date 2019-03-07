/**
 * @providesModule global
 */

import { AsyncStorage, Dimensions, Platform, Alert, BackHandler } from 'react-native';

export const WINDOW = Dimensions.get('window');
export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const ROUTE_MAP = [
  'signUp',
  'chat'
];
