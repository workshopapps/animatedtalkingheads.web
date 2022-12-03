// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD1LP3BiNTaCwrhX-F-siYfKSQpeUPLqsY',
  authDomain: 'voxclips-production.firebaseapp.com',
  projectId: 'voxclips-production',
  storageBucket: 'voxclips-production.appspot.com',
  messagingSenderId: '821469046902',
  appId: '1:821469046902:web:e2b4092b7a24fa57b2d757'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;
