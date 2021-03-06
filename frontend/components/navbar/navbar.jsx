import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        // this.handleLogout = this.handleLogout.bind(this);
        // this.state = {
        //     searchWord: ""
        // };

        // this.logEmOut = this.logEmOut.bind(this);
        // this.currentUser = this.props.currentUser;
    }

    // componentWillReceiveProps(nextProps) {
    //     if (!nextProps.currentUser) {
    //         this.props.router.push("/login");
    //     }
    // }

    // componentDidMount() {
    //     // this.props.fetchAllUaers();
    //     $('.search-bar').on('keyup', e => this.onKeyUp(e))
    // }
    // omKeyUp(e) {
    //     e.preventDefault();
    //     if (e.key !== "Enter") {
    //         this.setState({ searchWord: e.currentTarget.value });
    //         this.props.fetchSearchPins(this.state.searchWord);
    //         this.props.router.push('/search');
    //     } else {
    //         $('.search-bar').val('');
    //         this.setState({ searchWord: "" });
    //     }
    // }
    // componentWillUnmount() {
    //     location.reload(falce);
    // }

    // componentDidMount() {
    //     this.props.fetchAllUsers();
    // }

    // componentWillUnmount() {
    //     location.reload(true);
    // }

    handleLogout() {
        this.props.logout() //.then(this.props.openModal('login'));
        // error with logout ?? maybe

        // this.props.logout().then(this.props.openModal({ modal: 'login' }));
    }
    

    render() {
        const { currentUser, openModal, closeModal } = this.props;
        
        const profilePhoto = ((currentUser) && (currentUser.photoUrl)) ? (
        // const profilePhoto = (currentUser.photo) ? (
            <img className="nav-profile-image" src={currentUser.photoUrl} />
        ) : (
                <i className="far fa-user-circle" id="profile-icon"
                 style={{ "fontSize": "23px", "color": "#8e8e8e"}}></i>
            );

        if (currentUser) {
            return (
                <div className="nav-container">
                    <ul className="nav-ul">
                        <li className="nav-lis">
                            <a key="1" className="nav-link-home-logo" href="#"></a>
                            <a key="2" className="nav-link-home" href="#">
                                Home
                            </a>
                                <NavLink to="/following" className="nav-bar-link">
                                        <div className="nav-link-home">
                                            Following
                                        </div>
                                </NavLink>
                            {/* <div className="nav-bar-button" id="following">
                                <NavLink to="/following" className="nav-bar-link">
                                    <div className="icon-container-shadow">
                                        <div className="icon-container">
                                            <i className="fas fa-users" id="following-icon"></i>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                             */}
                            <div className="nav-bar-search-container" id="search">
                                {/* SearchContainer */}
                                <h6>i'm a search bar insode of nav bar</h6>
                            </div>
                            

                            <div className='icon-wrapper'>
                                <Link to={`/${currentUser.email}`} className="nav-bar-link">
                                {/* <Link to={`/users/${currentUser.id}`} key="28" href="#" className="nav-bar-link"> */}
                                    <div className="icon-container-shadow">
                                        <div className="icon-container">
                                            <div id="profile-icon-frame">
                                                {profilePhoto}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            
                            <div className="nav-bar-button" id="github">
                                <a href="https://github.com/Vladimir-19/Painterist" target="_blank" className="nav-bar-link">
                                    <div className="icon-container-shadow">
                                        <div className="icon-container">
                                            <i className="fab fa-github-square" id="networking-icon"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="nav-bar-button" id="linkedin">
                                <a href="https://github.com/Vladimir-19" target="_blank" className="nav-bar-link">
                                    <div className="icon-container-shadow">
                                        <div className="icon-container">
                                            <i className="fab fa-linkedin" id="networking-icon"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>


                            <div className="nav-bar-button" id="options">
                                {/* <h3>Log Out</h3> */}
                                {/* <Link to="/" className="nav-bar-link" onClick={this.handleLogout}>
                                    <div className="icon-container-shadow">
                                        <div className="icon-container">
                                            <i className="fas fa-sign-out-alt"></i>

                                        </div>
                                    </div>
                                </Link> */}
                                
                                <Link to="/" className="fas fa-sign-out-alt fa-2x" onClick={() => { this.handleLogout() }}>
                                {/* <Link to="/" className="fas fa-sign-out-alt fa-2x" onClick={() => { logout }}> */}

                                    {/* <div className="icon-container-shadow">
                                        <div className="icon-container">
                                            <i className="fas fa-sign-out-alt"></i>

                                        </div>
                                    </div> */}
                                </Link>
                                
                                {/* <button onClick={() => { this.handleLogout() }}>logout</button> */}

                            </div>
                                
                        </li>
                    </ul>
                    {/* <div>
                        <ul>
                            {HomeNavItems.map((item, idx) => {
                                return (
                                    <li key={idx}>
                                        <a className={item.cName} href={item.url}>{item.title}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div> */}
                </div>
            )
        } else {
            return null;
        }
    }
}

// const mapStateToProps = state => ({
//     currentUser: state.entities.users[state.session.id]
// });

// THIS
        // const mapStateToProps = ({ session, entities }) => ({
        //     currentUser: session && session.id && entities.users[session.id]
        // });

        // const mapDispatchToProps = dispatch => {
        //     return {
        //         openModal: (modal) => dispatch(openModal({ modal: 'login' })),
        //         closeModal: () => dispatch(closeModal()),
        //         logout: () => dispatch(logoutUser()),
        //     };
        // };

        // export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
export default NavBar;
