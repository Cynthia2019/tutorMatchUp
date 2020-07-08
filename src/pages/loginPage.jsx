import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import API from '../utils/API'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

const config = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }, 
    withCredentials: true
}

export default class LoginPage extends React.Component {
    constructor(){
        super()
        this.email = React.createRef()
        this.password = React.createRef()
        this.state = {
            redirect: false
        }
    }
    handleClick = (e) => {
        e.preventDefault()
        this.login()
    }
    async login(){
        await API.post('/auth/login', {
            email: this.email.current.value,
            password: this.password.current.value
        }, config).then(res=>{
            alert("Login Successful")
            this.setRediret()
    }).catch(err=>{
        if(err.code==='404'){alert('Invalid Email')}
        else if(err.code==='500'){alert('Server Error')}
        else if (err.code==='401'){alert('Incorrect Password')}
        else{alert(err.message)}
    })
    }
    setRediret = () => {
        this.setState({redirect: true})
    }
    renderRedirect = () => {
        if(this.state.redirect){
            return(
                <Switch>
                    <Redirect from='/login' to='/'/>
                </Switch>)
        }
    }
    render(){
        return(
            <div className='signup-page-layout'style={{display:'flex',flexDirection:'column',
            alignItems:'center',justifyContent:'center', padding:'10%'}}>
                {this.renderRedirect()}
                <h3>Login</h3>
                <Form>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your school email" ref={this.email}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={this.password}/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleClick}>
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