import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class SignUpPage extends React.Component {
    render(){
        return(
            <div className='signup-page-layout' style={{display:'flex',flexDirection:'column',
            alignItems:'center',justifyContent:'center', padding:'10%'}}>
                <h3>Sign Up</h3>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your school email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder="Enter firstname" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Lase Name</Form.Label>
                                <Form.Control placeholder="Enter lastname" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Student ID</Form.Label>
                                <Form.Control placeholder="Enter your student ID" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button variant="link" href='/login' style={{margin:'0 10px'}}>
                        already have an account? Login!
                    </Button>
                </Form>
            </div>
        )
    }
}