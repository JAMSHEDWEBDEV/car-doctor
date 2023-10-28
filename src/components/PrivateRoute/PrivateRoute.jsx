import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="mt-36 flex justify-center items-center"><span className="loading loading-bars loading-lg text-9xl text-center"></span></div>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} replace to="/login"></Navigate>;
};

export default PrivateRoute;