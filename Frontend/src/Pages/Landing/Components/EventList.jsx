import { useState, useEffect } from "react";
import axios from "axios";
import "./EventList.css"
import GridView from "./GridView";
import ListView from "./ListView";

const EventList = ({ isCard }) => {

    const [events, setEvents] = useState([]);

    // const getUsers = async () => {
        // const result = await axios.get(`http://localhost:3000/users`);
        // setUsers(result.data);
        // console.log(result.data);
    // }

    const getEvents = async () => {
        const result = await axios.get(`http://localhost:3000/events`);
        setEvents(result.data);
    }

    useEffect(() => {
        getEvents();
    }, []);
    
    return (
        <>
            {!isCard && <ListView eventsInfo={events}/>}
            {isCard && <GridView eventsInfo={events}/>}
        </>
    );
}

export default EventList;