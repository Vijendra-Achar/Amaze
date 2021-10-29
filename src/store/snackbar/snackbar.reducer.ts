import { SnackbarActionInterface } from './snackbar.interface';

const INITIAL_STATE = {
  snackbarState: false,
};

const snackbarReducer = (state = INITIAL_STATE, action: SnackbarActionInterface) => {
  switch (action.type) {
    case 'SET_SANCKBAR_STATE':
      return {
        snackbarState: action.payload.value,
      };
  }
};

export default snackbarReducer;
