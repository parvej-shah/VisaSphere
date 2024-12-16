import {Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import LoadingClip from "../components/LoadingClip";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  if(!loading){
    if (user && user?.email) return children ;
    else return <Navigate to={'/login'}></Navigate>;
  }
  else{
    return <LoadingClip/>;
  }
}
