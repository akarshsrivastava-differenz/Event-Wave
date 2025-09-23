import "./OrganizerDashboard.css";
import { Link } from "react-router";
import Table from 'react-bootstrap/Table';

const OrganizerDashboard = () => {
    return (
        <div className="organizer-main">
            <div className="organizer-header">
                <div className="organizer-header-content">
                    <h3>Dashboard</h3>
                    <p style={{ color: "gray" }}>Welcome back, manage your events and track performance</p>
                </div>
                <div className="organizer-header-content">
                    <h3 style={{ color: "var(--color-off-shade-2)" }}>24</h3>
                    <p>Total events</p>
                </div>
                <div className="organizer-header-content">
                    <h3 style={{ color: "var(--color-off-shade-1)" }}>2400</h3>
                    <p>Tickets Solds</p>
                </div>
                <div className="organizer-header-content">
                    <h3 style={{ color: "var(--color-off-shade-4)" }}>&#8377;3125421</h3>
                    <p>Revenue</p>
                </div>
            </div>

            <div className="organizer-header-main-container">
                <div className="organizer-my-events">
                    <h4>My Events</h4>
                </div>
                <div className="organizer-header-2-options">
                    <select className="organizer-header-2-select" name="visibility" id="events-visibility">
                        <option value="All">All Events</option>
                        <option value="active">Active</option>
                        <option value="completed">Completed</option>
                        <option value="Draft">Draft</option>
                    </select>
                    <button className="organizer-header-2-btn"><Link className="link">Create Event</Link></button>
                </div>

                <div className="organizer-header-2-table-conatainer">
                    <Table responsive className="table border-spacing">
                        <thead>
                            <tr className="organizer-table-row">
                                <th>Events</th>
                                <th>Date</th>
                                <th>Tickets sold</th>
                                <th>Revenue</th>
                                <th>Status</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Event name</td>
                                <td>March 15, 2024</td>
                                <td>234 / 300</td>
                                <td>&#8377;70000</td>
                                <td><div className="event-status">Active</div></td>
                                <td><div><Link to="/events/eventId">View</Link></div></td>
                            </tr>
                            <tr>
                                <td>Event name</td>
                                <td>March 15, 2024</td>
                                <td>234 / 300</td>
                                <td>&#8377;70000</td>
                                <td><div className="event-status">Active</div></td>
                                <td><div><Link to="/events/eventId">View</Link></div></td>
                            </tr>
                            <tr>
                                <td>Event name</td>
                                <td>March 15, 2024</td>
                                <td>234 / 300</td>
                                <td>&#8377;70000</td>
                                <td><div className="event-status">Active</div></td>
                                <td><div><Link to="/events/eventId">View</Link></div></td>
                            </tr>
                            <tr>
                                <td>Event name</td>
                                <td>March 15, 2024</td>
                                <td>234 / 300</td>
                                <td>&#8377;70000</td>
                                <td><div className="event-status">Active</div></td>
                                <td><div><Link to="/events/eventId">View</Link></div></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default OrganizerDashboard;