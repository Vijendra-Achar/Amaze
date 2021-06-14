import firebase, { firestore } from './firebase.config';

export const userProfileData = (userAuth: firebase.User | null) => {
  // If the user is logged out, exit the function
  if (!userAuth) return;
};
