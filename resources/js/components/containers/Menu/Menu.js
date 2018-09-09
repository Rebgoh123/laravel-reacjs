import React from 'react';
import APPCONFIG from  "../../../constants/config";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import { DrawerNavigation } from './DrawerNavigation';
import {userActions} from "../../../actions/user.actions";

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import AccountCircle from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        position: 'absolute',

    },
    appBarStyle:{
        background: 'transparent', boxShadow: 'none',fontWeight:'normal',
    },
    flex: {
        flexGrow: 1,
        color:'white'
    },
    flexPrivate: {
        flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        height: '100vh',
        backgroundColor: theme.palette.secondary.main,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },

});

class MenuAppBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mobileOpen: false,
            user: (!!(props.user)?props.user:false),
            anchorEl: null,
        };
    }

    static getDerivedStateFromProps(props, current_state) {
        // console.log(current_state.user  + " : " + JSON.stringify(props.user) + " RESULT " +   (!!(props.user)?true:false))
        if (current_state.user !== props.user) {

            return {
                user: (!!(props.user)?props.user:false),

            }
        }
        // Return null to indicate no change to state.
        return null;
    }

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleLogout = () => {
        const {dispatch} = this.props;
        dispatch(userActions.logout(this.state.user))
    };

    render() {

        const { classes, theme } = this.props;
        const { user, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <List><ListItem style={{paddingTop:'10px'}}>
                    <ListItemText disableTypography primary="Navigation" />
                </ListItem>{DrawerNavigation}</List>
            </div>
        );

        return (
            <div>
                {!user ? (
                    <div>
                        <AppBar className={classes.appBarStyle} >
                            <Toolbar>
                                <Typography variant="title" color="inherit" className={classes.flex}>
                                    {APPCONFIG.company}
                                </Typography>

                                <div>
                                    <Link to="/login"><Button color="inherit">Login</Button></Link>
                                    <Link to="/register"><Button color="inherit">Register</Button></Link>
                                </div>

                            </Toolbar>
                        </AppBar>
                    </div>
                ) : (
                    <div>
                        <AppBar className={classes.appBar} >
                            <Toolbar>
                                <IconButton
                                    color="inherit"
                                    aria-label="Open drawer"
                                    onClick={this.handleDrawerToggle}
                                    className={classes.navIconHide}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="title" color="inherit" className={classes.flexPrivate}>
                                    {APPCONFIG.company}
                                </Typography>
                                <div>
                                    <IconButton
                                    aria-owns={open ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleLogout}>Log Out</MenuItem>
                                    {/*<Link to="/printer">  <MenuItem>Printer</MenuItem> </Link>*/}
                                </Menu>
                                </div>
                            </Toolbar>
                        </AppBar>
                        <Hidden mdUp>
                            <Drawer
                                variant="temporary"
                                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                                open={this.state.mobileOpen}
                                onClose={this.handleDrawerToggle}
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}>
                                {drawer}
                            </Drawer>
                        </Hidden>
                        <Hidden smDown implementation="css">
                            <Drawer
                                variant="permanent"
                                open
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                    </div>
                )}
            </div>
        );
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    user: state.userReducer.authentication.initialState == undefined ?
        (state.userReducer.authentication.loggingIn == true ? false : state.userReducer.authentication.user): state.userReducer.authentication.initialState.user,
})


export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(MenuAppBar));