// to keep track of all the relational data in our app.
// This file will be responsible for combining our reducers that handle relational data.

import {combineReducers} from 'redux';
import usersReducer from './users_reducer';



const entitiesReducer = combineReducers({
   users: usersReducer
});

export default entitiesReducer;