// this is hoverd black thing on singup-in page
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
// import CreatrBoardPinFormContainer from 
import EditPinFormContainer from "../pin/form/edit_pin_form_container";
import DeletePinFormContainer from "../pin/form/delete_pin_form_container";
import AuthBox from '../AuthBox/AuthBox'
import EditPinForm from '../pin/form/edit_pin_form';

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
        case "edit-pin":
            component = < EditPinFormContainer/>;
            clickBackground = () => openModal('edit-pin');
            break;
        default:
            return null;
    }

    // const switchFormButton = (switchFormButton) ? (
    //     <button className="switch-form-button" onClick={() => openModal(altModal)}> 
    //         <div className="switch-form-value">
    //             {switchFormValue}
    //         </div>
    //     </button>
    // ) : null;

    return (
        <div className="modal-container" >
            {/* <div className="modal-child" onClick={e => e.stopPropagation()}> */}
            {/* {component} */}
            <div className="modal-background" id={modal} onClick={clickBackground}>
                    {component}
            </div>
        </div>
        // </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);