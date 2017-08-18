import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import FolderIcon from 'material-ui-icons/Folder';
import Checkbox from 'material-ui/Checkbox';

const styleSheet = createStyleSheet(theme => ({
  root: {
    width: '100%',
    maxWidth: 560,
    background: theme.palette.background.paper,
  },
}));


function flatIt(nodes,level=0,parent) {
    var childs = []
    for(var ul of nodes.nodes) {
        childs.push(...flatIt(ul,level+1,nodes))
    }
    const isLeaf = (childs.length === 0)
    if (parent) {
        return [{ id: nodes.id, name: nodes.name, isLeaf: isLeaf, level:level, parentId:parent.id}, ...childs]
    } else {
        return [{ id: nodes.id, name: nodes.name, isLeaf: isLeaf, level:level, parentId:null}, ...childs]
    }
}

class Tree extends Component {

    state = {
        checked: [],
        toggled: []
    }
    constructor(props) {
        super(props);
        this.flat = flatIt(this.props.data);
    }

    handleToggle(event,n) {
        console.log("handleToggle",n.id);

        const { toggled } = this.state;
        const currentIndex = toggled.indexOf(n.id);
        const newToggled = [...toggled];

        if (currentIndex === -1) {
            newToggled.push(n.id);
        } else {
            newToggled.splice(currentIndex, 1);
        }

        this.setState({
            toggled: newToggled,
        });
    }

    handleCheck(event,n) {
        console.log("handleCheck",n.id);

        const { checked } = this.state;
        const currentIndex = checked.indexOf(n.id);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(n.id);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });

    }

    renderItem(n) {
        return (
            <ListItem key={n.id} button dense onClick={event => this.handleToggle(event, n)} style={{paddingLeft: (n.level*32)+'px'}}>
                 <ListItemIcon>
                    <FolderIcon />
                </ListItemIcon>
                <ListItemText primary={n.name} secondary={n.id}/>
                <ListItemSecondaryAction>
                    <Checkbox
                        onClick={event => this.handleCheck(event, n)}
                        checked={this.state.checked.indexOf(n.id) !== -1}
                        tabIndex="-1"
                    />
                </ListItemSecondaryAction>
            </ListItem>
        );
    }

    render() {
        const classes = this.props.classes;
        const nodes  = this.flat.map((n)=>this.renderItem(n));
        return (
            <div className={classes.root}>
                <List >
                    {nodes}
                </List>
            </div>
        )
    }
}


Tree.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Tree);
