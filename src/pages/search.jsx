import React from 'react';
import Header from '../components/header'
import './search.css'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InfoCard from '../components/infoCard'
import * as Constants from '../components/Constants'

const infos = Constants.infos

export default class SearchPage extends React.Component {
    constructor(){
        super()
        this.state = {
            infos: []
        }
    }
    componentDidMount = () => {
        this.setState({infos: infos})
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
                {infos.map((info, i) => {
                    return(
                        <div key={`infoCard-${i}`}>
                            <InfoCard tutor={info}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
