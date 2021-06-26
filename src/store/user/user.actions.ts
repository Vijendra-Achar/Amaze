import { UserDocumentData } from './user.interface';

export const setCurrentUser = (user: UserDocumentData) => ({ type: 'SET_CURRENT_USER', payload: user });
