import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Signup.css"

const Signup = () => {

    return (
        <div id="signup-page">
            <Form id="signup-box">
                <Form.Group className="mb-3" controlId="signup-email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="signup-username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="signup-password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button style={{float:"right"}} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Signup;