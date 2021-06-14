import firebase, { auth } from './firebase.config';

// Configuration for Google sign in
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// Configuration for Facebook sign in
const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ display: 'popup', prompt: 'select_account' });

export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

// Configuration for logout
export const logout = () => firebase.auth().signOut();
