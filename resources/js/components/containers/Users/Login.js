import React from 'react';
import { connect } from 'react-redux'


import APPCONFIG from  "../../../constants/config";
import { userActions } from "../../../actions/user.actions";

import { MaterialUiTextfield } from "../Helper/MaterialUiTextfield";

import userValidator from "../../Validator/user.validator";
import {resetValidators,updateValidators,isFormValid} from "../../Validator/ValidateHelper";

import Button from '@material-ui/core/Button';


import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.props.dispatch(userActions.logout());

        this.state = {
            user: {},
            input :['username','password'],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        // This resets form
        this.validators = userValidator;
        this.validateOnSubmit= this.validateOnSubmit.bind(this);
    }


    validateOnSubmit() {
            resetValidators(this.validators);

            const {user} = this.state;

            var inputSubmit = this.state.input;

            var pdata,input
            var viewDetailsData = this.state.user

            for (pdata in viewDetailsData) {

                user[pdata] = viewDetailsData[pdata];
            }

            this.setState({user});
            for (input in inputSubmit) {
                updateValidators(this.validators,inputSubmit[input], this.state.user[inputSubmit[input]]);
            }
    }

    handleChange(event) {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });

        updateValidators(this.validators,event.target.name, event.target.value);

    }

    handleSubmit(event) {
        event.preventDefault();
        this.validateOnSubmit()

        if(isFormValid(this.validators)) {
            const {dispatch} = this.props;
            dispatch(userActions.login(this.state.user));
        }
    }

    render() {
        const { user } = this.state;

        return (

            <div className="div-login-style">
                <h1> {APPCONFIG.brand} Server</h1>
            <hr/>
                <form onSubmit={this.handleSubmit}>

                    <MaterialUiTextfield
                        id="username"
                        name="username"
                        label="Username"
                        value={user.username || ''}
                        onChange={this.handleChange}
                        validator={this.validators}
                        />

                    <MaterialUiTextfield
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={user.password || ''}
                        onChange={this.handleChange}
                        validator={this.validators}
                    />

            <br/><br/>
                    <div className="form-group">
                        <Button variant="raised" color="inherit" type="submit" fullWidth>
                            SUBMIT
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    user : state.userReducer.authentication.initialState,

})

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }