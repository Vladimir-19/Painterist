// this is hoverd black thing on singup-in page
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
// import SearchContainer from "..";
// import CreateBoardFormContainer from "../board/form/create_board_form_container";
// import EditBoardFormContainer from "../board/form/edit_board_form_container";
// import DeleteBoardFormContainer from "../board/form/delete_board_form_container";
// import EditPinFormContainer from "../pin/form/edit_pin_form_container";
// import DeletePinFormContainer from "../pin/form/delete_pin_form_container";
import AuthBox from '../AuthBox/AuthBox'
// import CreateBoardPinFormContainer from '../board_pin/create_board_pin_form';
// import EditBoardForm from '../board/form/edit_board_form';
// import EditPinForm from '../pin/form/edit_pin_form';

function Modal({ modal, closeModal, openModal }) {
    if (!modal) return null;

    let component, switchFormValue, altModal, clickBackground;
    switch (modal) {
        case 'login':
            switchFormValue = "Sign Up"
            altModal = "signup"
            component = <LoginFormContainer />;
            clickBackground = null;
            break;
        case 'signup':
            switchFormValue = "Lig in"
            altModal = "login"
            component = <SignupFormContainer />;
            clickBackground= null;
            break;
        case 'new-board':
            component = <CreateBoardFormContainer/>;
            clickBackground = closeModal;
            break;
        case 'edit-board':
            component = <EditBoardFormContainer/>;
            clickBackground = closeModal;
            break;
        case 'delete-board':
            component = <DeleteBoardFormContainer/>;
            clickBackground = closeModal;
            break;
        case 'edit-pin':
            component = <EditPinFormContainer/>;
            clickBackground = () => openModal('edit-pin');
            break;
        case 'delete-pin':
            component = <DeletePinFormContainer/>;
            clickBackground = () => openModal('edit-pin');
            break;
        case 'new-board-pin':
            component = <CreateBoardPinFormContainer/>;
            clickBackground = closeModal;
            break;
        default:
            return null;
    };

    const switchFormButton = (switchFormButton) ? (
        <button className="switch-form-button" onClick={() => openModal(altModal)}> 
            <div className="switch-form-value">
                {switchFormValue}
            </div>
        </button>
    ) : null;

    return (
        <div className="modal-container" >
            <div className="modal-background" id={modal} onClick={clickBackground}>
                <div className="modal-child" id={`${modal}-child`} onClick={e => e.stopPropagation()}>
                    {component}
                </div>
                <div className="modal-child-two" onClick={e => e.stopPropagation()}>
                    {switchFormButton}
                </div>
            </div>
        </div>
    );
}

// const mapStateToProps = state => {
//     return {
//         modal: state.ui.modal
//     };
// };
const mapStateToProps = state => ({
    modal: state.ui.modal
})

// const mapDispatchToProps = dispatch => {
//     return {
//         closeModal: () => dispatch(closeModal()),
//         openModal: (modal) => dispatch(openModal(modal))
//     };
// };
const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);