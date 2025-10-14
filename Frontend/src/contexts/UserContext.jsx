import { useEffect, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const navigate=useNavigate();
    const [user , setUser] = useState(null);
    const [isAuthenticated , setIsAuthenticated] = useState(false);
    const [isOrganiser , setIsOrganiser] = useState(false);   

    useEffect(() => {
        verifyToken();
    },[]);
    
    useEffect(()=>{
        redirectTo();
        allowCreateEvent();
    } , [ isAuthenticated , navigate ]);


    const redirectTo = ()=>{
        if(isAuthenticated && ["/signup" , "/login"].includes(window.location.pathname)){
            navigate("/dashboard");
        }   
    }
    const allowCreateEvent = ()=>{
        if(!isOrganiser && ["/create-event"].includes(window.location.pathname)){
            navigate("/dashboard");
        }
    }
    const verifyToken = async () => {
        try {
            if(!localStorage.getItem("token")){
                return;
            }
            const userData={
                userId : localStorage.getItem("userId"),
                token : localStorage.getItem("token"),
                userRole : localStorage.getItem("userRole"),
            }
            setUser(userData);
            setIsAuthenticated(true);
            if(userData.userRole === "organiser"){
                setIsOrganiser(true);
                return;
            }
            setIsOrganiser(false);
        }
        catch (err) {
            console.log("Something went wrong : ", err);
        }
    }

    const login = (userData) => {
        setUser(userData);
        setIsAuthenticated(true);
        if (userData.userRole == "organiser") {
            setIsOrganiser(true);
        }
        localStorage.setItem("userId" , userData.userId);
        localStorage.setItem("token" , userData.token);
        localStorage.setItem("userRole" , userData.userRole);
    }
    const logout = async () => {
        try {
            setUser(null);
            setIsAuthenticated(false);
            setIsOrganiser(false);
            localStorage.clear();
        }
        catch (err) {
            console.log("Error while logout : ", err);
        }
    }

    const contextValue = {
        user,
        setUser,
        login,
        logout,
        isAuthenticated,
        isOrganiser
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("Error in user conext!");
    }
    return context;
}