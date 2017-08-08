import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                    Surname:
                    <input type="text" name="surname" value={this.state.surname} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Save" />
            </form>
        )
    }
}

CfgPanel.propTypes = {
    cfg: PropTypes.object.isRequired
};

export default CfgPanel;