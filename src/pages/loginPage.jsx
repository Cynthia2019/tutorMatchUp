import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class LoginPage extends React.Component {
    render(){
        return(
            <div className='signup-page-layout'style={{display:'flex',flexDirection:'column',
            alignItems:'center',justifyContent:'center', padding:'10%'}}>
                <h3>Login</h3>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your school email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button variant="link" href='/signup' style={{margin:'0 10px'}}>
                        Don't have an account? Sign Up!
                    </Button>
                </Form>
            </div>
        )
    }
}