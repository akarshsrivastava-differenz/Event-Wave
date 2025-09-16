import './Header.css';
import SearchBar from '../Search Bar/SearchBar';
import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <header>
            <div id="header">

                <div className="left-header">
                    <h3>logo</h3>
                    <Link className="nav-links" to="/">Home</Link>
                    <Link className="nav-links" to="/events">Events</Link>
                </div>

                <div className="right-header">
                    <SearchBar />
                    <div className='user-dropdown'>
                        User
                        <div className="user-dropdown-content">
                            <Link className="nav-links" to="/login">Log in</Link> <br />
                            <Link className="nav-links" to="/signup">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header;