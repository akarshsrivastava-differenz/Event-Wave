import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Signup.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

const Signup = () => {

    return (
        <div id="main-login">
            <div className="login-left">

                <div id="logo-container"><FontAwesomeIcon icon={faCalendar} /></div>

                <div>
                    <h3 className="login-left-text">Welcome to Event<span style={{ color: "var(--logo-shade-1)" }}>Wave</span></h3>
                    <h6 className="login-left-text">Discover amazing events and connect with your community</h6>
                </div>

                <div className="login-left-features">
                    <div className="left-features-icons"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                    <div>
                        <h6>Discover Events</h6>
                        <p>Find events that match your interests</p>
                    </div>
                </div>
                <div className="login-left-features">
                    <div className="left-features-icons"><FontAwesomeIcon icon={faBookmark} /></div>
                    <div>
                        <h6>Easy Booking</h6>
                        <p>Secure and instant ticket booking</p>
                    </div>
                </div>
                <div className="login-left-features">
                    <div className="left-features-icons"><FontAwesomeIcon icon={faPeopleArrows} /></div>
                    <div>
                        <h6>Connect</h6>
                        <p>Network with like-minded people</p>
                    </div>
                </div>

            </div>


            <div className="login-right">
                <div className="login-right-static-text">
                    <h1>Signup</h1>
                    <h6>Register your credentials to create your account</h6>
                </div>
                <div className="login-right-main-form">
                    <Form>
                        <Form.Group className="mb-3" controlId="login-email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="login-email">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="login-password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="login-password">
                            <Form.Label>Re-enter Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button className="login-right-btn" variant="primary" type="submit">
                            Sign up
                        </Button>
                    </Form>
                </div>
                <div className="login-right-signup">
                    <h6>Already have account? &nbsp;<span><Link style={{textDecoration:"none",color:"blue"}} to="/login">Log in</Link></span></h6>
                </div>
            </div>
        </div>
    )
}

export default Signup;