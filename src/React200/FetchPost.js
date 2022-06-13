
import { Component } from 'react';

class FetchPost extends Component{
    componentDidMount = async ()=>{
        const response = await fetch('http://date.json.com/',{
            method:'POST',
            headers:{
                'Content-Type':'aplication/json',
            },
            body:{a:"react",b:200},
        });
        const body = await response.json();
        alert(body.date);
    }
    render(){
        return(
            <h1>fetch post</h1>
        )
    }
}
export default FetchPost;