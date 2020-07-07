import React from 'react';
import Header from '../components/header'
import './search.css'
import InputGroup from 'react-bootstrap/InputGroup'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InfoCard from '../components/infoCard'

const config = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'applicaiton/json'
    }
}


export default class SearchPage extends React.Component {
    constructor(){
        super()
        this.state = {
            infos: null
        }
    }
    async getTutorFromDB() {
        await axios.get('http://localhost:5000/tutors/all', config)
        .then(res=>{this.setState({infos: res.data})})
        .catch(err=>alert(err))
    }
    componentDidMount = () => {
        this.getTutorFromDB()
    }
    render() {
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <InputGroup>
                        <Form.Control placeholder='which class are you looking for...?'/>
                        <InputGroup.Append><Button variant="success">Search</Button></InputGroup.Append>
                    </InputGroup>
                </div>
                {console.log(this.state.infos, "infos")}
                {this.state.infos?this.state.infos.map((info, i) => {
                    return(
                        <div key={`infoCard-${i}`}>
                            <InfoCard tutor={info}/>
                        </div>
                    )
                }):<div>Loading...</div>}
            </div>
        )
    }
}