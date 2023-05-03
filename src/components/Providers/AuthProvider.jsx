import React from 'react';
import app from '../../firebase/firebase.config';
import { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();
const AuthProvider = ( {children} ) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const GoogleUser = () => {
        return signInWithPopup(auth, GoogleProvider);
    }
    const GithubUser = () => {
        return signInWithPopup(auth, GithubProvider);
    }

    const authInfo = {
        createUser,
        GoogleUser,
        GithubUser
    };

    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;