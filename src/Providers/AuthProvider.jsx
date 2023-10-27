import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true);

    // auth observer start 
    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('Auth observer connected successfully',currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[])

//  create user start 
    const createUser = (email,password) =>{
        setLoading(true);
      return createUserWithEmailAndPassword(auth,email,password)
    }
//  signIn user start 
   const signInUser = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
   }

//    signIn google start 
   
  const googleSignIn = () =>{
    return signInWithPopup(auth, googleProvider)
  }

//   logOut user start 
  const logOut = () =>{
    setLoading(true);
    return signOut(auth);
  }


    const AuthInfo = {
        user,
        createUser,
        signInUser,
        logOut,
        loading,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;