import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

const config = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }, 
    withCredentials: true
}

export default class SignUpPage extends React.Component {
    constructor(){
        super()
        this.firstName = React.createRef()
        this.lastName = React.createRef()
        this.email = React.createRef()
        this.password = React.createRef()
        this.studentID = React.createRef()
        this.phone = React.createRef()
        this.avatar = React.createRef()
        this.currentClass = React.createRef()
        this.gpa = React.createRef()
        this.subjects = React.createRef()
        this.state = {
            redirect: false 
        }
    }
    handleTuteeClick = (e) => {
        e.preventDefault()
        this.SignUpAsUser()
    }
    async SignUpAsUser () {
        console.log(this.firstName.current.value,this.lastName.current.value
            ,this.email.current.value,this.password.current.value, this.studentID.current.value,)
        await axios.post('http://localhost:5000/register/tutees', 
        {
            firstName: this.firstName.current.value,
            lastName: this.lastName.current.value,
            email:this.email.current.value,
            password:this.password.current.value, 
            studentID: this.studentID.current.value,
            currentClass: this.currentClass.current.value,
            gpa: this.gpa.current.value, 
            avatar: this.avatar.current.value
        }, config).then(res=>{
            alert("Sign Up Successfully")
            this.setRedirect()
        }).catch(err=>{alert(err)})
    }
    handleTutorClick = (e) => {
        e.preventDefault()
        this.SignUpAsTutor()
    }
    async SignUpAsTutor () {
        console.log(this.firstName.current.value,this.lastName.current.value,this.email.current.value,this.password.current.value, this.studentID.current.value)
        await axios.post('http://localhost:5000/register/tutors', 
        {
            firstName: this.firstName.current.value,
            lastName: this.lastName.current.value,
            email:this.email.current.value,
            password:this.password.current.value, 
            studentID: this.studentID.current.value,
            currentClass: this.currentClass.current.value,
            gpa: this.gpa.current.value,
            avatar: this.avatar.current.value,
            subjects: this.subjects.current.value
        }, config).then(res=>{
            alert("Sign Up Successfully")
            this.setRedirect()
        }).catch(err=>{alert(err)})
    }
    setRedirect = () => {
        this.setState({redirect: true})
    }
    renderRedirect = () => {
        if(this.state.redirect){
            return(
                <Switch>
                    <Redirect from='/signup' to='/'/>
                </Switch>)
        }
    }
    render(){
        return(
            <div className='signup-page-layout' style={{display:'flex',flexDirection:'column',
            alignItems:'center',justifyContent:'center', padding:'10%'}}>
                {this.renderRedirect()}
                <h3>Sign Up</h3>
                <Tabs defaultActiveKey='Tutee'>
                    <Tab eventKey='Tutee' title='Sign Up As Tutee' style={{margin:'0 10px'}}>
                    <Form>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your school email" ref={this.email}/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder="Enter firstname" ref={this.firstName}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder="Enter lastname" ref={this.lastName}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Student ID</Form.Label>
                                <Form.Control placeholder="Enter your student ID" ref={this.studentID}/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={this.password}/>
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Current Class</Form.Label>
                                <Form.Control ref={this.currentClass}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>GPA</Form.Label>
                                <Form.Control ref={this.gpa}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <label style={{margin:'0 10px 10px 10px'}}>Upload Your Avatar</label>
                                <input type='file' name='Avatar' ref={this.avatar}></input>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit" onClick={this.handleTuteeClick}>
                        Submit
                    </Button>
                    <Button variant="link" href='/login' style={{margin:'0 10px'}}>
                        already have an account? Login!
                    </Button>
                </Form>
                    </Tab>


                    <Tab eventKey='Tutor' title='Sign Up As Tutor' style={{margin:'0 10px'}}>
                    <Form>
                    <Form.Group >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your school email" ref={this.email}/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder="Enter firstname" ref={this.firstName}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder="Enter lastname" ref={this.lastName}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Student ID</Form.Label>
                                <Form.Control placeholder="Enter your student ID" ref={this.studentID}/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={this.password}/>
                    </Form.Group>
                    <Row>
                    <Col>
                        <Form.Group>
                                <Form.Label>Current Class</Form.Label>
                                <Form.Control ref={this.currentClass}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>GPA</Form.Label>
                                <Form.Control ref={this.gpa}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <label style={{margin:'0 10px 10px 10px'}}>Upload Your Avatar</label>
                                <input type='file' name='Avatar' ref={this.avatar}></input>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group>
                        <Form.Label>Subjects Taught</Form.Label>
                        <Form.Control ref={this.subjects}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleTutorClick}>
                        Submit
                    </Button>
                    <Button variant="link" href='/login' style={{margin:'0 10px'}}>
                        already have an account? Login!
                    </Button>
                </Form>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}