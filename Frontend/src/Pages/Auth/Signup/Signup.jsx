import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Signup.css"
import AuthAbout from '../Components/AuthAbout';
import { Link, useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';


const Signup = () => {

    const { handleSubmit, control, watch, getValues ,formState: { errors } } = useForm({
        defaultValues: {
            signup: {
                email: "",
                fName: "",
                lName: "",
                phoneNumber: "",
                role: "attendee",
                password: "",
                rePassword: ""
            }
        }
    });
    
    const navigate = useNavigate();
    // const email = watch("signup.email");
    // const fName = watch("signup.fName");
    // const lName = watch("signup.lName");
    // const phoneNumber = watch("signup.phoneNumber");
    // const role = watch("signup.role");
    // const password = watch("signup.password");
    // const rePassword = watch("rePassword");

    const onSubmit = async (data) => {
        try{
            const {email , first_name , last_name , password , phone_number , role , } = data.signup;
            const response = await axios.post("http://localhost:8080/users/signup" , {email , first_name , last_name , password , phone_number , role});
            if(!response){
                console.log("User creation failed!");
                navigate("/signup");
            }
            console.log("User created successfully!");
            navigate("/login");
        }   
        catch(err){
            console.log(err);
        }
    }

    return (
        <div id="main-login">

            <AuthAbout />

            <div className="login-right">
                <div className="login-right-static-text">
                    <h1>Signup</h1>
                    <h6>Register your credentials to create your account</h6>
                </div>
                <div className="login-right-main-form">
                    <Container>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Controller
                                    control={control}
                                    name="signup[email]"
                                    rules={{ required: "Email is required.", maxLength: 20 }}
                                    render={({ field }) => {
                                        return <Form.Control isInvalid={!!errors.signup?.email} {...field} type="email" placeholder="Enter email" />
                                    }}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.signup?.email && errors.signup?.email?.message}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="first_name">
                                        <Form.Label>First name</Form.Label>
                                        <Controller
                                            name="signup[first_name]"
                                            control={control}
                                            rules={{ required: "First name is required." }}
                                            render={({ field }) => {
                                                return <Form.Control isInvalid={!!errors.signup?.first_name} {...field} type="text" placeholder="Enter first name" />
                                            }}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.signup?.first_name && errors.signup?.first_name?.message}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="last_name">
                                        <Form.Label>Last name</Form.Label>
                                        <Controller
                                            name="signup[last_name]"
                                            control={control}
                                            rules={{ required: "Last name is required." }}
                                            render={({ field }) => {
                                                return <Form.Control {...field} isInvalid={!!errors.signup?.last_name} type="text" placeholder="Enter last name" />
                                            }}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.signup?.last_name && errors.signup?.last_name?.message}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="phone_number">
                                        <Form.Label>Contact number</Form.Label>
                                        <Controller
                                            name="signup[phone_number]"
                                            control={control}
                                            rules={{ required: "Contact number is required.", maxLength: 10 }}
                                            render={({ field }) => {
                                                return <Form.Control {...field} isInvalid={!!errors.signup?.phone_number} type="text" placeholder="Enter contact number" />
                                            }}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.signup?.phone_number && errors.signup?.phone_number?.message}
                                        </Form.Control.Feedback>
                                    </Form.Group></Col>
                                <Col>
                                    <Form.Group as={Col} controlId="role">
                                        <Form.Label>Role</Form.Label>
                                        <Form.Select name="signup[role]" defaultValue="Attendee">
                                            <option>Attendee</option>
                                            <option>Organiser</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Controller
                                            name="signup[password]"
                                            control={control}
                                            rules={{ required: "Password is required." }}
                                            render={({ field }) => {
                                                return <Form.Control isInvalid={!!errors.signup?.password} type="password" placeholder="Password" {...field} />
                                            }}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.signup?.password && errors.signup?.password?.message}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3" controlId="signup[rePassword]">
                                        <Form.Label>Re-enter Password</Form.Label>
                                        <Controller
                                            name="signup[rePassword]"
                                            control={control}
                                            rules={{
                                                required: "Re-Enter the password.",
                                                validate: (value) => {
                                                    const mainPass = getValues("signup.password");
                                                    if (value !== mainPass) {
                                                        return "Passwords not matching";
                                                    }
                                                    return true;
                                                }
                                            }}
                                            render={({ field }) => {
                                                return <Form.Control isInvalid={!!errors.signup?.rePassword} {...field} type="password" placeholder="Password" />
                                            }}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.signup?.rePassword && errors.signup?.rePassword.message}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Button className="login-right-btn" variant="primary" type="submit">
                                Sign up
                            </Button>
                        </Form>
                    </Container>
                </div>
                <div className="login-right-signup">
                    <h6>Already have account? &nbsp;<span><Link style={{ textDecoration: "none", color: "blue" }} to="/login">Log in</Link></span></h6>
                </div>
            </div>
        </div>
    )
}

export default Signup;