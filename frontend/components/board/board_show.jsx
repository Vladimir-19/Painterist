import React from 'react';
import { Link } from 'react-router-dom';

import BoardShowNavBar from './board_show_nav_bar';
import PinIndexContainer from "../pin/pin_index_container";

import BoardIndexItem from "./board_index_item"

export default class BoardShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetched: false,
            openPin: false,
            openPinId: null
        }

        this.openEditBoard = this.openEditBoard.bind(this);
    }

    componentDidMount() {
        this.props.fetchSingleUser(this.props.currentUser.id);
    }

    openEditBoard(e) {
        e.preventDefault();
        this.props.openEditBoard(this.props.board.id)
    }

    render() {
        const { currentUser, board, pins } = this.props;

        if (board.pinIds.length == 0) {
            return (
                <div>
                    <p id='no-pins-yet'>this board has no pins yet!</p>
                    <Link className="back-arrow-board" to={`/users/${currentUser.id}`}>
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                </div>
            )
        }
        let pinArr = [];
        if (this.state.fetched == true && board.pinIds.length > 0) {
            board.pinIds.map(pinId => {
                if (pinId != 'undefined') {
                    pinArr.push(pins[pinId])
                }
            })
        }
        const secretIcon = (board.secret) ? (
            <div className="board-show visibility">
                <i className="fas fa-lock board-show" id="lock-icon"></i>
                in board show jsx
            </div>
        ) : (
                null
            );

        let boardPins = boardsPins
            .filter(boardPin => board.id === boardPin.boardId)
            .map(boardPin => pins[boardPin.pinId])
            .filter(boardPin => boardPin !== undefined);

        if (pinArr.length > 0) {
        return (
            <div className="board-show container">
                <div className="board-show header">
                    <div className="board-show navbar-container">
                        <BoardShowNavBar
                            openEditBoard={this.openEditBoard}
                            board={board}
                            user={currentUser}
                        />
                    </div>
                    <div className="board-show info">
                        <div className="board-show main-info">
                            <div className="board-show title">
                                {board.title}
                            </div>
                            <div className="board-show stats">
                                {secretIcon}
                                <div className="board-show count pin">
                                    {`${board.pinIds.length} pins`}
                                </div>
                                <div className="board-show count follower">
                                    ·  7 followers
                </div>
                            </div>
                        </div>
                        <div className="board-show description">
                            {board.description}
                        </div>
                    </div>
                </div>
                <div className="board-show pin-feed">
                    {/* <PinIndexContainer
                        pins={boardPins}
                        page="profile"
                    /> */}
                    <ul id='board-list-wrap'>
                        {pinArr.map((pin) => (
                            <BoardIndexItem
                                // pin={pin}
                                // key={pin.id}
                                pins={boardPins}
                                page="profile"
                            />
                        ))}
                    </ul>
                </div>
            </div>
        )
        } else {<p>this board has no pins yet!</p>}
    }
}

BoardShow.defaultProps = {
    board: {
        id: 0,
        title: 'boardman',
        description: 'boardman gets paid',
        secret: false,
        pinIds: []
    }
}
