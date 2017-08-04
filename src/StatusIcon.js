import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './StatusIcon.css';

class StatusIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {status: null};
  }




  render() {
    return (
      <div className="StatusIcon">
        <FontAwesome spin={this.props.status === "on"} className="ok" name="spinner" size="3x" />,
        status of {this.props.name} is {this.props.status}
      </div>
    );
  }
}

export default StatusIcon;
