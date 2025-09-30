import EventCard from "./EventCard";


const GridView = ({eventsInfo}) => {
    
    return (
        <div className="card-grid">
            {eventsInfo.map((event, index) => <EventCard key={index} info={event} />)}
        </div>
    );
}

export default GridView;