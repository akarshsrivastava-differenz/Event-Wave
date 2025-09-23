import "./DashboardEventCard.css";
import { Link } from "react-router"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const DashboardEventCard = () => {
    return (
        <div className="dashboard-event-card">
            <h4>Event name</h4>
            <div className="dashboard-event-info">
                <div className="dashboard-event-subInfo">
                    <p><FontAwesomeIcon icon={faCalendarDays} />date</p>
                </div>
                <div className="dashboard-event-subInfo">
                    <p><FontAwesomeIcon icon={faClock} />time</p>
                </div>
                <div className="dashboard-event-subInfo">
                    <p><FontAwesomeIcon icon={faLocationDot} />location</p>
                </div>
                <div className="event-status-confirmed">
                    <p>Confirmed</p>
                </div>
                <div className="status-btn-container">
                    <Link className="status-btn">Download</Link>
                </div>
            </div>
        </div>
    );
}

export default DashboardEventCard;