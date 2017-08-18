import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';
import { withStyles, createStyleSheet } from 'material-ui/styles';



const styleSheet = createStyleSheet(theme => ({
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
}));

class CfgDialog extends Component {

    constructor(props) {
        super(props);
        this.state = { name: this.props.cfg.name, surname: this.props.cfg.surname};
    }

    handleDialogEnter() {
        console.log("handleDialogEnter");
    }
    handleDialogExit() {
        console.log("handleDialogExit");
    }

    render() {
        const { classes } = this.props;
        return (
            <Dialog
            fullScreen
            onEnter={this.handleDialogEnter}
            onExit={this.handleDialogExit}
            open={this.props.open}
            onRequestClose={this.props.onRequestClose}
            transition={<Slide direction="up" />}
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                    <IconButton color="contrast" onClick={this.props.onRequestClose} aria-label="Close">
                        <CloseIcon />
                    </IconButton>
                    <Typography type="title" color="inherit" className={classes.flex}>
                        Configuration
                    </Typography>
                    <Button color="contrast" onClick={this.props.onRequestClose}>
                        save
                    </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem button>
                    <ListItemText primary="Phone ringtone" secondary="Titania" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                    <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                    </ListItem>
                </List>
            </Dialog>
    );
  }
}

CfgDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  cfg: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired
};

export default withStyles(styleSheet)(CfgDialog);