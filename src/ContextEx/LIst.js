import { useState, useContext, useEffect } from 'react';
import { PostContext } from './Context';

export default function List(){
    const [arr,setArr]=useState([]);
    const {post,postToggle}=useContext(PostContext);
    useEffect(()=>{
        setArr([post.title,...arr]);
    },[postToggle])
    return(
        <>
        <h1>List</h1>
        <ul>
        {arr.map((item,index)=>(<li key={index}>{item}</li>))}
        </ul>
        </>
    )
}