/**
 * @providesModule global
 */

import { AsyncStorage, Dimensions, Platform, Alert, BackHandler } from 'react-native';
export const USER_STORAGE_KEY = 'CHAT_USER_DATA'

export const WINDOW = Dimensions.get('window');
export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//STORE USER IN LOCAL STORAGE
export const storeUser  = user => {
  AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
}

//GET USER FROM LOCAL STORAGE
export const getUser = async () => JSON.parse(await AsyncStorage.getItem(USER_STORAGE_KEY));

export const getAuthToken = async () => {
  const user = await getUser();
  return user
}


export const ROUTE_MAP = [
  'signUp',
  'displayChat',
  'chat',
];
