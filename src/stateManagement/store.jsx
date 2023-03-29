import {createStore , applyMiddleware} from 'redux';
import  reducers from './reducers';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { configure } from '@testing-library/react';


const persistConfig = {
    key: 'root',
    storage,
  } 


  const persistedReducer = persistReducer(persistConfig, reducers)

 
export const store = createStore(persistedReducer , applyMiddleware(thunk));
export const persistor = persistStore(store);

