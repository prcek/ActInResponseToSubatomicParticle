import React, { Component } from 'react';
import StatusIcon from './StatusIcon';
import DBSingleton from './libs/DBTest';
import {Icon} from 'react-fa'
import logo from './logo.svg';
import './App.css';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {date: new Date(), status:"jedna"};
    this.timer = DBSingleton.getInstance();
    this.timer.setCallback(()=>this.handleTick());


  }

  activateLaser(e) {
    console.log(this,"activateLaser")
    this.timer.start();
  }

  deactivateLaser(e) {
    console.log(this,"deactivateLaser")
    this.timer.stop();
  }


  handleTick() {
    this.setState({date: new Date(),status:"dva"});
  }

  componentDidMount() {
    console.log(this,"componentDidMount");
   // this.timer.start();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React/Electron</h2>
        </div>
        <p className="App-intro">
          Hello Electron! {this.state.date.toLocaleTimeString()}
        </p>
        <StatusIcon name="pepa" status={this.state.status}/>
        <button onClick={(e)=>this.activateLaser(e)}>
          Activate Lasers
        </button>
        <button onClick={(e)=>this.deactivateLaser(e)}>
          Deactivate Lasers
        </button>
        <Icon spin name="spinner" size="3x" />,
      </div>
    );
  }
}

export default App;
