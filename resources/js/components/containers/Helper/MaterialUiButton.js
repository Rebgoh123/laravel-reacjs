import React from 'react';
import {connect} from "react-redux";

import Button from '@material-ui/core/Button';

import UpdateIcon from '@material-ui/icons/cached';
import AddIcon from '@material-ui/icons/Add';

class MaterialUiButtonPage extends React.Component {

    render() {

        return (
            <div>
                { this.props.type == "update" ?
                <Button type="submit" size="large" variant="contained" className="update-button">
                    <UpdateIcon/> {this.props.title}
                </Button>
                    :
                    <div/>
                }

                { this.props.type == "add" ?
                    <Button  type="submit" size="large" variant="contained" className="add-button">
                        <AddIcon/> {this.props.title}
                    </Button>
                    :
                    <div/>
                }





            </div>
        );
    }
}

const mapStateToProps = state => ({
    }
)

const MaterialUiButton = connect(mapStateToProps)(MaterialUiButtonPage);

export default(MaterialUiButton);