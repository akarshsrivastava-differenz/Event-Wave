import "./CreateEvent.css";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm, Controller } from "react-hook-form";


const CreateEvent = () => {

    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="create-event-main">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="create-event-header">
                    <h3>Create Event</h3>
                    <p>Set up your new event and start selling tickets</p>
                </div>

                <div className="create-event-form-container">

                    <div className="form-information-section">
                        <h4>Event Information</h4>
                        <div className="form-section-main">
                            <Form.Group className="mb-3" controlId="information[eventTitle]">
                                <Form.Label>Event Title</Form.Label>
                                <Controller
                                    name="information[eventTitle]"
                                    control={control}
                                    rules={{ required: true, maxLength: 15 }}
                                    render={({ field }) => {
                                        return <Form.Control isInvalid={!!errors.information?.eventTitle} type="text" placeholder="Event title" {...field} />
                                    }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.information?.eventTitle && "Event title is required."}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="information[description]">
                                <Form.Label>Description</Form.Label>
                                <Controller
                                    name="information[description]"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => {
                                        return <Form.Control isInvalid={!!errors.information?.description} {...field} as="textarea" rows={3} placeholder="Describe your event description..." />
                                    }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.information?.description && "Event description is required."}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="information[eventCategory]">
                                <Form.Label>Event Category</Form.Label>
                                <Form.Select name="information[eventCategory]" aria-label="Event Category">
                                    <option value="conference">Conference</option>
                                    <option value="workshop">Workshop</option>
                                    <option value="concert">Concert</option>
                                    <option value="festival">Festival</option>
                                    <option value="networking">Networking</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="information.eventImages" className="mb-3">
                                <Form.Label>Event Images</Form.Label>
                                <Form.Control type="file" multiple name="information[eventImages]" />
                            </Form.Group>
                        </div>
                    </div>


                    <div className="form-schedule-location">
                        <h4>Schedule & Location</h4>
                        <div className="form-section-main">
                            <Container fluid="md">
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="information[startDate]">
                                            <Form.Label>Event Start Date</Form.Label>
                                            <Controller
                                                name="information[startDate"
                                                control={control}
                                                rules={{ required: true }}
                                                render={({ field }) => {
                                                    return <Form.Control isInvalid={!!errors.information?.startDate} {...field} type="date" placeholder="Start Date" />
                                                }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.information?.startDate && "Event start date is required."}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="information[endDate]">
                                            <Form.Label>Event End Date</Form.Label>
                                            <Controller
                                                name="information[endDate]"
                                                control={control}
                                                rules={{ required: true }}
                                                render={({ field }) => {
                                                    return <Form.Control isInvalid={!!errors.information?.endDate} type="date" placeholder="End Date" {...field} />
                                                }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.information?.endDate && "Event end date is required!"}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="information[startTime]">
                                            <Form.Label>Event Start Time</Form.Label>
                                            <Controller
                                                name="information[startTime]"
                                                control={control}
                                                rules={{ required: true }}
                                                render={({ field }) => {
                                                    return <Form.Control isInvalid={!!errors.information?.startTime} type="time" placeholder="End Time" {...field} />
                                                }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.information?.startTime && "Event start time is required!"}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="information[endTime]">
                                            <Form.Label>Event End Time</Form.Label>
                                            <Controller
                                                name="information[endTime]"
                                                control={control}
                                                rules={{ required: true }}
                                                render={({ field }) => {
                                                    return <Form.Control isInvalid={!!errors.information?.endTime} type="time" placeholder="End Time" {...field} />
                                                }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.information?.endTime && "Event end time is required!"}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="information[venue]">
                                            <Form.Label>Event Venue Address</Form.Label>
                                            <Controller
                                                name="information[venue]"
                                                control={control}
                                                rules={{ required: true }}
                                                render={({ field }) => {
                                                    return <Form.Control isInvalid={!!errors.information?.venue} type="text" placeholder="Event Venue" {...field} />
                                                }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.information?.venue && "Event venue is required!"}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>

                    <div className="form-ticket-types form-schedule-location">
                        <h4>Ticket Price</h4>
                        <div className="form-section-main">
                            <Container fluid="md">
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="information[price]">
                                            <Form.Label>Ticket Price</Form.Label>
                                            <Controller
                                                name="information[price]"
                                                rules={{ required: true }}
                                                control={control}
                                                render={({ field }) => {
                                                    return <Form.Control isInvalid={!!errors.information?.price} type="number" placeholder="Price" {...field} />
                                                }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.information?.price && "Event ticket price is required!"}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="information[quantity]">
                                            <Form.Label>Quantity</Form.Label>
                                            <Controller
                                                name="information[quantity]"
                                                control={control}
                                                rules={{ required: true }}
                                                render={({ field }) => {
                                                    return <Form.Control isInvalid={!!errors.information?.quantity} {...field} type="number" rows={3} placeholder="Ticket Quantity" />
                                                }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.information?.quantity && "Event ticket number is required!"}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>

                    <div className="create-btn-container">
                        <button className="create-btn">Create Event</button>
                    </div>
                </div>
            </Form>

        </div>
    );
}

export default CreateEvent;