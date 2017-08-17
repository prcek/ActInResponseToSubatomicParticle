import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import FolderIcon from 'material-ui-icons/Folder';

const styleSheet = createStyleSheet(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
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
    constructor(props) {
        super(props);
        this.flat = flatIt(this.props.data);
    }

    renderItem(n) {
        return (
            <ListItem key={n.id} button={n.isLeaf} style={{paddingLeft: (n.level*32)+'px'}}>
                 <ListItemIcon>
                    <FolderIcon />
                </ListItemIcon>
                <ListItemText primary={n.name}/>
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
