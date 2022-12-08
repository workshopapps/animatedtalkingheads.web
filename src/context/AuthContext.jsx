import { createContext, useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from 'firebase/auth';

import { auth } from '../firebase-config';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    // signInWithRedirect(auth, provider)
  };

  const facebookSignIn = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
  }

  const logOut = () => {
    return signOut(auth);
  };
  

  // useEffect(() => {
  //   // const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //   //   // console.log(currentUser);
  //   //   setUser(currentUser); 
  //   // });  
  //   // return () => {
  //   //   unsubscribe();
  //   // };
  //   localStorage.setItem("token", userToken)

  // }, []);

  useEffect(() => {
    setUser(localStorage.getItem('token'))
  }, []);
  

  return (
    <UserContext.Provider value={{ createUser, user, logOut, signIn, googleSignIn, facebookSignIn, setUser  }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
