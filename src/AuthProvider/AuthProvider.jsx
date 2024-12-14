import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useContext } from 'react'
import { auth } from '../../firebase.init';
const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) =>{
const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}
const loginUser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}

  const authInfo = {
    createUser,
    loginUser
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