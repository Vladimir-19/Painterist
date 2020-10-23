import { combineReducers } from 'redux';
import modal from './modal_reducer';
import object from './modal_object_reducer';

export default combineReducers({
    modal,
    object
});