import React, { Component } from 'react';



class StatusIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {status: null};
  }



  render() {
    return (
      <div className="StatusIcon">
        status of {this.props.name} is {this.props.status}
      </div>
    );
  }
}

export default StatusIcon;
