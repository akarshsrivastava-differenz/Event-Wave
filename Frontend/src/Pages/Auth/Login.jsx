import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css";
import { useState } from 'react';
import { useUser } from '../../contexts/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router';

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
            const isExist = userData.find((user)=> user.email===email && user.password===password);
            if(isExist){
                login(isExist);
                navigate("/");
            }
            else{
                console.log("User does not exists");
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div id="login-page">
            <Form id="login-box">
            <h1 style={{textAlign:"center",color:"#916BBF"}}>Login</h1> <br />
                <Form.Group className="mb-3" controlId="login-email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmail} value={email} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="login-password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlePassword} value={password} type="password" placeholder="Password" />
                </Form.Group>

                <Button onClick={handleLogin} style={{  border : "none" , float: "right", backgroundColor:"#916BBF" }} variant="primary" type="submit">
                    Log in
                </Button>
            </Form>
        </div>
    )
}

export default Login;