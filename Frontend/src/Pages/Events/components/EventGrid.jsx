import { useEffect, useState } from "react";
import EventCard from "../../../Components/EventCard/EventCard";
import axios from "axios";
import "./EventGrid.css";

const EventGrid = () => {

    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getEventData = async () => {
        try {
            const result = await axios.get("http://localhost:3000/events");
            setEvents(result.data);
            setIsLoading(false);
        }
        catch (err) {
            console.log("Error while fetching data : ", err);
        }
    }

    useEffect(() => {
        getEventData();
    }, [])

    return (
        <div className="events-card-container">
            {isLoading ? <h1>Loading...</h1> : events.map((event, index) => {
                return <div key={index} className="events-card"><EventCard eventInfo={event} /></div>
            })}
        </div>
    )
}

export default EventGrid;