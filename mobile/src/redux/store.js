/**
 * @providesModule ReduxStore
 */

import { createStore, applyMiddleware, compose } from 'redux';
import {
    toast,
    currentUser,
    loader,
    goBack,
    routeIndex
} from './reducers';
import { reducer as formReducer } from 'redux-form';
import { persistCombineReducers } from 'redux-persist';
import { AsyncStorage } from 'react-native';

const config = {
    key: 'primary',
    storage: AsyncStorage,
    whitelist: []
};

const store = createStore(
    persistCombineReducers(config, {
        toast,
        currentUser,
        loader,
        goBack,
        routeIndex,
        form: formReducer
    }),
    undefined,
    compose(applyMiddleware())
);

export default store;
