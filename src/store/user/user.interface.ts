import firebase from '../../firebase/firebase.config';
export interface UserReducerAction {
  type: String;
  payload: Object | Array<any>;
}

export interface UserDocumentData {
  currentUser: firebase.firestore.DocumentData | undefined | null;
}

export interface UserDocumentStructure {
  createdAt: Date;
  displayName: String;
  email: String;
  emailVerified: boolean;
  phoneNumber: Number | String;
  photoURL: String;
  signInMethod: String;
  uid: String;
}
