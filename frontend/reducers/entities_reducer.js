// to keep track of all the relational data in our app.
// This file will be responsible for combining our reducers that handle relational data.

import {combineReducers} from 'redux';
import users from './users_reducer';
import boards from './boards_reducer';
import pins from './pins_reducer';
import boardsPins from "./boards_pins_reducer";


const entitiesReducer = combineReducers({
   boards,
   pins,
   boardsPins,
   users
});

export default entitiesReducer;