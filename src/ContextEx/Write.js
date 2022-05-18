
import { PostContext } from './Context';
import { useContext, useState } from 'react';

export default function Write(){
    const {setPost,setPostToggle,postToggle}=useContext(PostContext);
    const [tTyping,setTTyping]=useState("");
    const [cTyping,setCTyping]=useState("");
    const onTTyping = (event)=>{
        setTTyping(event.target.value);
    }
    const onCTyping= (event)=>{
        setCTyping(event.target.value);
    }
    const Submit=(event)=>{
        event.preventDefault();
        setPost({
            title:tTyping,
            contents:cTyping,
        })
        setCTyping("");
        setTTyping("");
        setPostToggle(!postToggle);
    }
    return(
        <>
        <h1>Write</h1>
            <form onSubmit={Submit}>
                <textarea placeholder="Title" onChange={onTTyping} value={tTyping}/>
                <textarea placeholder="Contents" onChange={onCTyping} value={cTyping}/>
                <button>Submit</button>
            </form>
        </>
    )
}