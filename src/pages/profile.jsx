import React from 'react';
import Header from '../components/header'
import TuteeProfile from '../components/tuteeProfile'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
            info: null
        }
    }
    componentDidMount=()=>{
        this.getInfoFromDB()
    }
    async getInfoFromDB() {
        await axios.get('http://localhost:5000/',config)
        .then(res=>{
            this.setState({info:res.data}
                )
    console.log(res)})
        .catch(err=>alert(err))
    }
    render(){
        const info = this.state.info?this.state.info:null
        return(
            <div>
                <Header />
                {info===null?<h3>Loading infomation...</h3>:
                <div style={{padding:'40px', textAlign:'left',backgroundColor:'rgba(230,230,230,0.5)'}} className='profile-content'>
                    <TuteeProfile info={info}/>
                </div>}
            </div>
        )
    }
}
