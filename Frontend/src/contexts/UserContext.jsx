import { useEffect, createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const navigate=useNavigate();
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userType, setUserType] = useState(false);

    useEffect(() => {
        verifyToken();
    },[]);
    useEffect(()=>{
        redirectTo();
    } , [isAuthenticated , navigate]);

    const redirectTo = ()=>{
        if(isAuthenticated && ["/signup" , "/login"].includes(window.location.pathname)){
            navigate("/dashboard");
        }   
    }

    const verifyToken = async () => {
        try {
            const response = await axios.get("http://localhost:8080/users/me", { withCredentials: true });
            const data = response.data;
            if (!data.userId) {
                return;
            }
            setUser(data);
            setIsAuthenticated(true);
            if (data.userRole === "organiser") {
                setUserType(true);
            }
        }
        catch (err) {
            console.log("Something went wrong : ", err);
        }
    }

    const login = (userData) => {
        setUser(userData);
        setIsAuthenticated(true);
        if (userData.userRole == "organiser") {
            setUserType(true);
        }
    }
    const logout = async () => {
        try {
            await axios.get("http://localhost:8080/users/logout", { withCredentials: true });
            setUser(null);
            setIsAuthenticated(false);
            setUserType(false);
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
        userType
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