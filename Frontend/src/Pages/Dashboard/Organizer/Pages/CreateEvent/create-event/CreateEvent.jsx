import "./CreateEvent.css";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { toast, Bounce } from "react-toastify";


const CreateEvent = () => {
    const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

    const { handleSubmit, control, register, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const {
            event_title,
            event_description,
            event_category,
            startDate,
            endDate,
            startTime,
            endTime,
            event_venue_address,
            event_price,
            event_size
        } = data.information;

        const event_start = `${startDate}T${startTime}:00`;
        const event_end = `${endDate}T${endTime}:00`;

        const eventDetails = { event_title, event_description, event_category, event_start, event_end, event_venue_address, event_price, event_size };

        try {
            const response = await axios.post(`${baseUrl}/events/create`, { eventDetails } , {withCredentials:true});
            toast.success('Event created successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        catch (err) {
            toast.error('Event creation failed, Try later!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
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
                            <Form.Group className="mb-3" controlId="information[event_title]">
                                <Form.Label>Event Title</Form.Label>
                                <Controller
                                    name="information[event_title]"
                                    control={control}
                                    rules={{ required: true, maxLength: 15 }}
                                    render={({ field }) => {
                                        return <Form.Control isInvalid={!!errors.information?.event_title} type="text" placeholder="Event title" {...field} />
                                    }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.information?.event_title && "Event title is required."}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="information[event_description]">
                                <Form.Label>Description</Form.Label>
                                <Controller
                                    name="information[event_description]"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => {
                                        return <Form.Control isInvalid={!!errors.information?.event_description} {...field} as="textarea" rows={3} placeholder="Describe your event description..." />
                                    }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.information?.event_description && "Event description is required."}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="information[event_category]">
                                <Form.Label>Event Category</Form.Label>
                                <Form.Select {...register("information.event_category")} aria-label="Event Category">
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
                                        <Form.Group className="mb-3" controlId="information[event_venue_address]">
                                            <Form.Label>Event Venue Address</Form.Label>
                                            <Controller
                                                name="information[event_venue_address]"
                                                control={control}
                                                rules={{ required: true }}
                                                render={({ field }) => {
                                                    return <Form.Control isInvalid={!!errors.information?.event_venue_address} type="text" placeholder="Event Venue" {...field} />
                                                }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.information?.event_venue_address && "Event venue is required!"}
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
                                        <Form.Group className="mb-3" controlId="information[event_price]">
                                            <Form.Label>Ticket Price</Form.Label>
                                            <Controller
                                                name="information[event_price]"
                                                rules={{ required: true }}
                                                control={control}
                                                render={({ field }) => {
                                                    return <Form.Control isInvalid={!!errors.information?.event_price} type="number" placeholder="Price" {...field} />
                                                }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.information?.event_price && "Event ticket price is required!"}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="information[event_size]">
                                            <Form.Label>Quantity</Form.Label>
                                            <Controller
                                                name="information[event_size]"
                                                control={control}
                                                rules={{ required: true }}
                                                render={({ field }) => {
                                                    return <Form.Control isInvalid={!!errors.information?.event_size} {...field} type="number" rows={3} placeholder="Ticket Quantity" />
                                                }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.information?.event_size && "Event ticket number is required!"}
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