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
                            <Card.Title>{tutor.name}</Card.Title>
                            <Card.Text>class: {tutor.class}</Card.Text>
                            <Button variant="outline-info" onClick={this.handleShow}>Read More</Button>
                            <Modal show={this.state.show} onHide={this.handleClose} centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>{tutor.name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>GPA: {tutor.GPA}</p>
                                    <p>classes offered: {tutor.tutoring}</p>
                                    <p>contacts: 
                                        Email: {tutor.contactInfo.email}
                                        Phone: {tutor.contactInfo.phone}
                                    </p>
                                </Modal.Body>
                            </Modal>
                        </Card.Body>
                    </Card>
            </div>
        )
    }
}