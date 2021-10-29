import { SnackbarActionInterface } from './snackbar.interface';

export const setCurrentUser = (value: SnackbarActionInterface) => ({ type: 'SET_SNACKBAR_STATE', payload: value });
