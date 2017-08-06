import React, { Component } from 'react';

import ECom from './libs/ECom';

class AppCommands extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={(e)=>ECom.toggleFullScreen()}>
                toggleFullSceen
                </button>
                <button onClick={(e)=>ECom.openDevTools()}>
                openDevTools
                </button>
                <button onClick={(e)=>ECom.appQuit()}>
                appQuit
                </button>
            </div>
        )
    };
}

export default AppCommands;