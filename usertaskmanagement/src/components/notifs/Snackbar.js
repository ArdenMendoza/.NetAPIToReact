import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { hideDialog } from '../../actions/loginActions';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

class CustomSnackbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let isOpen = this.props.isOpen;
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
    };

    return (
      <Snackbar open={this.props.isOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success"> {this.props.message} </Alert>
      </Snackbar >
    );
  }
}

export default CustomSnackbar;