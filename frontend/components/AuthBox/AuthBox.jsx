import React from 'react';
import styles from './styles.scss';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import SignUpFormContainer from '../session_form/signup_form_container';
import LogInFormContainer from '../session_form/login_form_container';

const AuthBox = (props) => {
    const additionalClassName = props.additionalClassName ? props.additionalClassName : ''
    const addsessionSubmit = props.addsessionSubmit ? props.addsessionSubmit : ''
    const addLogin = props.addLogin ? props.addLogin : ""


    //     < Switch >
            
            
    //         <Route path="/signup" SignUpFormContainer>
    //             <h2>stranger</h2>
    //             <SignUpFormContainer/>
    //             {/* <Route exact path="/" component={SplashContainer} /> */}
    //         </Route>
    // {/* <AuthRoute path="/" component={DummyComponent} /> */ }
    //     </Switch >

    return (
        <div className={`${styles.loginFormContainer} ${additionalClassName}`} >
           
                <form
                    onSubmit={props.handleSubmit}
                    className="login-form-box login"
                >
                <h4 className="session-welcome">Welcome to Painteriors</h4>
                <h6 className="session-new-ideas">Find new ideas to try</h6>

                    <div >
                    
                        {props.formFields}
                    
                        <button className={`${styles.sessionSubmit} ${addsessionSubmit}`} type="submit">Sumit</button>
                        {/* </div> */}

                         <p className={`${styles.sessionOrMessage} ${addsessionSubmit}`}>OR</p>

                    
                            <button
                            // onClick={(e) => { this.demoUser(e) }}
                            className={`${styles.sessionSubmitDemo} ${addsessionSubmit}`} type='submit'>
                                Demo User
                            </button>
                        
                    <p className="session-terms-message">By continuing, you agree to Painterior's Terms of Service</p>
                    {/* <Link className={styles.linkTo} to={props.linkTo}>{props.goToLoginMessage} </Link> */}
                        {/* <a className="switch-session-form" onClick={() => { this.props.switchForm() }}>{renderMessage}</a> */}
                        {/* <div className="switch-button">{this.navLink()}</div> */}
                    </div>
                </form>
            
        </div>
    )
}

export default AuthBox;