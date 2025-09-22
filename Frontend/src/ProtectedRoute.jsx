import { useUser } from "./contexts/UserContext";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const ProtectedRoutes = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useUser();

    useEffect(()=>{
        if (!isAuthenticated){
            navigate("/login" , {replace:true});
        }
    } , [isAuthenticated , navigate]);

    return isAuthenticated? <Outlet/> : null;
}

export default ProtectedRoutes;