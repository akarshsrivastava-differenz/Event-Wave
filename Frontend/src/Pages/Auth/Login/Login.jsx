import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css";
import { useState } from 'react';
import { useUser } from '../../../contexts/UserContext';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

const Login = () => {

    const navigate = useNavigate();

    const { login } = useUser();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const result = await axios.get("http://localhost:3000/users");
            const userData = result.data;
            const isExist = userData.find((user) => user.email === email && user.password === password);
            if (isExist) {
                login(isExist);
                navigate("/");
            }
            else {
                console.log("User does not exists");
            }
        }
        catch (err) {
            console.log(err);
        }
    }

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
                    <h1>Login</h1>
                    <h6>Enter your credentials to access your account</h6>
                </div>
                <div className="login-right-main-form">
                    <Form>
                        <Form.Group className="mb-3" controlId="login-email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={handleEmail} value={email} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="login-password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handlePassword} value={password} type="password" placeholder="Password" />
                        </Form.Group>

                        <Button onClick={handleLogin} className="login-right-btn" type="submit">
                            Log in
                        </Button>
                    </Form>
                </div>
                <div className="login-right-signup">
                    <h6>New here? &nbsp;<span><Link style={{textDecoration:"none",color:"blue"}} to="/signup">Signup</Link></span></h6>
                </div>
            </div>
        </div>
    )
}

export default Login;