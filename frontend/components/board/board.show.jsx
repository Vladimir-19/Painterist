import React from "react";
import BoardShowNavBar from './board_show_nav_boar';
import PinIndexContainer from "../pin/pin_index_container";
import { Component } from "react";

export default class BoardShow extends Component {
    constructor(props) {
        super(props);

        this.openEditBoard = this.openEditBoard.bind(this);
    }

    componentDidMount() {
        this.props.fetchSingleUser(this.props.currentUser.id)
    }

    openEditBoard(e) {
        e.preventDefault();
        this.props.openEditBoard(this.props.board.id)
    }

    render() {
        const {currentUser, board, pins, boardsPins} = this.props;
        const secretIcon = (board.secret) ? (
            <div className="board-show visibility">
                <i class="fas fa-lock" id="lock-icon"></i>
            </div>
        ) : (null);

        let boardsPins = boardsPins
            .filter(boardPin => board.id === boardPin.boardId)
            .map(boardPin => pins[boardPin.pinId])
            .filter(boardPin => boardPin !== undefined);

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
                                    ·  8 followers
                            </div>
                            </div>
                        </div>
                        <div className="board-show description">
                            {board.description}
                        </div>
                    </div>
                </div>
                <div className="board-show pin-feed">
                    <PinIndexContainer
                        pins={boardPins}
                        page="profile"
                    />
                </div>
            </div>
        )
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