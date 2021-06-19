import firebase, { auth } from './firebase.config';

// Configuration for Google sign in
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
  return auth.signInWithPopup(googleProvider);
};

// Configuration for Facebook sign in
const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ display: 'popup', prompt: 'select_account' });

export const signInWithFacebook = () => {
  return auth.signInWithPopup(facebookProvider);
};

// Creating a new user with Email and Password
export const signUpWithEmailAndPassword = (email: string, password: string) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

// Sign in with email and pasword
export const signInWithEmailAndPassword = (email: string, password: string) => {
  return auth.signInWithEmailAndPassword(email, password);
};

// Configuration for logout
export const logout = () => {
  return firebase.auth().signOut();
};
