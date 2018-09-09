import { userConstants } from "../constants/user.constants";
import { userService } from "../services/user.service";
import history from '../routes/history'
import {toastr} from 'react-redux-toastr'

export const userActions = {
    register,
    login,
    logout,
    getUserInformation,
    registering
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    toastr.success('Registration Successful')
                    dispatch(success());
                    history.push('/login');
                },
                error => {
                    toastr.error('Registration Failed', error.data.error)
                    dispatch(failure(error.data.error));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function login(user) {
    return dispatch => {
        dispatch(request({ user }));

        userService.login(user)
            .then(
                user => {
                    dispatch(success(user));
                    toastr.success('Login Successful')
                    history.push('/');
                },
                error => {
                    toastr.error('Login Failed', error.data.error)
                    dispatch(failure(error.data.error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout(user) {
    return dispatch => {
        dispatch(request(user));

        userService.logout()
            .then(
                user => {
                    dispatch(success(user));
                    toastr.success('Logout Successful')
                    history.push('/login');
                },
                error => {
                    toastr.error('Logout Failed', error.data.error)
                    dispatch(failure(error.data.error));
                }
            );
    };

    function request() { return { type: userConstants.LOGOUT_REQUEST, user } }
    function success() { return { type: userConstants.LOGOUT_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGOUT_FAILURE, error } }
}

function registering() {
    return dispatch => {
        dispatch(request());

        userService.logout()
            .then(
                user => {
                    dispatch(success(user));
                    },
                error => {
                    dispatch(failure(error.data.error));
                }
            );
    };

    function request() { return { type: userConstants.LOGOUT_REQUEST } }
    function success() { return { type: userConstants.LOGOUT_SUCCESS } }
    function failure(error) { return { type: userConstants.LOGOUT_FAILURE, error } }
}


function getUserInformation() {
    return dispatch => {
        dispatch(request());

        userService.current()
            .then(
                user => {
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error.data.error));
                }
            );
    };

    function request() { return { type: userConstants.GETCURRENT_REQUEST } }
    function success(user) { return { type: userConstants.GETCURRENT_SUCCESS, user } }
    function failure(error) { return { type: userConstants.GETCURRENT_FAILURE, error } }
}