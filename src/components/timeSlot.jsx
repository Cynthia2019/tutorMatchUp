import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import API from '../utils/API'
import {PlusOutlined} from '@ant-design/icons'
import DropdownButton from 'react-bootstrap/DropdownButton'
import './timeSlot.css'
import { Dropdown } from 'react-bootstrap';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const slots = ['8:00-9:00', '9:00-10:00', '10:00-11:00', '11:00-12:00','12:00-13:00','13:00-14:00','14:00-15:00','15:00-16:00','16:00-17:00','17:00-18:00','18:00-19:00','19:00-20:00']

export default class TimeSlotPicker extends React.Component {
    render(){
        return(
            <div className="slot-table" style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                {days.map((day, i)=>{return(
                    <div className='add-slot'>
                        <div className={`day-${i}`} style={{fontWeight:'bold'}}>{day}</div>
                        <Dropdown drop='right'>
                            <Dropdown.Toggle className='add-slot'>
                                <PlusOutlined style={{color:'gray'}}/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {slots.map(slot=>{return(<Dropdown.Item>{slot}</Dropdown.Item>)})}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                )})}
            </div>
        )
    }
}