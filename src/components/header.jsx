import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'

export default class Header extends React.Component {
    render() {
        return(
            <div>
                <Navbar bg='light' variant='light'>
                    <Navbar.Brand>TutorMatchUp</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <Nav.Link href='/'>Home</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href='/signup'>Sign Up</Nav.Link>
                            <Nav.Link href='/login'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}