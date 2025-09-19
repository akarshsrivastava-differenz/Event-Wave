import "./EventCard.css";
import { Link } from "react-router";

const EventCard = ({ eventInfo }) => {
    
    return (
        <div className="event-card">
            <Link className="link-component" to="/qwe">
                <p>By <b>{eventInfo.creator_username}</b></p>
                <hr />
                <p>On <b>{eventInfo.event_date}</b></p>
                <hr />
                <h4>{eventInfo.event_name}</h4> 
                <p>{eventInfo.description}</p>
            </Link>
        </div>
    );
}

export default EventCard