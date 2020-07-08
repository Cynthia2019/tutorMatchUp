import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


export default class infoCard extends React.Component {
    constructor(){
        super();
        this.state = {
            tutorInfo: [],
            show: false,
        }
    }
    getInfoFromDB=()=>{}
    componentDidMount(){
        this.getInfoFromDB()
        //this.setState({tutorInfo: info})
    }
    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});
    render(){
        const { tutor } = this.props
        return(
            <div style={{display:'flex', flexDirection:'column', 
            justifyContent:'center', alignItems:'center'}}>
                    <Card className='info-card'
                    style={{width:"70%", boxShadow:"4px 4px 4px 0 rgba(0,0,0,0.15)", margin:'10px 5px'}}>
                        <Card.Body>
                            <Card.Title>{tutor.firstName} {tutor.lastName}</Card.Title>
                            <Card.Text>class: {tutor.currentClass}</Card.Text>
                            <Card.Text>subjects offered: {tutor.subject}</Card.Text>
                            <Button variant="outline-info" onClick={this.handleShow}>Read More</Button>
                            <Modal show={this.state.show} onHide={this.handleClose} centered>
                                <Modal.Header closeButton>
                                <Modal.Title>{tutor.firstName} {tutor.lastName}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>GPA: {tutor.gpa}</p>
                                    <p>subjects offered: {tutor.subject}</p>
                                    <div>contacts: 
                                        <div style={{marginLeft:'20px'}}>Email: {tutor.email}</div>
                                        <div style={{marginLeft:'20px'}}>Phone: {tutor.phone}</div>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </Card.Body>
                    </Card>
            </div>
        )
    }
}