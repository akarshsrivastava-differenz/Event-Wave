import { useEffect, useRef } from "react";
import "./Content.css";
import { Bounce , ToastContainer } from "react-toastify";
import { useLocation } from "react-router";

const Content = ({ children }) => {

    const divRef=useRef(null);
    const location = useLocation();
    useEffect(()=>{
        const targetedDiv = divRef.current;
        if(!targetedDiv){
            return;
        }
        const shouldRemovePadding = ["/login" , "/signup"].includes(location.pathname) || location.pathname.startsWith("/dashboard");
        if(shouldRemovePadding){
            targetedDiv.classList.add("customStyle");
        }
        else{
            targetedDiv.classList.remove("customStyle");
        }
    } , [location.pathname]);

    return (
        <div ref={divRef} className="content-container">
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
            />
            {children}
        </div>
    );
};

export default Content;