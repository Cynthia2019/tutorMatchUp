import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './tuteeProfile.css'
import Button from 'react-bootstrap/Button'
import API from '../utils/API'

export default class TuteeProfile extends React.Component {
    constructor(props){
        super(props)
        this.currentClass = React.createRef()
        this.gpa = React.createRef()
        this.phone = React.createRef()
        this.state = {
            readOnly: true,
            info: null
        }
    }
    async editInfo () {
        await API.patch('/users/updateInfo', {
            id: this.props.info._id,
            currentClass: this.currentClass.current.value?this.currentClass.current.value:this.props.info.currentClass, 
            gpa: this.gpa.current.value?this.gpa.current.value:this.props.info.gpa,
            phone: this.phone.current.value?this.phone.current.value:this.props.info.phone
        }).then(res=>{
            this.currentClass.current.value = res.data.updatedClass
            this.setState({readOnly:true})
            alert("Changes Saved")
            this.refreshPage()
        }).catch(err=>{alert(err)})
    }
    handleEdit = (e) => {
        e.preventDefault()
        this.setState({readOnly: false})
    }
    async getTuteeInfo(){
        await API.get(`/users/getOneUser/${this.props.info._id}`)
        .then(res=>{console.log(res)
        this.setState({info: res.data})})
    }
    componentDidMount = () => {
        this.getTuteeInfo()
    }
    hancdleSave = (e) => {
        e.preventDefault()
        this.editInfo()
    }
    //refresh page when update info
    refreshPage = () => {
        window.location.reload()
    }
    render(){
        const info = this.state.info
    return(
        <Row>
            <Col style={{display:'flex', alignItems:'center'}}>
                <Col className='profile-key' xs={3}>
                    <ul style={{listStyle:'none', }}>
                        <li>Email: </li>
                        <li>Student ID: </li>
                        <li>Current Class: </li>
                        <li>GPA: </li>
                        <li>Phone: </li>
                    </ul>
                </Col>
                <Col className='profile-value' xs={4}>
                    {info===null?<></>:
                    <ul style={{listStyle:'none'}}>
                        <li>{info.email}</li>
                        <li>{info.studentID}</li>
                        <li><input type='text' label='class' placeholder={info.currentClass} readOnly={this.state.readOnly} ref={this.currentClass}/></li>
                        <li><input type='text' label='gpa' placeholder={info.gpa} readOnly={this.state.readOnly} ref={this.gpa}/></li>
                        <li><input type='text'label='phone' placeholder={info.phone} readOnly={this.state.readOnly} ref={this.phone}/></li>
                    </ul>}
                </Col>
                <Col xs={4}>
                    {this.state.readOnly?<Button variant='outline-dark' onClick={this.handleEdit} style={{alignSelf:'flex-end', padding:'20px'}}>Edit</Button>:
                    <Button variant="outline-success" onClick={this.hancdleSave} style={{alignSelf:'flex-end', padding:'20px'}}>Save</Button>}
                </Col>
            </Col>
        </Row>
    )
}}
