import { useEffect , createContext, useContext, useState } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated , setIsAuthenticated]=useState(false);
    const [userType , setUserType] = useState(false);

    useEffect(()=>{
        verifyToken();
    } , []);

    const verifyToken = async() =>{
        try{
            const response = await axios.get("http://localhost:8080/users/me" , {withCredentials:true});
            console.log(response);
            console.log("hello")
        }   
        catch(err){
            console.log("Something went wrong : " , err);
        }
    }

    const login = (userData) => {
        setUser(userData);
    }
    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        setUserType(false);
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
    if(context === undefined){
        throw new Error("Error in user conext!");
    }
    return context;
}