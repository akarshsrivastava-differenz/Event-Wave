import { useEffect, useState } from "react";
import "./Landing.css";
import EventCard from "../../Components/EventCard/EventCard";
import { Link } from "react-router";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faClipboardUser } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {

    const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getEventData = async () => {
        try {
            const result = await axios.get(`${baseUrl}/events` , {withCredentials:true});
            const eventData = result.data;
            setEvents(eventData);
            setIsLoading(false);
        }
        catch (err) {
            console.error("Error while fetching data : ", err);
        }
    }

    useEffect(() => {
        getEventData();
    }, []);

    return (
        <>
            <div id="main-landing">

                <div id="landing-intro-container">
                    <div id="intro-container-text">
                        <h1>Discover & Book <br />
                            Amazing Events</h1>
                    </div>
                    <div id="intro-container-btns">
                        <Link className="link" to="/events"> <button className="intro-btns">Discover Events</button> </Link>
                        <Link className="link" to="/xyz"> <button className="intro-btns">Organize Event</button> </Link>
                    </div>
                </div>

                <div id="landing-recent-events-container">
                    <div id="landing-recent-events-static">
                        <h1>Featured Events</h1>
                        <h5 style={{color:"grey"}}> Handpicked events you won't want to miss</h5>
                    </div>
                    <div id="landing-recent-events-cards">
                        {isLoading && <h1>Loading...</h1>}
                        {!isLoading && events.slice(-3).map((event, index) => {
                            return <div key={index} className="recent-events-card"><EventCard eventInfo={event} /></div>
                        })}
                    </div>
                </div>

                <hr />

                <div className="landing-working">
                    <div className="landing-working-static-text">
                        <h2>How It Works</h2>
                        <h6 style={{color:"grey"}}>Simple steps to your next amazing experience</h6>
                    </div>
                    <div className="landing-working-cards-container">
                        <div className="landing-working-cards">
                            <div className="landing-working-card-icon">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                            <div className="landing-working-card-text">
                                <h3>Browse</h3>
                                <h6>Discover events tailored to your interests and location preferences</h6>
                            </div>
                        </div>
                        <div className="landing-working-cards">
                            <div className="landing-working-card-icon">
                                <FontAwesomeIcon icon={faBook} />
                            </div>
                            <div className="landing-working-card-text">
                                <h3>Book</h3>
                                <h6>Secure your spot with our easy and safe booking process</h6>
                            </div>
                        </div>
                        <div className="landing-working-cards">
                            <div className="landing-working-card-icon">
                                <FontAwesomeIcon icon={faClipboardUser} />
                            </div>
                            <div className="landing-working-card-text">
                                <h3>Attend</h3>
                                <h6>Show up and enjoy unforgettable experiences and connections</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="landing-join-now">
                    <h1>Start Your Event Journey Today</h1>
                    <h6>Join thousands who've discovered their next favorite experience through EventWave</h6>
                    <Link to="/signup"> <button className="intro-btns">Join now</button> </Link>
                </div>

            </div>
        </>
    );
}

export default Landing;