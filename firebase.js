// import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// import 'firebase/compat/auth';

const app = initializeApp({
    apiKey: process.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.REACT_APP_FIREBASE_APP_ID
});

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export default app;