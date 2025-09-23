import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated , setIsAuthenticated]=useState(false);
    const [userType , setUserType] = useState(false);

    const login = (userData) => {
        setUser(userData);
        if(userData.role === "organizer"){
            setUserType(true);
        }
        setIsAuthenticated(true);
    }
    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        setUserType(false);
    }

    const contextValue = {
        user,
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
    if(context === undefined){
        throw new Error("Error in user conext!");
    }
    return context;
}