import React, { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './tuteeProfile.css'
import Button from 'react-bootstrap/Button'

function TuteeProfile (props) {
    const info = props.info.tutee
    const [readOnly, useReadOnly] = useState(false)
    console.log(info,"info")
    return(
        <Row>
            <Col style={{borderRight:'1px solid dimgrey',display:'flex',flexDirection:'column',alignItems:'center'}} md={3}>
                <h1 style={{margin:'20px'}}>Profile</h1>
                <div className='Avatar' style={{backgroundColor:info.avatar?'transparent':'darkgreen', 
            backgroundImage:info.avatar?`url${info.avatar}`:"none", borderRadius:'50%', width:'200px', height:'200px', margin:'0 20%'}}></div>
                <div className='profile-name' style={{margin:'20px', fontSize:'30px'}}>{info.firstName} {info.lastName}</div>
            </Col>
            <Col md={8} style={{display:'flex', alignItems:'center'}}>
                <Col className='profile-key' xs={3}>
                    <ul style={{listStyle:'none', }}>
                        <li>Email: </li>
                        <li>Current Class: </li>
                        <li>GPA: </li>
                        <li>Student ID: </li>
                        <li>Phone: </li>
                    </ul>
                </Col>
                <Col className='profile-value' xs={4}>
                    <ul style={{listStyle:'none', }}>
                        <li>{info.email}</li>
                        <li><input type='text' label='class' readOnly={readOnly}/>{info.currentClass}</li>
                        <li><input type='text' label='gpa' placeholder={info.gpa} readOnly={readOnly}/></li>
                        <li><input type='text'label='studentID' placeholder={info.studentID} readOnly={readOnly}/></li>
                        <li><input type='text'label='phone' placeholder={info.phone} readOnly={readOnly}/></li>
                    </ul>
                </Col>
                <Col xs={2}>
                    <Button variant='outline-dark'>Edit</Button>
                </Col>
            </Col>
        </Row>
    )
}

export default TuteeProfile;