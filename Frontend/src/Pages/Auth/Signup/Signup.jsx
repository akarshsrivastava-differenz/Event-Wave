import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Signup.css"
import AuthAbout from '../Components/AuthAbout';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm, Controller } from 'react-hook-form';


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

    const email = watch("signup.email");
    const fName = watch("signup.fName");
    const lName = watch("signup.lName");
    const phoneNumber = watch("signup.phoneNumber");
    const role = watch("signup.role");
    const password = watch("signup.password");
    const rePassword = watch("rePassword");

    const onSubmit = (data) => {
        console.log(data);
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
                                    rules={{ required: true, maxLength: 20 }}
                                    render={({ field }) => {
                                        return <Form.Control isInvalid={!!errors.signup?.email} {...field} type="email" placeholder="Enter email" />
                                    }}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.signup?.email && "Email is required."}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="fName">
                                        <Form.Label>First name</Form.Label>
                                        <Controller
                                            name="signup[fName]"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field }) => {
                                                return <Form.Control isInvalid={!!errors.signup?.fName} {...field} type="text" placeholder="Enter first name" />
                                            }}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.signup?.fName && "First name is required."}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="lName">
                                        <Form.Label>Last name</Form.Label>
                                        <Controller
                                            name="signup[lName]"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field }) => {
                                                return <Form.Control {...field} isInvalid={!!errors.signup?.lName} type="text" placeholder="Enter last name" />
                                            }}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.signup?.lName && "Last name is required."}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="phoneNumber">
                                        <Form.Label>Contact number</Form.Label>
                                        <Controller
                                            name="signup[phoneNumber]"
                                            control={control}
                                            rules={{ required: true, maxLength: 10 }}
                                            render={({ field }) => {
                                                return <Form.Control {...field} isInvalid={!!errors.signup?.phoneNumber} type="text" placeholder="Enter contact number" />
                                            }}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.signup?.phoneNumber && "Contact number is required."}
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
                                            rules={{ required: true }}
                                            render={({ field }) => {
                                                return <Form.Control isInvalid={!!errors.signup?.password} type="password" placeholder="Password" {...field} />
                                            }}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.signup?.password && "Password is required."}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3" controlId="rePassword">
                                        <Form.Label>Re-enter Password</Form.Label>
                                        <Controller
                                            name="rePassword"
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
                                            {errors.signup?.rePassword?.message}
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