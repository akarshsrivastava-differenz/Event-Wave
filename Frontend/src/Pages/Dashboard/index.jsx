import DashboardMenu from "./Components/DashboardSidebar";
import "./Dashboard.css";
import { useUser } from "../../contexts/UserContext";
import { Outlet } from "react-router";

const Dashboard = ()=>{
    
    const{isOrganiser} = useUser();

    return (
        <div className="dashboard-main">
            <DashboardMenu userType={isOrganiser}/>
            <Outlet/>
        </div>
    );
} 

export default Dashboard;