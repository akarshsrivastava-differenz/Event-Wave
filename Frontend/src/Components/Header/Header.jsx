import './Header.css';
import SearchBar from '../Search Bar/SearchBar';
import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <header>
            <div id="header">

                <div className="left-header">
                    <h3>logo</h3>
                    <Link to="/events">Events</Link>
                </div>

                <div className="right-header">
                    <SearchBar />
                </div>
            </div>

        </header>
    )
}

export default Header;