import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from 'material-ui/Input/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid';

import FormControlLabel from 'material-ui/Form/FormControlLabel';
import FormControl from 'material-ui/Form/FormControl';
import FormLabel from 'material-ui/Form/FormLabel';

class CfgPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {name: this.props.cfg.name, surname: this.props.cfg.surname};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name + ' ' + this.state.surname );
        this.props.cfg.name = this.state.name;
        this.props.cfg.surname = this.state.surname;
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                    <span>
                    <FormControl margin="normal" required="true" error="true">
                        <InputLabel>
                            Name
                        </InputLabel>
                        <Input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </FormControl>
                    </span>
                    <FormControl margin="normal">
                        <InputLabel>
                        Surname
                        </InputLabel>
                        <Input type="text" name="surname" value={this.state.surname} onChange={this.handleChange} />
                    </FormControl>
                    <Button  type="submit"> Save </Button>
            </form>
        )
    }
}

CfgPanel.propTypes = {
    cfg: PropTypes.object.isRequired
};

export default CfgPanel;