// import { faDraftingCompass } from '@fortawesome/free-solid-svg-icons';
// import * as PinAPIUtil from '../util/pin_api_util';

// export const RECEIVE_PINS = "RECEIVE_PINS";
// export const RECEIVE_PIN = "RECEIVE_PIN";
// export const REMOVE_PIN = "REMOVE_PIN";
// export const RECEIVE_PIN_ERRORS = "RECEIVE_PIN_ERRORS";

// const receivePins = pins => ({
//     type: RECEIVE_PINS,
//     pins
// });

// const receivePin = pin => ({
//     type: RECEIVE_PIN,
//     pin
// });

// const removePin = pinId => ({
//     type: REMOVE_PIN,
//     pinId
// });

// const receivePinErrors = errors => ({
//     type: RECEIVE_PIN_ERRORS,
//     errors
// });

// export const fetchPins = () => dispatch => (
//     PinAPIUtil.fetchPins().then(
//         pins => dispatch(receivePins(pins))
//     )
// );

// export const fetchSinglePin = pinId => despatch => (
//     PinAPIUtil.fetchSinglePin(pinId).then(
//         pin => despatch(receivePin(pin))
//     )
// );

// export const createPin = pin => dispatch => (
//     PinAPIUtil.createPin(pin).then(
//         pin => dispatch(receivePin(pin)),
//         err => dispatch(receivePinErrors(err.responseJSON))
//     )
// );
// // 
// export const updatePin = pin => dispatch => (
//     PinAPIUtil.updatePin(pin).then(
//         pin => dispatch(receivePin(pin)),
//         err => dispatch(receivePinErrors(err.responseJSON))
//     )
// );

// export const deletePin = pinId => dispatch => (
//     PinAPIUtil.deletePin(pinId).then(
//         pin => dispatch(removePin(pin.id)),
//         err => dispatch(receivePinErrors(err.responseJSON))
//     )
// );

import * as PinAPIUtil from '../util/pin_api_util';

export const RECEIVE_PIN = 'RECEIVE_PIN';
export const RECEIVE_PINS = 'RECEIVE_PINS';
export const REMOVE_PIN = 'REMOVE_PIN';
export const RECEIVE_PIN_ERRORS = 'RECEIVE_PIN_ERRORS';
export const CLEAR_PIN_ERRORS = 'CLEAR_PIN_ERRORS';

const receivePin = pin => ({
    type: RECEIVE_PIN,
    pin
});

const receivePins = pins => ({
    type: RECEIVE_PINS,
    pins
});

const removePin = pinId => ({
    type: REMOVE_PIN,
    pinId
});

const receivePinErrors = errors => ({
    type: RECEIVE_PIN_ERRORS,
    errors
});

export const clearPinErrors = () => {
    return {
        type: CLEAR_PIN_ERRORS
    }
}

export const fetchPin = pinId => dispatch => {
    return PinAPIUtil.fetchPin(pinId)
        .then(pin => dispatch(receivePin(pin)))
}

export const fetchPins = () => dispatch => {
    return PinAPIUtil.fetchPins()
        .then(pins => dispatch(receivePins(pins)))
}

export const deletePin = (pinId) => dispatch => {
    return PinAPIUtil.deletePin(pinId)
        .then(pin => dispatch(removePin(pin.id)),
            err => dispatch(receivePinErrors(err.responseJSON)))
}

export const updatePin = (pin) => dispatch => {
    return PinAPIUtil.updatePin(pin)
        .then(pin => dispatch(receivePin(pin)))
}

export const createPin = (pin) => dispatch => (
    PinAPIUtil.createPin(pin).then(pin => (
        dispatch(receivePin(pin))
    ), err => (
        dispatch(receivePinErrors(err.responseJSON))
    ))
);