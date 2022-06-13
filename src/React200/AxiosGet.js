import axios from "axios";
import { Component } from 'react';

class AxiosGet extends Component{
    componentDidMount(){
        axios.get('http://date.jsontest.com/')
        .then(response =>{alert(response.data.date)})
    }
    render(){
        return(
            <h1>axios get</h1>
        )
    }
}
export default AxiosGet;