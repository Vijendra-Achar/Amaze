import firebase from './firebase.config';

// Get the sign in method for a user login
export const getSignInMethod = (userAuth: firebase.User | null) => {
  let signInProvider: string | undefined;

  userAuth?.providerData.forEach((data: any) => {
    signInProvider = data?.providerId;
  });

  let signInMethod = signInProvider?.split('.')[0];

  return signInMethod;
};
