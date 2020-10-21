import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import AuthBox from  '../AuthBox'
import styles from './styles.scss'
// import Logo from '../../../app/assets/images/pngegg.png'


class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            age: ''
        };
        
//         this.handleSubmit = this.handleSubmit.bind(this);
//         // this.demoUser = this.demoUser.bind(this);
//     }

//     update(field) {
//         return e => this.setState({
//             [field]: e.currentTarget.value
//         });
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const user = Object.assign({}, this.state);
//         this.props.processForm(user).then(this.props.closeModal);
//     }

//     demoUser(e) {
//         e.preventDefault();
//         this.props.loginDemoUser().then(this.props.closeModal);
//     }

//     renderErrors() {
//         return (
//             <ul>
//                 {this.props.errors.map((error, i) => (
//                     <li className="session-errors"
//                         key={`error-${i}`}>
//                         {error}
//                     </li>
//                 ))}
//             </ul>
//         );
//     }

//     render() {

//         const goToLoginMessage = 'Already a member? Log in'
//         const buttonMessage = 'Sign Up'
//         // if (this.props.formType === 'login') {
//         //     goToLoginMessage = 'Not on Pinteriors yet? Sign Up';
//         //     buttonMessage = 'Continue';
//         // } else {
//         //     goToLoginMessage = 'Already a member? Log in';
//         //     buttonMessage = 'Sign Up';
//         // }


//         return (
            
//             <AuthBox
//                 linkTo={'/login'}
//                 goToLoginMessage={goToLoginMessage}
//                 buttonMessage={buttonMessage}
//                 handleSubmit={this.handleSubmit}
//                 additionalClassName={styles.green}
//                 formFields={
//                     <>
//                         <div className="modal-child-text">
//                             <h1>Sign up to get your ideas</h1>
//                         </div>
                        
//                         <label>
//                             <input 
//                                 type="text"
//                                 value={this.state.email}
//                                 onChange={this.update('email')}
//                                 placeholder="Add your email"
//                                 className={`${styles.addLogin} ${styles.loginInput}`}
//                             />
//                         </label>

//                         <div className="session-form-add-space">
//                         </div>

//                         <label>
//                             <input 
//                                 type="integer"
//                                 value={this.state.age}
//                                 onChange={this.update('age')}
//                                 placeholder="Age"
//                                 className={`${styles.addLogin} ${styles.loginInput}`}
//                             />
//                         </label>

//                         <div className="session-form-add-space">
//                         </div>

//                         <label>
//                             <input 
//                                 type="password"
//                                 value={this.state.password}
//                                 onChange={this.update('password')}
//                                 placeholder="Create password"
//                                 className={`${styles.addLogin} ${styles.loginInput}`}
//                             />
//                         </label>
//                      </>
//                 }
//             />
//             // <div className="login-form-container">
//             //     <form onSubmit={this.handleSubmit} className="login-form-box signup">
//             //         <h4 className="session-welcome">Welcoasdfme to Painteriors</h4>
//             //         <h6 className="session-new-ideas">Find new ideas to try</h6>

//             //         <div onClick={this.props.closeModal} className="close-x">X</div>

//             //         <div className="login-form">

//             //             <label>
//             //                 <input type="text"
//             //                     value={this.state.email}
//             //                     onChange={this.update('email')}
//             //                     placeholder=" Add your email"
//             //                     className="login-input"
//             //                 />
//             //             </label>

//             //             <div className="session-form-add-space">
//             //             </div>
                    
//             //             <label>
//             //                 <input type="text"
//             //                     value={this.state.age}
//             //                     onChange={this.update('age')}
//             //                     placeholder="age"
//             //                     className="login-input"
//             //                 />
//             //             </label>

//             //             <div className="session-form-add-space">
//             //             </div>

//             //             <label>
//             //                 <input type="password"
//             //                     value={this.state.password}
//             //                     onChange={this.update('password')}
//             //                     placeholder="Create password"
//             //                     className="login-input"
//             //                 />
//             //             </label>

//             //             <div className="session-submit">
//             //                 <input type="submit" value={buttonMessage} />
//             //             </div>

//             //             <p className="session-or-message">OR</p>

//             //             <div className="session-submit-demo">
//             //                 <button onClick={(e) => { this.demoUser(e) }}>Demo User</button>
//             //             </div>

//             //             {this.renderErrors()}

//             //             <p className="session-terms-message">By continuing, you agree to Painterior's Terms of Service</p>

//             //             {/* <Login className="switch-session-form" onClick={() => { this.props.switchForm() }}>{renderMessage}</a> */}
//             //             <Link to={'/login'}>
//             //                 {goToLoginMessage}
//             //             </Link>

//             //         </div>
//             //     </form>
//             // </div>
//         );
//     }
// }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    demoUser(e) {
        e.preventDefault();
        this.props.loginDemoUser().then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className="session-errors"
                        key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {

        let renderMessage;
        let buttonMessage;
        if (this.props.formType === 'login') {
            renderMessage = 'Not on Pinteriors yet? Sign Up';
            buttonMessage = 'Continue';
        } else {
            renderMessage = 'Already a member? Log in';
            buttonMessage = 'Sign Up';
        }

        return (
            <>
                <div className="modal-child-text">
                    <h1>Sign up to get your ideas</h1>
                </div>
                <div className="login-form-container">

                    <img src="assets/logo.png" alt="logo"
                        height={80}
                        width={80}
                        style={{ alignSelf: 'center' }}
                    />
                   
                    <div className="session-messages">
                        <h4 className="session-welcome">Welcome to Pinteriors</h4>
                        <h6 className="session-new-ideas">Find new ideas to try</h6>
                    </div>

                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        
                        {/* <div onClick={this.props.closeModal} className="close-x">
                            X
            </div> */}

                        <div className="login-form">
                            <label>
                                <input
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    placeholder="Email"
                                    className="login-input"
                                />
                            </label>
                            <div className="session-form-add-space"></div>

                            <div className="login-form">
                                <label>
                                    <input
                                        type="integer"
                                        value={this.state.age}
                                        onChange={this.update('age')}
                                        placeholder="Age"
                                        // className={`${styles.addLogin} ${styles.loginInput}`}
                                        className="login-input"
                                    />
                                </label>
                            </div>
                           
                            <div className="session-form-add-space"></div>

                            <label>
                                <input
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                    className="login-input"
                                />
                            </label>

                            <div className="session-form-add-space"></div>

                            <div className="session-submit">
                                <input  type="submit" value={buttonMessage} />
                            </div>

                            <p className="session-or-message">OR</p>

                            <div className="session-submit-demo">
                                <button
                                    onClick={(e) => {
                                        this.demoUser(e);
                                    }}
                                >
                                    Demo User
                            </button>
                            </div>

                            {/* {this.renderErrors()} */}

                            <p className="session-terms-message">
                                By continuing, you agree to Pinterior's Terms of Service
                            </p>

                            <a
                                className="switch-session-form"
                                onClick={() => {
                                    this.props.switchForm();
                                }}
                            >
                                {renderMessage}
                            </a>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}
export default withRouter(SignUpForm);

// const SignUpForm = (props) => {
//     console.log(props)
//     return (
//         <h1>Login bitches</h1>
//     )
// }

// export default LoginForm;

// import React from 'react';