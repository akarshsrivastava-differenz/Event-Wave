import "./EventPage.css";
import AboutEvent from "./Components/AboutEvent/AboutEvent";
import EventBooking from "./Components/Event Booking/EventBooking";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { toast , Bounce } from "react-toastify";
import axios from "axios";

const EventPage = () => {

    const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    const { eventId } = useParams();
    const [eventDetails, setEventDetails] = useState({});
    const [isLoading , setIsLoading] = useState(true);

    const fetchEventDetails = async() => {
        try {
            const response = await axios.get(`${baseUrl}/events/get/${eventId}`);
            const event = response.data;
            setEventDetails(event);
            setIsLoading(false);
        }
        catch(err) {
            toast.error('Try again something went wrong!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }

    useEffect(()=>{
        fetchEventDetails();
    } , [])
    
    if(isLoading){
        return(
            <div>Loading event details...</div>
        )
    }

    return (
        <div className="event-page-main">
            <AboutEvent eventDetails={eventDetails}/>
            <EventBooking />
        </div>
    )
}

export default EventPage;