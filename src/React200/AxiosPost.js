
import { Component } from 'react';
import { axios } from 'axios';

class AxiosPost extends Component{
    componentDidMount(){
        axios.post('http://date.jsontest.com/',{
            a:"react", b:200
        })
        .then(response=>{alert(response.data.date)})
    }
    render() {
        return (
            <div>
                <h1>Axios Post</h1>
            </div>
        );
    }
}
export default AxiosPost;