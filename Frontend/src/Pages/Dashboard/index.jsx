import DashboardMenu from "./Components/DashboardMenu";
import "./Dashboard.css";
import { useUser } from "../../contexts/UserContext";
import { Outlet } from "react-router";

const Dashboard = ()=>{
    
    const{userType} = useUser();

    return (
        <div className="dashboard-main">
            <DashboardMenu userType={userType}/>
            <Outlet/>
        </div>
    );
} 

export default Dashboard;