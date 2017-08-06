import React, { Component } from 'react';
import StatusIcon from './StatusIcon';
import DBSingleton from './libs/DBTest';
import testipc from './libs/ECom';
import isElectron from 'is-electron';
import Cfg from './libs/Cfg';
//import {Icon} from 'react-fa'
import FontAwesome from 'react-fontawesome';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  constructor(props) {
    super(props);

    this.cfg = new Cfg();
    this.isElectron = isElectron();
    console.log(this.isElectron);

    this.state = {date: new Date(), status:this.cfg.lasers};
    this.timer = DBSingleton.getInstance();
    this.timer.setCallback(()=>this.handleTick());


  }

  activateLaser(e) {
    console.log(this,"activateLaser")
    this.cfg.lasers="on";
    this.timer.start();
    this.setState({status:"on"});
  }

  deactivateLaser(e) {
    console.log(this,"deactivateLaser")
    this.cfg.lasers="off";
    this.timer.stop();
    this.setState({status:"off"});
  }

  ipcTest(e) {
    console.log(this,"ipc test") 
    testipc();
  }


  handleTick() {
    this.setState({date: new Date()});
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
          <h2>Welcome to React/Electron {this.isElectron?"yes":"no"}</h2>
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

        <button onClick={(e)=>this.ipcTest(e)}>
          ipc test
        </button>
        
        <FontAwesome name='rocket' />
        <FontAwesome spin={this.state.status === "on"} className="text-danger" name="spinner" size="3x" />,
      </div>
    );
  }
}

export default App;
