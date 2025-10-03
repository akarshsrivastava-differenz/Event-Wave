import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import "./AuthAbout.css";

const AuthAbout = ()=>{
    return(
         <div className="login-left">

                <div id="logo-container"><FontAwesomeIcon icon={faCalendar} /></div>

                <div>
                    <h3 className="login-left-text">Welcome to Event<span style={{ color: "var(--logo-shade-1)" }}>Wave</span></h3>
                    <h6 className="login-left-text">Discover amazing events and connect with your community</h6>
                </div>

                <div className="login-left-features">
                    <div className="left-features-icons"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                    <div>
                        <h6>Discover Events</h6>
                        <p>Find events that match your interests</p>
                    </div>
                </div>
                <div className="login-left-features">
                    <div className="left-features-icons"><FontAwesomeIcon icon={faBookmark} /></div>
                    <div>
                        <h6>Easy Booking</h6>
                        <p>Secure and instant ticket booking</p>
                    </div>
                </div>
                <div className="login-left-features">
                    <div className="left-features-icons"><FontAwesomeIcon icon={faPeopleArrows} /></div>
                    <div>
                        <h6>Connect</h6>
                        <p>Network with like-minded people</p>
                    </div>
                </div>

            </div>
    )
}

export default AuthAbout;