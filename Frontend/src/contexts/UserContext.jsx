import axios from "axios";
import { useEffect, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast, Bounce } from "react-toastify";
import Cookies from "js-cookie";

const UserContext = createContext();

export const UserProvider = ({ children }) => {


    const navigate = useNavigate();
    const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isOrganiser, setIsOrganiser] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        verifyToken();
    }, []);

    useEffect(() => {
        redirectTo();
        allowCreateEvent();
    }, [isAuthenticated, navigate]);


    const redirectTo = () => {
        if (isAuthenticated && ["/signup", "/login"].includes(window.location.pathname)) {
            navigate("/dashboard");
        }
    }
    const allowCreateEvent = () => {
        if (!isOrganiser && ["/create-event"].includes(window.location.pathname)) {
            navigate("/dashboard");
        }
    }
    const verifyToken = async () => {

        const raw = Cookies.get("user_info");
        if(!raw){
            return;
        }
        const json = raw.startsWith("j:") ? raw.slice(2) : raw;
        const userInfo = JSON.parse(json);
        if (!userInfo) {
            return;
        }
        localStorage.setItem("userFName" , userInfo.userFName);
        localStorage.setItem("userLName" , userInfo.userLName);
        setUser(userInfo);
        setIsAuthenticated(true);
        if (userInfo.userRole === "organiser") {
            setIsOrganiser(true);
            setLoading(false);
            return;
        }
        setIsOrganiser(false);
        setLoading(false);
    }

    const login = (userData) => {
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem("userFName",userData.userFName);
        localStorage.setItem("userLName",userData.userLName);
        if (userData.userRole == "organiser") {
            return setIsOrganiser(true);
        }
        setIsOrganiser(false);
    }
    const logout = async () => {
        try {
            const response = await axios.get(`${baseUrl}/users/logout`, { withCredentials: true });
            if (!response) {
                toast.error("Logout failed try again!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                return
            }
            setUser(null);
            setIsAuthenticated(false);
            setIsOrganiser(false);
            localStorage.clear();
            toast.success("You are logged out!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
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
        isOrganiser,
        loading
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