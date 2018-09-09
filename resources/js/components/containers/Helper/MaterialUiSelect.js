import React from 'react';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import printerValidator from "../../Validator/printer.validator";
import {printerActions} from "../../../actions/printer.actions";
import {helperActions} from "../../../actions/helper.actions";
import PRINTERCONFIG from "../Printer/Index";


const status = [ {value:"1", label:"Active"} , {value:"0", label:"Deactivate"}];


export class MaterialUiSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: [],
        };

    }

    componentWillMount(){

        var name = this.props.name
        var assignedType

        switch(name) {
            case 'status':
                assignedType= [{'value':1, 'label' : 'Active'}, {'value':0, 'label' : 'Deactivate'}];
                break;

            case 'type':
                assignedType= [{'value':1, 'label' : 'Label Printer'}, {'value':2, 'label' : 'Invoice Printer'},{'value':3, 'label' : 'Receipt Printer'}];
                break;

            case 'print':


                let searchResults;
                searchResults = this.props.data;
                if(searchResults===undefined ){
                    assignedType=[{'value':0, 'label' : 'No Printer'}];
                }else{

                    var newPrinter = [{id: 0,  system_name: "Please Select to Print" }].concat(searchResults);

                    assignedType = newPrinter.map(function(name) {
                        return {value: name['id'], label:  name['system_name']};
                    });
                }

            default:
                ''
        }

        this.setState({ type:assignedType });

    }


    Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {

        const {type} = this.state;

        return (

            <div>

                    <FormControl className="formControl" required={this.props.required === undefined ? true : false}
                                 fullWidth>
                        <InputLabel className="inputLabel" shrink={true}
                                    htmlFor={this.props.label}>{this.Capitalize(this.props.label)}</InputLabel>
                        <Select
                            name={this.props.name}
                            id={this.props.id}
                            className="inputInput"
                            value={this.props.value}
                            onChange={this.props.onChange}
                            input={<Input name={this.props.label}
                            readOnly={this.props.readOnly===undefined ? false : this.props.readOnly}/>}
                        >
                            {type.map((value, index) => (
                                <MenuItem key={index} value={value.value}>{value.label}</MenuItem>
                                ))}

                        </Select>
                    </FormControl>

                    <div/>

            </div>
        );
    }
}