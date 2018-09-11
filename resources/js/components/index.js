import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import  history  from "../routes/history";

import routes from "../routes/routes";
import Menu  from './containers/Menu/Menu'
import '../css/style.css'
import APPCONFIG from  "../constants/config";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {connect} from "react-redux";

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    toolbar: theme.mixins.toolbar,

    content: {
        flexGrow: 1,
        zIndex: 0,
        backgroundImage: `url(http://`+APPCONFIG.webUrl+`/img/bg.jpg)`,
        height:'100vh'
    },
});

class App extends React.Component {

    render() {

        const { classes, theme } = this.props;

        return (

            <Router history={history}>
            <div className={classes.root}>
    <Menu/>
        <main className={classes.content}>
    <div className={classes.toolbar} />
        {routes}
    </main>
        </div>
        </Router>
    );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    user: state.userReducer.authentication.loggingOut == true ? true : state.userReducer.authentication.user,
})

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(App));