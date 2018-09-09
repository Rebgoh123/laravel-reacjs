import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import {helperActions} from "../../../actions/helper.actions";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';

class MaterialUiDialogPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleClickOpen = () => {
        this.setState({ open: true});
    };

    handleClose = () => {
        this.setState({ open: false});
        this.resetStepper(0);
    };

    resetStepper = (steps) => {
        this.props.dispatch(helperActions.set_active_step(steps));

        this.props.type==='quick-view' ? '' : this.props.defaultValue();

    };

    render() {
        const { fullScreen } = this.props;

        return (
            <div>

                {this.props.type==='quick-view' ?  <Button onClick={this.handleClickOpen} variant="contained" aria-label="Delete" className="add-button-table">
                    <SearchIcon/>
                </Button> :
                    <Button onClick={this.handleClickOpen} size="large" variant="contained" className="add-button">
                        <AddIcon/> {this.props.title}
                    </Button>
                }

                <Dialog
                    fullScreen={fullScreen}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                    disableBackdropClick={true}
                    fullWidth={true}
                    maxWidth = {'md'}
                >
                    <DialogTitle id="responsive-dialog-title" className="modal-dialog-title" disableTypography>{this.props.title}
                            <Button onClick={this.handleClose} color="inherit" autoFocus>
                            <CloseIcon/>
                            </Button>
                    </DialogTitle>

                    <DialogContent>
                      {this.props.children}
                    </DialogContent>

                </Dialog>
            </div>
        );
    }
}

MaterialUiDialogPage.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    }
)

const MaterialUiDialog = connect(mapStateToProps) (withMobileDialog()(MaterialUiDialogPage));

export default(MaterialUiDialog);