import "./OrganizerDashboard.css";
import { Link } from "react-router";
import MyEvents from "./Pages/myEvents/MyEvents";

const OrganizerDashboard = () => {
    return (
        <div className="organizer-main">
            <div className="organizer-header">
                <div className="organizer-header-content">
                    <h3>Dashboard</h3>
                    <p style={{ color: "gray" }}>Welcome back, manage your events and track performance</p>
                </div>
                <div className="organizer-header-content">
                    <h3 style={{ color: "var(--color-off-shade-2)" }}>24</h3>
                    <p>Total events</p>
                </div>
                <div className="organizer-header-content">
                    <h3 style={{ color: "var(--color-off-shade-1)" }}>2400</h3>
                    <p>Tickets Solds</p>
                </div>
                <div className="organizer-header-content">
                    <h3 style={{ color: "var(--color-off-shade-4)" }}>&#8377;3125421</h3>
                    <p>Revenue</p>
                </div>
            </div>

            <div className="organizer-header-main-container">
                <div className="organizer-my-events">
                    <h4>My Events</h4>
                </div>
                <div className="organizer-header-2-options">
                    <select className="organizer-header-2-select" name="visibility" id="events-visibility">
                        <option value="All">All Events</option>
                        <option value="active">Active</option>
                        <option value="completed">Completed</option>
                        <option value="Draft">Draft</option>
                    </select>
                    <Link to="/dashboard/create-event" className="link"><button className="organizer-header-2-btn">Create Event</button></Link>
                </div>

                <MyEvents/>
                
            </div>
        </div>
    );
}

export default OrganizerDashboard;