// initializing our Store

import {createStore, applyMiddleware, compose} from 'redux';
import RootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleweares = [thunk];

const configureStore = (preloadedState = {}) => // preloadedState is for initialize state 
    createStore(
        RootReducer,
         preloadedState,
         applyMiddleware(...middleweares)
        //  compose(
        //     applyMiddleware(thunk, logger),
        //     //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        //  )
        );

export default configureStore;