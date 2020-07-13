import React from 'react';
import Header from '../components/header'
import './search.css'
import InputGroup from 'react-bootstrap/InputGroup'
import API from '../utils/API'
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
        this.value = React.createRef()
        this.state = {
            infos: null, 
            subjects: [],
            filtered: null
        }
    }
    async getTutorFromDB() {
        await API.get('/tutors/all', config)
        .then(res=>{
            this.setState({infos: res.data})
            var arr = []
            res.data.map((tutor)=>{arr.push(tutor.subject)})
            this.setState({subjects:arr})
        })
        .catch(err=>alert(err))
    }
    componentDidMount = () => {
        this.getTutorFromDB()
    }
    handleSearch = (e) => {
        this.search(e.target.value)
    }
    search = (value) => {
        var filtered = this.state.subjects.filter((subject)=>{
            return subject.toLowerCase().includes(value.toLowerCase());
        })
        var newInfos = this.state.infos.filter(info=>{
            var result = false
            filtered.forEach(item=>{
                if(info.subject.toLowerCase().includes(item.toLowerCase())){result=true}
            })
            return result
        })
        this.setState({filtered:newInfos})
    }
    render() {
        if(this.state.infos){
        return(
            <div>
                <Header/>
                <div className="main-container">
                    <InputGroup>
                        <Form.Control placeholder='which class are you looking for...?' ref={this.value} onChange={this.handleSearch}/>
                        <InputGroup.Append><Button variant="success">Search</Button></InputGroup.Append>
                    </InputGroup>
                </div>
                {this.state.filtered?this.state.filtered.map((info, i) => {
                        return(
                            <div key={`infoCard-${i}`}>
                                <InfoCard tutor={info}/>
                            </div>
                        )
                }):this.state.infos.map((info, i)=>{
                    return(
                        <div key={`infoCard-${i}`}>
                        <InfoCard tutor={info}/>
                    </div>
                    )
                })}
            </div>
        )} else {
            return(<h1>Loading...</h1>)
        }
    }
}