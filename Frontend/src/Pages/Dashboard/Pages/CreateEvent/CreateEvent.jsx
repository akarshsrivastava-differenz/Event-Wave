import "./CreateEvent.css";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CreateEvent = () => {
    return (
        <div className="create-event-main">
            <div className="create-event-header">
                <h3>Create Event</h3>
                <p>Set up your new event and start selling tickets</p>
            </div>

            <div className="create-event-form-container">

                <div className="form-information-section">
                    <h4>Event Information</h4>
                    <div className="form-information-section-main">
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Event Tittle</Form.Label>
                                <Form.Control type="text" placeholder="Event tittle" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Describe your event description..." />
                            </Form.Group>
                            <Form.Label>Event Category</Form.Label>
                            <Form.Select aria-label="Event Category">
                                <option value="conference">Conference</option>
                                <option value="workshop">Workshop</option>
                                <option value="concert">Concert</option>
                                <option value="festival">Festival</option>
                                <option value="networking">Networking</option>
                            </Form.Select>
                            <Form.Group controlId="eventImages" className="mb-3 mt-3">
                                <Form.Label>Event Images</Form.Label>
                                <Form.Control type="file" multiple />
                            </Form.Group>
                        </Form>
                    </div>
                </div>

                <div className="form-schedule-location">
                    <h4>Schedule & Location</h4>
                    <div className="form-schedule-location-main">
                        <Container fluid="md">
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="Form.startDate">
                                            <Form.Label>Event Start Date</Form.Label>
                                            <Form.Control type="date" placeholder="Start Date" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="Form.endDate">
                                            <Form.Label>Event End Date</Form.Label>
                                            <Form.Control type="date" placeholder="End Date" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="Form.startTime">
                                            <Form.Label>Event Start Time</Form.Label>
                                            <Form.Control type="time" placeholder="Start Time" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="Form.endTime">
                                            <Form.Label>Event End Time</Form.Label>
                                            <Form.Control type="time" placeholder="End Time" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="Form.venue">
                                            <Form.Label>Event Venue Address</Form.Label>
                                            <Form.Control type="text" placeholder="Event Venue" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </div>
                </div>

                <div className="form-ticket-types form-schedule-location">
                    <h4>Ticket Price</h4>
                    <div className="form-ticket-types-main form-information-section-main">
                        <Container fluid="md">
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="exampleForm.price">
                                            <Form.Label>Ticket Price</Form.Label>
                                            <Form.Control type="number" placeholder="Price" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="exampleForm.Quantity">
                                            <Form.Label>Quantity</Form.Label>
                                            <Form.Control type="number" rows={3} placeholder="Ticket Quantity" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </div>
                </div>

                <div className="create-btn-container">
                    <button className="create-btn">Create Event</button>
                </div>

            </div>
        </div>
    );
}

export default CreateEvent;