import React, { createContext, useEffect, useState } from 'react'
export  const Authcontext=createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import app from '../Firebase/firebase.config';
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null);
    console.log(user);

const creatUser =(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password);
};

// login**
const signIn=(email,password)=>{
  return signInWithEmailAndPassword(auth,email,password)
}

// logput*
const logout=()=>{
  return signOut(auth);

}

useEffect(()=>{
const unSubscribe=onAuthStateChanged(auth,(currentuser)=>{
  setuser(currentuser);
});
return()=>{
  unSubscribe();
}

},[]);

    const authdata={
      user,
      setuser,
      creatUser,
      logout,
       signIn,
    }
  return <Authcontext value={authdata}>{children}</Authcontext>
}

export default AuthProvider 