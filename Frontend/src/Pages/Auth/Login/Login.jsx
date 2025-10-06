import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css";
import { useUser } from '../../../contexts/UserContext';
import axios from 'axios';
import AuthAbout from "../Components/AuthAbout";
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import { useForm , Controller } from 'react-hook-form';

const Login = () => {

    const navigate = useNavigate();
    const {handleSubmit , control , watch , formState:{errors}} = useForm({
        defaultValues:{
            login:{
                email:"",
                password:""
            }
        }
    });

    const { login } = useUser();
    const email = watch("login[email]");
    const password = watch("login[password]");

    const handleLogin = async () => {
        try {
            const result = await axios.post("http://localhost:8000/users/login" , {email , password} , {withCredentials:true});
            const userData = result.data;
            console.log(userData);
            if (userData.userId) {
                login(userData);
                navigate("/");
            }
            else {
                console.log("User does not exists");
            }
        }
        catch (err) {
            console.log("Error while connecting to server : " , err);
        }
    }

    return (
        <div id="main-login">

            <AuthAbout/>

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
                            rules={{required : true}}
                            render={({field})=>{
                                return  <Form.Control isInvalid={!!errors.login?.email} {...field} type="email" placeholder="Enter email" />
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
                            rules={{required : true}}
                            render={({field})=>{
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
                    <h6>New here? &nbsp;<span><Link style={{textDecoration:"none",color:"blue"}} to="/signup">Signup</Link></span></h6>
                </div>
            </div>
        </div>
    )
}

export default Login;