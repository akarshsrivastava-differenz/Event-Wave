import "./Content.css";
import { useLocation } from "react-router";

const Content = ({ children }) => {

    const location = useLocation();
    const shouldRemovePadding = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/dashboard";
    const padding = shouldRemovePadding? "0" : "2rem";
    let height=null;
    if(shouldRemovePadding){
        height="100%";
    }
    const customStyle = {padding , height};

    return (
        <div className="content-container" style={customStyle}>
            {children}
        </div>
    );
};

export default Content;