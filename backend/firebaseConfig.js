import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB_GWLJhow96YcykZjWzjXP6K53nCc4-48",
  authDomain: "chatapp-430709.firebaseapp.com",
  projectId: "chatapp-430709",
  storageBucket: "chatapp-430709.appspot.com",
  messagingSenderId: "115594972865",
  appId: "1:115594972865:web:02a5593dc8e09c01cc8e40",
  measurementId: "G-P3W0B8Q24T"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { firestore, auth, googleProvider };
