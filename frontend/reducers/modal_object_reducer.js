import {
    OPEN_MODAL,
    CLOSE_MODAL
} from '../actions/modal_actions';

const ModalObjectReducer = (state = null, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return action.objectId || state;
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}

export default ModalObjectReducer;