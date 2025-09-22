import "./AttendeeDashboard.css";
import DashboardEventCard from "./Components/DashboardEventCard";

const AttendeeDashboard = () => {
    return (
        <div className="attendee-dashboard-main">
            <div className="attendee-welcome-container">
                <h3>My Tickets</h3>
                <p>Manage your event tickets and bookings</p>
            </div>
            <div className="attendee-header-container">
                <h4>Active Tickets</h4>
                <div className="attendee-main-events-container">
                    <DashboardEventCard />
                    <DashboardEventCard />
                    <DashboardEventCard />
                </div>
            </div>
            <div className="attendee-main-stats">
                <h3>Your Stats</h3>
                <div className="stats-data"><p>Events Attended</p> <p>5</p></div>
                <div className="stats-data"><p>Upcoming Events</p> <p>10</p></div>
                <div className="stats-data"><p>Member Since</p> <p>14</p></div>
            </div>
        </div>
    );
}

export default AttendeeDashboard;