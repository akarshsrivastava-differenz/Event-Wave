import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./EventCard.css";

const EventCard = ({ info }) => {

    return ( 
        <Card className='event-card'>
            <Card.Header>By <b>{info.creator_username}</b></Card.Header>
            <Card.Header>On <b>{info.event_date}</b></Card.Header>
            <Card.Body>
                <Card.Title>{info.event_name}</Card.Title>
                <Card.Text>
                    {info.description}
                </Card.Text>
                <Button variant="primary">View</Button>
            </Card.Body>
        </Card>
    );
}

export default EventCard