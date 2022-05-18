
import { PostContext } from './Context';
import { useContext, useState, useEffect } from 'react';

export default function Read(){
 const {post,postToggle} = useContext(PostContext);
 const [showT,setShowT]=useState("");
 const [showC,setShowC]=useState("");
 useEffect(()=>{
     setShowT(post.title);
     setShowC(post.contents);
 },[postToggle]);
    return(
        <>
        <h1>Read</h1>
        <textarea value={showT} readOnly/>
        <textarea value={showC} readOnly/>
        </>
    )
}