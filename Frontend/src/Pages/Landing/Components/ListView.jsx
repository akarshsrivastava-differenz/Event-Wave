const ListView = ({eventsInfo})=>{
    
    return( 
        <div>
                    <ul>
                        {eventsInfo.map((event, index) => <li className="Event-Card" key={index}>
                            Event name : <b>{event.event_name}</b> <br />
                            Date : <b>{event.event_date}</b> <br />
                            By : <b>{event.creator_username}</b>
                            <div className="event-description">{event.description}</div>
                        </li>)}
                    </ul>
                </div>
    );
}

export default ListView;