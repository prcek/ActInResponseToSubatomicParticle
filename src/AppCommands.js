import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ECom from './libs/ECom';

class AppCommands extends Component {

    callDBTest(e) {
        if (this.props.onDBTest) {
            this.props.onDBTest(e);
        } else {
            console.log("no onDBTest");
        }
    }

    render() {
        return (
            <div>
                <button onClick={(e)=>this.callDBTest(e)}>
                DBTest
                </button>
                <button onClick={(e)=>this.props.onOpenCfg(e)}>
                openCfg
                </button>
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

AppCommands.propTypes = {
    onOpenCfg: PropTypes.func.isRequired,
    onDBTest: PropTypes.func
};


export default AppCommands;