import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css";
import { useUser } from '../../../contexts/UserContext';
import axios from 'axios';
import AuthAbout from "../Components/AuthAbout";
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import { useForm, Controller } from 'react-hook-form';
import { toast, Bounce } from 'react-toastify';

const Login = () => {
    const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    const navigate = useNavigate();
    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            login: {
                email: "",
                password: ""
            }
        }
    });

    const { login } = useUser();

    const handleLogin = async (data) => {
        try {
            const { email, password } = data.login;
            const result = await axios.post(`${baseUrl}/users/login`, { email, password });
            const userData = result.data;
            console.log(userData);
            if (userData.userId) {
                login(userData);
                navigate("/dashboard");
                toast.success("User logged in successfully!", {
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
            else {
                toast.error("Invalid credentials or User doesn't exists!", {
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
        catch (err) {
            toast.error("Invalid credentials or User doesn't exists!", {
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
        <div id="main-login">

            <AuthAbout />

            <div className="login-right">
                <div className="login-right-static-text">
                    <h1>Login</h1>
                    <h6>Enter your credentials to access your account</h6>
                </div>
                <div className="login-right-main-form">
                    <Form onSubmit={handleSubmit(handleLogin)}>
                        <Form.Group className="mb-3" controlId="login[email]">
                            <Form.Label>Email address</Form.Label>
                            <Controller
                                name="login[email]"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => {
                                    return <Form.Control isInvalid={!!errors.login?.email} {...field} type="email" placeholder="Enter email" />
                                }}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.login?.email && "Email is required"}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="login[password]">
                            <Form.Label>Password</Form.Label>
                            <Controller
                                name="login[password]"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => {
                                    return <Form.Control {...field} isInvalid={!!errors.login?.password} type="password" placeholder="Password" />
                                }}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.login?.password && "Password is required!"}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button className="login-right-btn" type="submit">
                            Login
                        </Button>
                    </Form>
                </div>
                <div className="login-right-signup">
                    <h6>New here? &nbsp;<span><Link style={{ textDecoration: "none", color: "blue" }} to="/signup">Signup</Link></span></h6>
                </div>
            </div>
        </div>
    )
}

export default Login;