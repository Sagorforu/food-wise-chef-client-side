import React, { useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();
const AuthProvider = ( {children} ) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const GoogleUser = () => {
        return signInWithPopup(auth, GoogleProvider);
    }
    const GithubUser = () => {
        return signInWithPopup(auth, GithubProvider);
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
            setUser(loggedUser)
        })
        return () => {
            return unsubscribe();
        }
    },[])

    const authInfo = {
        createUser,
        GoogleUser,
        GithubUser,
        logInUser,
        user
    };

    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;