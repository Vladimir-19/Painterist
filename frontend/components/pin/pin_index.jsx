import React from "react";
import PinIndexItem from "./pin_index_item";

const shuffle = require("shuffle-array");
const masonryEvents = ["load", "resize"];

class PinIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // pins: [],
            pinSets: [],
            pinSetIdx: 0,
            loadedPins: []
        };

        this.splitPins = this.splitPins.bind(this);
    }

    splitPins(pins) {
        const arr = [];
        for (let i = 0; i < pins.length; i += 30) {
            arr.push(pins.slice(i, i + 30));
        }
        return arr;
    }
    render() {
        const { page, pins, currentUserId, user, openEditPin, openNewBoardPin } = this.props;
        // debugger
        const pinIndexItems = pins.map(pin => (
            <PinIndexItem
                key={pin.id}
                page={page}
                pin={pin}
                userId={currentUserId}
                user={user}
                openEditPin={openEditPin}
                openNewBoardPin={openNewBoardPin}
            />
        ));

        return (
            <div className="pin-index container">
                <div className="pin-index" id="grid-container">
                    <div className="pin-index masonry" id="grid">
                        {pinIndexItems}
                    </div>
                </div>
            </div>
        );
    };
};

export default PinIndex;