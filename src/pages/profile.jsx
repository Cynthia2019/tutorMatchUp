import React from 'react';
import Header from '../components/header'
import TuteeProfile from '../components/tuteeProfile'
import TutorProfile from '../components/tutorProfile'
import TimeSlotPicker from '../components/timeSlot'
import API from '../utils/API'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import defaultAvatar from '../img/default-user-icon-8.jpg'
import getWeek from '../utils/time'
import { Switch, Redirect } from 'react-router-dom'

const config = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }, 
    withCredentials: true
}

export default class ProfilePage extends React.Component {
    constructor(){
        super()
        this.state = {
            info: null,
            key: 'tutor-profile',
            redirect: false,
            week: null,
        }
    }
    componentDidMount=()=>{
        this.getInfoFromDB()
        const time = getWeek()
        this.setState({week:time})
    }
    async getInfoFromDB() {
        await API.get('/',config)
        .then(res=>{
            if(res.data === null){
                alert("Please Login First")
                this.setRediret()
            }
            this.setState({info:res.data})
    console.log(res)})
        .catch(err=>alert(err))
    }
    setRediret = () => {
        this.setState({redirect: true})
    }
    renderRedirect = () => {
        if(this.state.redirect){
            return(
                <Switch>
                    <Redirect from='/profile' to='/login'/>
                </Switch>)
        }
    }

    render(){
        var basicInfo
        const info = this.state.info?this.state.info:null
        if(info && info.tutee){
            basicInfo = info.tutee
        } else if (info && info.tutor){
            basicInfo = info.tutor
        } else {
            basicInfo = null
        }
        return(
            <div>
                <Header />
                {info===null?<div>{this.renderRedirect()}<h3>Loading infomation...</h3></div>:
                <Row>
                    <Col className='sideber-right' md={3} style={{boxShadow:'5px 5px 15px 3px rgba(0,0,0,0.2)',display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <h1 style={{margin:'20px'}}>Profile</h1>
                    <div className='Avatar' style={{backgroundImage:info.avatar?`url(${basicInfo.avatar})`:`url(${defaultAvatar})`, borderRadius:'50%',
                     width:'200px', height:'200px', margin:'0 20%',backgroundSize:'contain',boxShadow:'5px 5px 15px 3px rgba(0,0,0,0.2)'}}></div>
                    <div className='profile-name' style={{margin:'20px', fontSize:'30px'}}>{basicInfo.firstName} {basicInfo.lastName}</div>
                    </Col>

                    <Col md={9} className='profile-content' style={{padding:'40px', textAlign:'left',backgroundColor:'#b5c3cd'}} >
                    <Tabs defaultActiveKey='tutor-profile' onSelect={(k)=>{this.setState({key:k})}}>
                        <Tab title='As a Tutee' eventKey='tutee-profile'>
                            <TuteeProfile info={info.tutee} />
                        </Tab>
                        <Tab title='As a Tutor' eventKey='tutor-profile'>
                            <TutorProfile info={info.tutor}/>
                        </Tab>
                    </Tabs>
                    {this.state.key==='tutor-profile'?
                    <div className='schedule-time' style={{backgroundColor:'white', borderRadius:'25px', border:'none', boxShadow:'5px 5px 15px 3px rgba(0,0,0,0.2)', margin:'40px 0', padding:'30px'}}>
                        <Row style={{justifyContent:'space-between',margin:0,padding:'0 20px'}}>
                            <h3>This Week's Available Time Slots</h3>
                            <p>week: {this.state.week}</p>
                        </Row>
                        <TimeSlotPicker info={info.tutor}/>
                    </div>
                    :<></>}
                    </Col>
                                    
                </Row>}
            </div>
        )
    }
}
