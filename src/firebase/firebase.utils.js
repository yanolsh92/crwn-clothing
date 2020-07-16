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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
