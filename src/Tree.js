import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TreeNode extends Component {
    constructor(props) {
        super(props);
    }

    renderSelf() {
        return (
            <div> {this.props.data.name}, level {this.props.level} </div>
        )
    }

    renderChild(n,l) {
        return (
            <li> <TreeNode data={n} level={l}/> </li>
        )
    }
    
    render() {
        const me = this.renderSelf();
        const nodes  = this.props.data.nodes.map((n)=>this.renderChild(n,this.props.level+1));
        return (
            <div> {me} <ul>{nodes}</ul> </div>
        )
    }

}

class Tree extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TreeNode data={this.props.data} level={0}/>
        )
    }
}


export default Tree;