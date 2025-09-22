import DashboardMenu from "./Components/DashboardMenu";
import "./Dashboard.css";
import { useUser } from "../../contexts/UserContext";
import AttendeeDashboard from "./Attendee/AttendeeDashboard";
import OrganizerDashboard from "./Organizer/OrganizerDashboard";

const Dashboard = ()=>{
    
    const{userType} = useUser();

    return (
        <div className="dashboard-main">
            <DashboardMenu userType={userType}/>
            {userType?<OrganizerDashboard/> : <AttendeeDashboard/>}
        </div>
    );
} 

export default Dashboard;