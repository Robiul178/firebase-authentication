// import React from 'react';

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const cresteUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singInuser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                console.log('currentUser form onAuthChange', currentUser);
                setUser(currentUser)
            } else {
                console.error('vul')
            }
        });
        return () => {
            unSubscribe();
        }
    }, []);


    const authInfo = { user, cresteUser, singInuser, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;