import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB8Cf9l2zo0K7_Ot_4jwWMOAQN01nwAZps',
  authDomain: 'crwn-db-d49e8.firebaseapp.com',
  databaseURL: 'https://crwn-db-d49e8.firebaseio.com',
  projectId: 'crwn-db-d49e8',
  storageBucket: 'crwn-db-d49e8.appspot.com',
  messagingSenderId: '783337954490',
  appId: '1:783337954490:web:db93329280774af0e53683',
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
