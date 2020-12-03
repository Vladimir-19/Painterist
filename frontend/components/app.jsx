import React from 'react';

// import { connect, Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'

import Modal from './modal/modal';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import NavBar from '../components/navbar/navbar_container'
import CreatePinFormContainer from "./pin/form/create_pin_form_container";
import PinShowContainer from "./pin/pin_show_container";
import EditProfileFormContainer from "./profile/edit_profile_form_container";
import ProfileShowContainer from "./profile/profile_show_container";
import BoardShowContainer from "./board/board_show_container";
import HomeContainer from "./home/home_container";
// import AuthBox from './AuthBox/AuthBox'
import Footer from './footer/footer'
import SplashContainer from '../components/splash_page/splash_container'

const DummyComponent = () => <h2>I'm logged in</h2>

const App = () => (
    <div className="app-component">
        {/* loading */}
        <Modal />
        <header>
            <h1>hello</h1>
            {/* <ProtectedRoute path="/" component={NavBar} /> */}
            <NavBar/>
        </header>
        {/* <h1>i'm from app.jsx</h1> */}
        <Switch>
            {/* <ProtectedRoute exact path="/pin-builder" component={CreatePinFormContainer}/>
            <ProtectedRoute exact path="/pin/:pinId" component={PinShowContainer}/>
            <ProtectedRoute exact path="/settings" component={EditProfileFormContainer}/>
            <ProtectedRoute exact path="/following" component={HomeContainer} />
            <ProtectedRoute exact path="/:username/pins" component={ProfileShowContainer} />
            <ProtectedRoute exact path="/:username/boards" component={ProfileShowContainer} />
            <ProtectedRoute exact path="/:username" component={ProfileShowContainer} />
            <ProtectedRoute exact path="/:username/:boardTitle" component={BoardShowContainer}/>
            {/* <Route exact path="/" component={SplashContainer} /> */}
            {/* <Route exact path="/" component={HomeContainer} /> */} */}
        </Switch>
            
        {/* <Switch>
            <Route path="/login">
                <h2>one of us</h2>
                <LogInFormContainer/>
            </Route>
            <Route path="/signup" SignUpFormContainer>
                <h2>stranger</h2>
                <SignUpFormContainer/> 
                <Route exact path="/" component={SplashContainer} />
            </Route>
            <AuthRoute path="/" component={DummyComponent} />
            <Modal />
        </Switch> */}
        <footer><Footer /></footer>  
    </div>
);
export default App;

// const App = (props) => {
//     const isLoggedIn = localStorage.getItem('token')
//     console.log(props)
//     if(!isLoggedIn) {
//         // dispatchEvent(showModal)
//         console.log("dispatch event to show modal");
//         props.dispModal()
//     }
    
//     return (
//         <div className="app-component">
       
//             {!props.showTheModal ? 
//                 (<header>
//                     <h1>i'm from app.jsx</h1>
//                 </header>) :
//                 (<Switch>
//                     <SignUpFormContainer/>
//                     <LogInFormContainer />
//                 </Switch>)
// }
//         </div>
//     )
// };

// const mapStateToProps = (state) => {
//     console.log(state, state.ui.modal, state.ui)
//      return {

//         showTheModal: state.ui.modal 
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         dispModal: () => {
//             dispatch(openModal('login'))
//             console.log(openModal('login'))
//         }
//     };
// }


// export default connect(mapStateToProps, mapDispatchToProps)(App);




// import React from 'react';
// import { Provider } from 'react-redux';
// import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

// import Modal from './modal/modal';
// import SplashContainer from '../components/splash_page/splash_container';
// import NavBar from '../components/navbar/navbar';


// const App = () => (
//     <div className="app-component">
//         {/* <Modal /> */}
//         <header>
//             {/* <NavBar /> */}
//             {/* <Link to="/" className="header-link">
//         </Link> */}
//             <h1>i'm from app.jsx</h1>
//         </header>
//         <Switch>
//             <Route exact path="/" component={SplashContainer} />
//         </Switch>
//     </div>
// );

