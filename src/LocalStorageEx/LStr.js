import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';

const List = styled.li`
    border: solid 1px black;
`;

function Lstr(){
    const [name,setName]=useState("");
    const [list,setList]=useState([]);

    const Add=()=>{
       if(name!==""){
        setList([...list,name]);
        setName("");
        
        }
    }
    useEffect(()=>{localStorage.setItem("arr",list);},[list])
    return(
    <>
    <h2>LocalStorage 연습</h2>
    <input value={name} placeholder="name" onChange={(e)=>{setName(e.target.value)}}/>
    <button onClick={Add}>add</button>
    <h4>Name List</h4>
        <ul>
            {list.map((i,n)=><List key={n}>{i}</List>)}
        </ul>
        <h4>Local List</h4>
        {localStorage.getItem("arr")}

    </>
    )
}
export default Lstr;