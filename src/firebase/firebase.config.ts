import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

// The variables requied for the app initilization is coming in from the .env file
const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_APP_ID,
} = process.env;

const config = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
};

// Register firebase
firebase.initializeApp(config);

// Firebase Auth setup
export const auth = firebase.auth();

// Firebase Firestore setup
export const firestore = firebase.firestore();

// Export the configured firebase library
export default firebase;
