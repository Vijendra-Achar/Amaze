import React from 'react';

import SnackbarUi from '@material-ui/core/Snackbar';
import { useState } from 'react';

import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

interface SnackbarProps {
  message?: string;
  severity?: 'success' | 'error' | 'warning' | 'info';
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Snackbar(props: SnackbarProps) {
  const [snackbarState, setSnackbarState] = useState(false);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarState(false);
  };

  return (
    <div>
      <SnackbarUi open={snackbarState} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.severity}>
          {props.message}
        </Alert>
      </SnackbarUi>
    </div>
  );
}

export default Snackbar;
