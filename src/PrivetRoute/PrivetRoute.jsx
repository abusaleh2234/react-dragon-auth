import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {user, looding} = useContext(AuthContext)

    const location = useLocation()
    console.log(location.pathname)

    if(looding){
        return <h2 className="text-4xl text-center pt-10">Looding</h2>
    }

    if(user){
        return children
    }
    
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivetRoute;