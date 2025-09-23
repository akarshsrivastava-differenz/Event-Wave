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
                    <Link to="/dashboard" className="dashboad-menu-links"><div className="dashboard-menu-btns">Home</div></Link>
                    <Link className="dashboad-menu-links"><div className="dashboard-menu-btns">My Events</div></Link>
                    <Link to="/dashboard/create-event" className="dashboad-menu-links"><div className="dashboard-menu-btns">Create Events</div></Link>
                    <Link className="dashboad-menu-links"><div className="dashboard-menu-btns">Chat</div></Link>
                    <Link className="dashboad-menu-links"><div className="dashboard-menu-btns">Settings</div></Link>
                </div> :
                <div className="dashboard-menu-options">
                    <Link to="/dashboard" className="dashboad-menu-links"><div className="dashboard-menu-btns">Home</div></Link>
                    <Link to="/dashboard/create-event" className="dashboad-menu-links"><div className="dashboard-menu-btns">Create Events</div></Link>
                    <Link className="dashboad-menu-links"><div className="dashboard-menu-btns">My Ticket </div> </Link>
                    <Link className="dashboad-menu-links"><div className="dashboard-menu-btns">Chat</div></Link>
                    <Link className="dashboad-menu-links"><div className="dashboard-menu-btns">Settings</div></Link>
                </div>
            }



        </div>
    );
}

export default DashboardMenu;