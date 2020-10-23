// to keep track of all the relational data in our app.
// This file will be responsible for combining our reducers that handle relational data.

import {combineReducers} from 'redux';
import users from './users_reducer';
// import boards from
import pins from './pins_reducer';
// import boardsPins from 


const entitiesReducer = combineReducers({
   users,
   pins
});

export default entitiesReducer;