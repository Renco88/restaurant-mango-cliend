import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext =createContext(null);

const auth =getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loadding,setLoading]= useState(true);

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
       const unsubcribe = onAuthStateChanged(auth,currentUser => {
        setUser(currentUser);
        console.log(currentUser);
        setLoading(false);
       });
       return ()=> {
        unsubcribe();
       }

    },[])

    const authInfo={
        user,
        loadding,
        createUser,
        signIn,
        logOut
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;