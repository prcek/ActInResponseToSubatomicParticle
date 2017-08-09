import React, { Component } from 'react';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import AccessAlarmIcon from 'material-ui-icons/AccessAlarm';
import StatusIcon from './StatusIcon';
import AppCommands from './AppCommands';
import CfgPanel from './CfgPanel';
import Tree from './Tree';
import DBSingleton from './libs/DBTest';
import Neo from './libs/Neo';
import RemoteApi from './libs/RemoteApi';
import isElectron from 'is-electron';
import Cfg from './libs/Cfg';
//import {Icon} from 'react-fa'
import FontAwesome from 'react-fontawesome';
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto'

class App extends Component {


  constructor(props) {
    super(props);

    this.cfg = new Cfg();
    this.isElectron = isElectron();
    console.log(this.isElectron);

    this.state = {date: new Date(), status:this.cfg.lasers, neo:[]};
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
    RemoteApi.updateNeo().then((x)=>{
      Neo.doFind().then((d)=>{this.setState({neo:d})});
    })
  }

  dbClean() {
    console.log(this,"dbClean");
    Neo.doClean().then((x)=>{
      Neo.doFind().then((d)=>{this.setState({neo:d})});
    })
  }


  handleTick() {
    this.setState({date: new Date()});
  }

  componentDidMount() {
    console.log(this,"componentDidMount");
    Neo.doFind().then((d)=>{this.setState({neo:d})});
   // this.timer.start();
  }

  render() {
    const neoItems = this.state.neo.map((i) =>
      <li key={i._id}>{i.title}</li>
    );
    return (
      <div className="App">
        
        <AppBar position="static">
          <Toolbar>
            <Button raised color="accent" onClick={(e)=>this.activateLaser(e)}>
              Activate Lasers
            </Button>
            <Button raised color="primary" onClick={(e)=>this.deactivateLaser(e)}>
              Deactivate Lasers
            </Button>
            <AppCommands onOpenCfg={(e)=>this.openCfg()} onDBTest={(e)=>this.dbTest(e)} onDBClean={(e)=>this.dbClean(e)} />
          </Toolbar>
        </AppBar>

        <Paper elevation={8}>
          <Typography type="headline">
            Hello Electron! {this.state.date.toLocaleTimeString()}
          </Typography>
        </Paper>

        <StatusIcon name="pepa" status={this.state.status}/>
        <Tree data={Neo.doFakeTree()}/>

        <CfgPanel cfg={this.cfg}/>

        
        <div>
          neo data:
          <ul>{neoItems}</ul>
        </div>
        <FontAwesome spin={this.state.status === "on"} className="text-danger" name="spinner" size="3x" />,
      </div>
    );
  }
}

export default App;
