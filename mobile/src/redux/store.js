/**
 * @providesModule ReduxStore
 */

import { createStore, combineReducers, compose } from 'redux';
import {
   user,
  socketStatus,
  addChatUser,
} from './reducers';
import { reducer as reduxFormReducer } from 'redux-form';
import { persistCombineReducers } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist';
import reduxStorage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'primary',
    storage: reduxStorage,
    whitelist: []
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  user,
  socketStatus,
  addChatUser,
  form: reduxFormReducer
}))

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
