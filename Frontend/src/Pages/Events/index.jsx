import "./Event.css";
import EventGrid from "./components/EventGrid";

const Events = () => {
    return (
        <div className="event-main">
            <div className="event-static-container">
                <div className="event-static-text">
                    <h1>Explore Events</h1>
                    <h6>Discover amazing events happening around you.</h6>
                    <h6>From tech conferences to music festivals, find your next great experience.</h6>
                </div>
                <div className="event-static-dropdowns">
                    <input className="dropdowns" type="text" placeholder="Search Events" />
                    <select name="category" className="dropdowns" id="event-category">
                        <option value="all">All Categories</option>
                        <option value="conference">Conference</option>
                        <option value="workshop">Workshop</option>
                        <option value="concert">Concert</option>
                        <option value="festival">Festival</option>
                        <option value="networking">Networking</option>
                    </select>
                    <select name="date" className="dropdowns" id="event-date">
                        <option value="any">Anytime</option>
                        <option value="this-week">This week</option>
                        <option value="this-month">This Month</option>
                        <option value="next-month">Next Month</option>
                    </select>
                </div>
            </div>
            <EventGrid/>
        </div>
    );
}


export default Events;