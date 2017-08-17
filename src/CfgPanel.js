import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Input from 'material-ui/Input/Input';
//import InputLabel from 'material-ui/Input/InputLabel';
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid';

import { withStyles, createStyleSheet } from 'material-ui/styles';



const styleSheet = createStyleSheet(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
}));


class CfgPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {name: this.props.cfg.name, surname: this.props.cfg.surname};

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name + ' ' + this.state.surname );
        this.props.cfg.name = this.state.name;
        this.props.cfg.surname = this.state.surname;
        event.preventDefault();
    }


    render() {
        const classes = this.props.classes;
        return (
            <Grid container direction="row" align="baseline">
                <Grid item>
                    <div className={classes.container}>
                        <TextField
                            id="name"
                            label="Name"
                            className={classes.textField}
                            value={this.state.name}
                            onChange={event => this.setState({ name: event.target.value })}
                            margin="normal"
                        />
                        <TextField
                            id="surname"
                            label="Surname"
                            className={classes.textField}
                            value={this.state.surname}
                            onChange={event => this.setState({ surname: event.target.value })}
                            margin="normal"
                        />
                    </div>
                </Grid>
                <Grid item>
                    <Button raised> Save </Button>
                </Grid>
            </Grid>
        )
    }
}


CfgPanel.propTypes = {
    classes: PropTypes.object.isRequired,
    cfg: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(CfgPanel);