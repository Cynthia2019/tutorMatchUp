import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'


export default class infoCard extends React.Component {
    constructor(){
        super();
        this.state = {
            show: false,
        }
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
                            <Card.Text>Class: {tutor.currentClass}</Card.Text>
                            <Card.Text>Subjects Offered: {tutor.subject}</Card.Text>
        <Card.Text style={{display:'flex'}}>This Week's Available Time: {tutor.availableTime?
        tutor.availableTime.map((obj, i)=>
            <OverlayTrigger trigger='hover' placement='top' overlay={
                <Popover>
                    <Popover.Content>
                        {obj.slot.map(s=><div style={{padding:'5px 0'}}>{s}</div>)}
                    </Popover.Content>
                </Popover>
            } key={i} style={{padding:'0 10px'}}>
            {obj.slot.length===0?<Button disabled style={{padding:'0 20px',border:'none',backgroundColor:'#999',color:'black',fontWeight:'200',boxShadow:'1px 1px 3px 1px rgba(0,0,0,0.15)',margin:'0 10px',cursor:'initial'}}>{obj.day}</Button>:
            <Button style={{padding:'0 20px',border:'none',backgroundColor:'white',color:'black',fontWeight:'200',boxShadow:'1px 1px 3px 1px rgba(0,0,0,0.15)',margin:'0 10px'}}>{obj.day}</Button>}
            </OverlayTrigger>
        ):<></>}</Card.Text>
                            <Button variant="outline-info" onClick={this.handleShow} disabled={this.state.disable}>Read More</Button>
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