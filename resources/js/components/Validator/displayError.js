import React from 'react';
import { connect } from 'react-redux';

import {helperActions} from "../../actions/helper.actions";

import FormHelperText from '@material-ui/core/FormHelperText';

export class DisplayError extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            errors:this.props.error_fields === undefined ? [] : this.props.error_fields
        };
    }

    componentWillMount(){

        const {errors } = this.state

        if (this.props.displayError === true ) {
            errors[this.props.input] = true;

            this.setState( {
                errors: errors
            }, () => this.props.dispatch(helperActions.set_error({error:true,error_fields:this.state.errors})));
        }
         else {
            errors[this.props.input]=false;

            this.setState( {
                    errors: errors
                }, () => this.validate()
            );
        }
    }

    validate (){
        var validation = this.checkError();

        validation === '' ? this.props.dispatch(helperActions.set_error({error:false,error_fields:[]})) : []
    }

    checkError(){
        var error;
        const {errors} = this.state;

        for(error in errors){

            if(errors[error] == true){
                return true;
                break;
            }
        }
        return ''
    }

    render() {

        return (
            this.props.displayError === true ?
                <FormHelperText error key={this.props.key}  id="name-error-text">{this.props.info}</FormHelperText> :
                ''

        );
    }
}

const mapStateToProps = state => ({
        error_fields: state.helperReducer.helper_stepper_error.error_fields,
    }
)

const DisplayErrorPage = connect(mapStateToProps)(DisplayError);

export default (DisplayErrorPage);