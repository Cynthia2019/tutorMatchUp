import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import API from '../utils/API'
import {PlusOutlined} from '@ant-design/icons'

import './timeSlot.css'
import { Dropdown } from 'react-bootstrap';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const slots = ['8:00-9:00', '9:00-10:00', '10:00-11:00', '11:00-12:00','12:00-13:00','13:00-14:00','14:00-15:00','15:00-16:00','16:00-17:00','17:00-18:00','18:00-19:00','19:00-20:00']
const config = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }, 
    withCredentials: true
}
export default class TimeSlotPicker extends React.Component {
    constructor(props){
        super(props)
        this.state={
            timeSlots: [
                {day:"Mon", slot:[]},
                {day:"Tue", slot:[]},
                {day:"Wed", slot:[]},
                {day:"Thu", slot:[]},
                {day:"Fri", slot:[]},
                {day:"Sat", slot:[]},
                {day:"Sun", slot:[]},
            ]
        }
    }
    //refresh page when update info
    refreshPage = () => {
        window.location.reload()
    }
    //submit changes 
    async updateSchedule(){
        await API.patch('/tutors/updateSchedule', {
            id: this.props.info._id,
            schedule: this.state.timeSlots
        }, config).catch(err=>{this.setState({error: err.message})})
        if(!this.state.error){
            alert("Your Schedule is up-to-date")
            this.refreshPage()
    }}
    async getTimeSlot(){
        await API.get(`/tutors/getOneTutor/${this.props.info._id}`,config)
        .then(res=>{console.log(res)
        this.setState({timeSlots: res.data.availableTime})})
    }
    handleUpdate = () => {
        this.updateSchedule()
    }
    componentDidMount = () => {
        // if(this.props.info.availableTime.length===7){
        //     this.setState({timeSlots: this.props.info.availableTime})
        // }
        this.getTimeSlot()
    }
    handleSelect = (key) => {
        console.log(key)
        var day = key.slice(0,3)
        var slot = key.slice(4)
        var newTimeSlots = [...this.state.timeSlots]
        newTimeSlots.map(obj=>{if(obj.day===day){
            var arr = [...obj.slot]
            arr.push(slot)
            obj.slot = arr
        }})
        this.setState({timeSlots: newTimeSlots})
        console.log(this.state.timeSlots)
        //cannot directly push a new element in in an array, create a new copy of the array and modify the copied one
    }
    handleSlotClick = (ele, i) => {
        console.log(ele,i)
        var newTimeSlots = [...this.state.timeSlots]
        var arr = [...newTimeSlots[i].slot]
        newTimeSlots[i].slot  = arr.filter(item=>{return(item !== ele)})
        this.setState({timeSlots: newTimeSlots})
    }
    render(){
        return(
            <div className="slot-table" style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                {this.state.timeSlots.map((obj, i)=>{return(
                    <div className='add-slot' key={`add-slot-${i}`}>
                        
                        <div className={`day-${i}`} style={{fontWeight:'bold'}} key={`day-${i}`}>{obj.day}</div>
                        <div className={`available-slots`}>{obj.slot.map((ele)=>{return(
                        <li key={`${obj.day}-${ele}`} onClick={()=>{this.handleSlotClick(ele, i)}}>{ele}</li>)
                        })}
                        </div>

                        <Dropdown drop='right'onSelect={(key) =>this.handleSelect(key)}>
                            <Dropdown.Toggle className='add-slot'>
                                <PlusOutlined style={{color:'gray'}}/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {slots.map((slot, ind)=>{return(<Dropdown.Item eventKey={`${obj.day}-${slot}`} key={`${i}-${ind}`}>{slot}</Dropdown.Item>)})}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                )})}
            <Button onClick={this.handleUpdate} variant='outline-success'>Update</Button>
            </div>
        )
    }
}