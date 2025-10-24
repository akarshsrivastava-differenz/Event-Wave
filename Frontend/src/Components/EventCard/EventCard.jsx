import "./EventCard.css";
import { Link } from "react-router";

const EventCard = ({ eventInfo }) => {
    
    return (
        <div className="event-card">
            <Link className="link-component" to={`/events/${eventInfo.event_id}`}>
                <p>By <b>{eventInfo.organiser.first_name + " " + eventInfo.organiser.last_name}</b></p>
                <hr />
                <p>On <b>{(eventInfo.event_start).slice(0,10)}</b></p>
                <hr />
                <h4>{eventInfo.event_title}</h4> 
                <p>{eventInfo.event_description}</p>
            </Link>
        </div>
    );
}

export default EventCard