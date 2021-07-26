import firebase, { firestore } from './firebase.config';

import { getSignInMethod } from './utils';

export const createUserProfileDoc = async (userAuth: firebase.User | null, userName: string | null = null) => {
  // If the user is logged out, exit the function
  if (!userAuth) return;

  // The path to the user's data
  const userDocRef = firestore.doc(`users/${userAuth.uid}`);

  const userDoc = await userDocRef.get();

  // Write the data to the database if the user doesnot exist
  if (!userDoc.exists) {
    const signInMethod = getSignInMethod(userAuth);
    let { displayName, email, emailVerified, photoURL, uid, phoneNumber } = userAuth;

    if (signInMethod === 'password' && userName) {
      displayName = userName;
    }

    const createdAt = +new Date();

    const isActive = true;

    try {
      await userDocRef.set({
        displayName,
        email,
        emailVerified,
        photoURL,
        uid,
        phoneNumber,
        createdAt,
        signInMethod,
        isActive,
      });
    } catch (error) {
      console.log('Error occured while creating user profile', error.message);
    }
  }

  return userDocRef;
};

// Get current user's firebase document
export const getCurrentUserDocument = (userAuth: firebase.User) => {
  // If the user is logged out, exit the function
  if (!userAuth) return;

  // The path to the user's data
  const userDocRef = firestore.doc(`users/${userAuth.uid}`);

  return userDocRef;
};
