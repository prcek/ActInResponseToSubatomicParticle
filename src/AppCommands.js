import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
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

    renderButton(name,onClick) {
        return (
            <Grid item>
                <Button raised onClick={onClick}>
                    {name}
                </Button>  
            </Grid>
        );
    }

    render() {
        return (
            <Grid container justify="center" spacing={8}>
                {this.renderButton("DBTest",(e)=>this.callDBTest(e))}
                {this.renderButton("DBClean",(e)=>this.props.onDBClean(e))}
                {this.renderButton("openCfg",(e)=>this.props.onOpenCfg(e))}
                {this.renderButton("toggleFullSceen",(e)=>ECom.toggleFullScreen())}
                {this.renderButton("openDevTools",(e)=>ECom.openDevTools())}
                {this.renderButton("appQuit",(e)=>ECom.appQuit())}
            </Grid>
        )
    };
}

AppCommands.propTypes = {
    onOpenCfg: PropTypes.func.isRequired,
    onDBTest: PropTypes.func,
    onDBClean: PropTypes.func.isRequired 
};


export default AppCommands;