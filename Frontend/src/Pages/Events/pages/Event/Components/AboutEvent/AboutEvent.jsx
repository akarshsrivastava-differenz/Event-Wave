import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import "./AboutEvent.css";

const AboutEvent = ({eventDetails}) => {
    return (
        <div className="event-left-main">
            <div className="event-left-img">
                <img id="main-img" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" alt="Event image" />
                <div className="event-left-img-cover"></div>
                <div className='event-title'>
                    <h5>{eventDetails.event_category}</h5>
                    <h2>{eventDetails.event_title}</h2>
                </div>
            </div>
            <div className="left-main-details">
                <div className="main-detail">
                    <p><FontAwesomeIcon icon={faCalendarDays} />{(eventDetails.event_start).slice(0,10) + " to " + (eventDetails.event_end).slice(0,10)}</p>
                </div>
                <div className="main-detail">
                    <p><FontAwesomeIcon icon={faClock} />{(eventDetails.event_start).slice(11,16) + " - " + (eventDetails.event_end).slice(11,16)}</p>
                </div>
                <div className="main-detail">
                    <p><FontAwesomeIcon icon={faLocationDot} />{eventDetails.event_venue_address}</p>
                </div>
            </div>
            <div className="event-description">
                <h3>About Event</h3>
                <p>{eventDetails.event_description}</p>
            </div>
            <div className="about-organiser">
                <h3>Organiser details</h3>
                <Link to="/user/userid" className="link">
                    <div className="organiser-image">
                        <FontAwesomeIcon icon={faUser} id="event-user-icon" />
                        <div className="organiser-name">{eventDetails.organiser.first_name + " " + eventDetails.organiser.last_name} </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default AboutEvent;