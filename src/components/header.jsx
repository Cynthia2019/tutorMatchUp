import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import API from '../utils/API'

const config = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }, 
    withCredentials: true
}
export default class Header extends React.Component {
    constructor(){
        super()
        this.state = {
            user: false, 
            code: null
        }
    }
    async getUserFromDB () {
        await API.get('/',config)
        .then(res=>{this.setState({user: true})})
        .catch(err=>{if(err.code !== '404'){console.log(err)}})
    }
    componentDidMount=()=>{
        this.getUserFromDB()
    }
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
                        <Nav>
                            {this.state.user?<Nav.Link href='/profile'>Profile</Nav.Link>:<></>}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}