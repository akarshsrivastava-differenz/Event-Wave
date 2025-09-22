import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons"
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useUser } from '../../contexts/UserContext';

const Header = () => {

    const {isAuthenticated , logout} = useUser();

    return (
        <header>

            <div id="logo-container">
                <Link id="logo-main" to="/"> <FontAwesomeIcon style={{ color: "var(--logo-shade-1)" }} icon={faCalendar} /> Event<span style={{ color: "var(--logo-shade-1)" }}>Wave</span></Link>
            </div>
            <nav id='navbar'>
                <Link className="nav-links" to="/events">Events</Link> 
                <Link className="nav-links" to="/">How it works</Link>
                <Link className="nav-links" to="/">Reviews</Link>
            </nav>
            <div id="user-actions">

                <div className='user-dropdown'>
                    <FontAwesomeIcon icon={faUser} id="user-icon" />
                    {isAuthenticated? 
                    <div className="user-dropdown-content">
                        <Link className="nav-links" to="/dashboard">dashboard</Link> <br />
                        <Link className="nav-links" onClick={logout} to="/login">log out</Link>
                    </div>:
                    <div className="user-dropdown-content">
                        <Link className="nav-links" to="/login">Log in</Link> <br />
                        <Link className="nav-links" to="/signup">Sign up</Link>
                    </div> 
                    }
                </div>

                <div className="responsive-nav-link-slider">
                    <FontAwesomeIcon icon={faBars} />
                    <div className="responsive-nav-link-panel">
                        <Link className="nav-links" to="/events">Events</Link> 
                        <Link className="nav-links" to="/">How it works</Link> 
                        <Link className="nav-links" to="/">Reviews</Link>
                    </div>
                </div>
            </div>


        </header>
    )
}

export default Header;