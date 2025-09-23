import "./DashboardMenu.css";
import { Link } from "react-router";

const DashboardMenu = ({userType}) => {

    return (
        <div className="dashboard-menu-main">
            <div className="dashboard-menu-logo">
                {userType ? <h4><span style={{color:"var(--logo-shade-1)"}}>Organizer</span> Dashboard</h4> : <h4><span style={{color:"var(--logo-shade-1)"}}>Atendee</span> Dashboard</h4>}
            </div>

            {userType ?
                <div className="dashboard-menu-options">
                    <div className="dashboard-menu-btns"><Link to="/dashboard" className="dashboad-menu-links">Home</Link></div>
                    <div className="dashboard-menu-btns"><Link className="dashboad-menu-links">My Events</Link></div>
                    <div className="dashboard-menu-btns"><Link to="/dashboard/create-event" className="dashboad-menu-links">Create Events</Link></div>
                    <div className="dashboard-menu-btns"><Link className="dashboad-menu-links">Chat</Link></div>
                    <div className="dashboard-menu-btns"><Link className="dashboad-menu-links">Settings</Link></div>
                </div> :
                <div className="dashboard-menu-options">
                    <div className="dashboard-menu-btns"><Link to="/dashboard" className="dashboad-menu-links">Home</Link></div>
                    <div className="dashboard-menu-btns"><Link className="dashboad-menu-links">My Ticket</Link></div>
                    <div className="dashboard-menu-btns"><Link className="dashboad-menu-links">Chat</Link></div>
                    <div className="dashboard-menu-btns"><Link className="dashboad-menu-links">Settings</Link></div>
                </div>
            }



        </div>
    );
}

export default DashboardMenu;