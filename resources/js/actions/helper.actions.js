import { helperConstants } from "../constants/helper.constants";

export const helperActions = {
    set_title,
    set_active_step,
    set_error,
    get_error

}

function set_title(helper) {
    return dispatch => {
        dispatch(request(helper));
    };

    function request(helper) { return { type: helperConstants.SET_TITLE, helper } }
}


function set_active_step(helper) {
    return dispatch => {
        dispatch(request(helper));
    };

    function request(helper) { return { type: helperConstants.SET_ACTIVE_STEP, helper } }
}

function set_error(helper) {
    return dispatch => {
        dispatch(request(helper));
    };

    function request(helper) { return { type: helperConstants.SET_ERROR, helper } }
}

function get_error(helper) {
    return dispatch => {
        dispatch(request(helper));
    };

    function request(helper) { return { type: helperConstants.GET_ERROR, helper } }
}
