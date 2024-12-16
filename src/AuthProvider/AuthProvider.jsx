import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../../firebase.init';
const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) =>{
  const [user,setUser] = useState(null);
  const [loading, setLoading ] = useState(true);
const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}
const loginUser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}
useEffect(()=>{
  const authState = onAuthStateChanged(auth, (newUser) => {
    if (newUser) {
      setUser(newUser);
      setLoading(false);
    } else {
      // User is signed out
      setUser(null);
      setLoading(false);
    }
  });
  return ()=> authState();
},[])
  const authInfo = {
    createUser,
    loginUser,
    user,
    loading
  }
  return (
   <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}
export default AuthProvider;
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext);
  };