import React, { Component } from 'react';
import StatusIcon from './StatusIcon';
import AppCommands from './AppCommands';
import DBSingleton from './libs/DBTest';
//import ECom from './libs/ECom';
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

  openCfg() {
    console.log(this,"openCfg");
  }
  
  dbTest() {
    console.log(this,"dbTest");
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
          <AppCommands onOpenCfg={(e)=>this.openCfg()} onDBTest={(e)=>this.dbTest(e)} />        
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
        
        <FontAwesome spin={this.state.status === "on"} className="text-danger" name="spinner" size="3x" />,
      </div>
    );
  }
}

export default App;
