import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null)

 const AuthProvider = ({children}) => {

    const [user, setUser] = useState()
    const [looding, setLooding] = useState(true)

    const createUser = (email, password) => {
        setLooding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            console.log(currentUser);
            setUser(currentUser)
            setLooding(false)
        })
        return () => {
            unsubscribe()
        }
    },[])

    // Login
    const userLogin = (email, password) => {
        setLooding(true)
        return signInWithEmailAndPassword(auth,email, password)
    }


    // LogOut
    const Logout = () => {
        setLooding(true)
        return signOut(auth)
    }

    const authintecation = {
        createUser,
        userLogin,
        Logout,
        user,
        looding
    }
    return (
        <AuthContext.Provider value={authintecation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;