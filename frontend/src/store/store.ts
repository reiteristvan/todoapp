
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import collectionReducer, { CollectionState } from '../slices/collectionSlice';

export interface ApplicationState {
    isLoading:boolean;
}

export interface State {
    collection:CollectionState;
}

const rootReducer = combineReducers({
    collection: collectionReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;