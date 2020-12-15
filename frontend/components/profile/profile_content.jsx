// import React from "react";
// import { Route, Link, NavLink } from "react-router-dom";

// import ProfileSwitches from "./profile_switches";
// import BoardIndexContainer from "../board/board_index_container";
// import PinIndexContainer from "../pin/pin_index_container";
// import { Redirect } from 'react-router-dom';


// class ProfileContent extends React.Component {
//     // probobly DO NOT NEED this (only in case of error “Cannot read property 'id' of undefined”)
//     // static defaultProps = { // <-- DEFAULT PROPS
//     //     pins: []       // undefined gets converted to array,render won't trigger error
//     // }

//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedSwitch: (location.hash.endsWith('pins')) ? 1 : 0,
//              pins: '',
//             loading: true,
//             openBoard: false,
//             openBoardId: null
//         };

//         this.selectSwitch = this.selectSwitch.bind(this);
//     }

//     selectSwitch(num) {
//         this.setState({ selectedSwitch: num });
//     }

//     render() {
//         const { user, boards, pins, openModal, closeModal } = this.props;
        
//         if (this.state.openBoard == true && this.state.openBoardId) {
//             return <Redirect to={`/boards/${this.state.openBoardId}`} />
//         }

//         const userBoards = boards.filter(board => board.userId === user.id);
//         const userPins = pins.filter(pin => pin.userId === user.id);

//         const contentTabs = [
//             <BoardIndexContainer boards={userBoards} page='profile' />,
//             <PinIndexContainer pins={userPins} page='profile' />
//         ];
//         const selectedTab = contentTabs[this.state.selectedSwitch];
//         const pinCount = (this.state.selectedSwitch === 1) ? (
//             <div className="profile-show pin-count-container">
//                 <div className="profile-show pin-count">
//                     <span className="profile-show number">{userPins.length} </span>
//                     Pins (from profile_content)
//                  </div>
//             </div>
//         ) : null;

//         const boardCount = (this.state.selectedSwitch === 1) ? (
//             <div className="profile-show pin-count-container">
//                 <div className="profile-show pin-count">
//                     <span className="profile-show number">{Board.length} </span>
//                     Boards (from profile_content)
//                  </div>
//             </div>
//         ) : null;

//         const currentUserBoards = boards.filter(boards => (boards.userId === currentUser.id))

//         // return (
//         //     <div id="profile-content">
//         //         <ul></ul>
//         //         <div id="profile-switches-wrapper">
//         //             {currentUserBoards}}
//         //             <ProfileSwitches
//         //                 user={user}
//         //                 selectedSwitch={this.state.selectedSwitch}
//         //                 onSwitchClick={this.selectSwitch}
//         //                 tabs={contentTabs}
//         //             />
//         //             {pinCount}
//         //             {boardCount}
//         //         </div>
//         //         <div id="profile-tab-wrapper">
//         //             {selectedTab}
//         //         </div>
//         //     </div>
//         // )
//         if (boards.length > 0 && this.state.pins === 'fetched') {
//             return (
//                 <>
//                     <div id='user-header'>
//                         <div id='user-photo'>
//                             {profilePic}
//                         </div>
//                         <div id='user-text'>
//                             {name}
//                         </div>
//                     </div>
//                     <ul id='board-list'>
//                         {currentUserBoards.map((board, idx) => {
//                             let pinArr;
//                             let allPins;
//                             let imageTag =
//                                 <div id='pin-image-wrapper1'>
//                                     <div className='pin-noimg'></div>
//                                 </div>
//                             if (board.pinIds.length > 0) {
//                                 pinArr = board.pinIds.map(pinId => {
//                                     return pins[pinId]
//                                 })
//                                 if (pinArr.length > 0) {
//                                     allPins = pinArr.map((pin, idx) => {
//                                         if (idx < 3 && pin != 'undefined') {
//                                             return <img id='pin-image1' src={pin.photoUrl} />
//                                         }
//                                     })
//                                     imageTag =
//                                         <div id='pin-image-wrapper'>
//                                             {allPins}
//                                         </div>
//                                 }
//                             }
//                             return (
//                                 <div value={board.id} id='board-show-list' >
//                                     {imageTag}
//                                     <div id='board-text'>
//                                         <li>{board.title}</li>
//                                         <p>{board.pinIds.length} Pins</p>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                         <div className='edit-create-button-wrapper'>
//                             <button
//                                 className="plus-board"
//                             >
//                                 <i className="fas fa-plus"></i>
//                             </button>
//                             <button className="plus-board"
//                                 >
//                                 <i className="fas fa-pencil-alt"></i>
//                             </button>
//                         </div>
//                     </ul>
//                 </>
//             )
//         } else {
//             return (
//                 <>
//                     <div id='user-header'>
//                         <div id='user-photo'>
//                             {profilePic}
//                         </div>
//                         <div id='user-text'>
//                             {name}
//                         </div>
//                     </div>
//                     <p>You don't have any boards yet!</p>
//                     <div className='edit-create-button-wrapper'>
//                         <button
//                             className="plus-board"
//                         >
//                             <i className="fas fa-plus"></i>
//                         </button>
//                         <button className="plus-board"
//                             >
//                             <i className="fas fa-pencil-alt"></i>
//                         </button>
//                     </div>
//                 </>
//             );
//         }
//     }
// }
// //     }
// // }

// export default ProfileContent;

// ProfileContent.defaultProps = {
//     user: {
//         email: '',
//         firstName: '',
//         lastName: '',
//     }
// }
import React from "react";
import { Route, Link, NavLink } from "react-router-dom";

import ProfileSwitches from "./profile_switches";
import BoardIndexContainer from "../board/board_index_container";
import PinIndexContainer from "../pin/pin_index_container";

class ProfileContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSwitch: (location.hash.endsWith('pins')) ? 1 : 0
        };

        this.selectSwitch = this.selectSwitch.bind(this);
    }

            // componentDidMount() {
            //     this.props.fetchBoards()
            //     this.props.fetchPins().then(() => this.setState({ pins: 'fetched', loading: false }))
            // }

    selectSwitch(num) {
        this.setState({ selectedSwitch: num });
    }

    render() {
        const { user, boards, pins, openModal, closeModal } = this.props;

        const userBoards = boards.filter(board => board.userId === user.id);
        const userPins = pins.filter(pin => pin.userId === user.id);

        const contentTabs = [
            <BoardIndexContainer user={user} boards={userBoards} />,
            <PinIndexContainer pins={userPins} page='profile' />
        ];
        const selectedTab = contentTabs[this.state.selectedSwitch];
        const pinCount = (this.state.selectedSwitch === 1) ? (
            <div className="profile-show pin-count-container">
                <div className="profile-show pin-count">
                    <span className="profile-show number">{userPins.length} </span>Pins
        </div>
            </div>
        ) : null;

        return (
            <div id="profile-content">
                <div id="profile-switches-wrapper">
                    <ProfileSwitches
                        user={user}
                        selectedSwitch={this.state.selectedSwitch}
                        onSwitchClick={this.selectSwitch}
                        tabs={contentTabs}
                    />
                    {pinCount}
                </div>
                <div id="profile-tab-wrapper">
                    {selectedTab}
                </div>
            </div>
        )
    }
}

export default ProfileContent;

ProfileContent.defaultProps = {
    user: {
        username: '',
        firstName: '',
        lastName: ''
    }
}