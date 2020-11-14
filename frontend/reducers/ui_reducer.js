import { combineReducers } from 'redux';
import modal from './modal_reducer';
import objectId from './modal_object_reducer';
import loading from './loading_reducer';


export default combineReducers({
    modal,
    objectId,
    loading
});