import firebase from '../../firebase/firebase.config';
export interface UserReducerAction {
  type: String;
  payload: Object | Array<any>;
}

export interface UserDocumentData {
  currentUser: firebase.firestore.DocumentData | undefined | null;
}
