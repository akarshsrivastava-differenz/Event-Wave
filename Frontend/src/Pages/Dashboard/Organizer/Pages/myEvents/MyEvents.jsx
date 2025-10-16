import "./MyEvents.css";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router";
// import axios from "axios";
// import { useEffect } from "react";

const MyEvents = ()=>{
    // const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    // const getEvents = async()=>{
    //     try{
    //         const response = await axios.get(`${baseUrl}/events/get-event-for-user` , {
    //             headers:{
    //                 Authorization: `Bearer ${localStorage.getItem("token")}`,
    //             }
    //         });
    //         console.log(response);
    //     }
    //     catch(err){
    //         console.error("Error while fetching data or Invalid request! : " , err);
    //     }
    // }

    // useEffect(()=>{
    //     getEvents();
    // },[]);

    return(
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
                                <td><div><Link to="/events/1">View</Link></div></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
    )
}

export default MyEvents;