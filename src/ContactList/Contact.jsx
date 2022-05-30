import { useState } from 'react';

function  Contact(){
    const [keyword,setKeyword]=useState("");
    const [list,setList]=useState([]);
    const [info,setInfo]=useState(
        {
            name:"",
            phone:"",
        }
    )
    return(
        <>
        <h1>Contact</h1>
        <hr/>
        <input placeholder='keyword'/>
        <button>Search</button>
        <h2>Info</h2>
        <input placeholder='name'/>
        <input placeholder='phone'/>
        <button>Add</button>
        <h2>List</h2>
        <hr/>
        </>
    );

}
export default Contact;