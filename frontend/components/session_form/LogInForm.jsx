import React from 'react';
import { withRouter, Link} from 'react-router-dom';
import AuthBox from '../AuthBox';
import styles from './styles.scss';


class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.demoUser = this.demoUser.bind(this);
    }

    // redirectIfLoggedIn() {
    //     this.redirectIfLoggedIn();
    // }

    // redirectIfLoggedIn() {
    //     if (this.props.loggedIn) {
    //         this.props.router.push("/")
    //     }
    // }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
        // if (this.props.formType === "login") {
        //     this.setState({ description: "" });
        // }
        // this.props.processForm({ user });
    }

    demoUser(e) {
        e.preventDefault();
        this.props.loginDemoUser().then(this.props.closeModal);
    }

    navLink() {
        if (this.props.formType === "loginUser") {
            return (
                <div>Want to create an account?
                    <Link to="/signupUser"> sign up</Link>
                </div>
            );
        } else {
            return (
                <div>Already have an account?
                    <Link to="/loginUser"> log in</Link>
                </div>
            );
        }
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

        // let linkMessage;
        // let buttonMessage;
        // let loginFromClass = (this.props.formType === "login") ? "login-form-box login" : "login-form-box signup";
        // let emailPlaceholder = (this.props.formType === "login") ? "email" : "Add your email ";
        // let passwordPlaceholder = (this.props.formType === "login") ? "Password" : "Create a password ";

        // if (this.props.formType === 'login') {
        const goToLoginMessage = 'Not on Pinteriors yet? Sign Up';
        const buttonMessage = 'Continue';
        // } else {
        //     // linkMessage = 'Already a member? Log in';
        //     buttonMessage = 'Sign Up';
        // }

        return (
            <AuthBox
                linkTo={'/signup'}
                goToLoginMessage={goToLoginMessage}
                buttonMessage={buttonMessage}
                handleSubmit={this.handleSubmit}
                additionalClassName={styles.red}
                addLogin={styles.loginInput}
                formFields={
                    <>
                        <label>
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder="email"
                                // className="loginInput"
                                className={`${styles.addLogin} ${styles.loginInput}`}
                            />
                        </label>
                        <div className="session-form-add-space">
                        </div>
                        <label>
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                                // className="loginInput"
                                className={`${styles.addLogin} ${styles.loginInput}`}
                            />
                        </label>
                    </>
                }
            />
            // <div className="login-form-container">
            //     <form onSubmit={this.handleSubmit} className="login-form-box login">
            //         <h4 className="session-welcome">Welcoasdfme to Painteriors</h4>
            //         <h6 className="session-new-ideas">Find new ideas to try</h6>

            //         {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}

            //         <div className="login-form">
            //             <label>
            //                 <input type="text"
            //                     value={this.state.email}
            //                     onChange={this.update('email')}
            //                     placeholder="email"
            //                     className="login-input"
            //                 />
            //             </label>
            //             <div className="session-form-add-space">
            //             </div>

            //             <label>
            //                 <input type="password"
            //                     value={this.state.password}
            //                     onChange={this.update('password')}
            //                     placeholder="Password"
            //                     className="login-input"
            //                 />
            //             </label>

            //             <div className="session-submit">
            //                 <input type="submit" value={buttonMessage} />
            //             </div>

            //             <p className="session-or-message">OR</p>

            //             <div className="session-submit-demo">
            //                 <button onClick={(e) => { this.demoUser(e) }}>Demo User</button>
            //             </div>

            //             {this.renderErrors()}

            //             <p className="session-terms-message">By continuing, you agree to Painterior's Terms of Service</p>
            //             <Link to='/signup'>{linkMessage}</Link>
            //             {/* <a className="switch-session-form" onClick={() => { this.props.switchForm() }}>{renderMessage}</a> */}
            //             {/* <div className="switch-button">{this.navLink()}</div> */}
            //         </div>
            //     </form>
            // </div>
        );
    }
}

export default withRouter(LogInForm);