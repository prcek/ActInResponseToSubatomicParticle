import React, { Component } from 'react';
import {Icon} from 'react-fa'
import './StatusIcon.css';

class StatusIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {status: null};
  }




  render() {
    return (
      <div className="StatusIcon">
        <Icon spin={this.props.status === "on"} className="ok" name="spinner" size="3x" />,
        status of {this.props.name} is {this.props.status}
      </div>
    );
  }
}

export default StatusIcon;
