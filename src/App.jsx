import Page from "./ContextEx/Page";
import { PostContext } from "./ContextEx/Context";
import { useState } from 'react';



function App(){
    const [post,setPost]=useState({title:"",contents:""});
    const [postToggle,setPostToggle]=useState(false);
    return(
    <>
    <PostContext.Provider value={{post,setPost,postToggle,setPostToggle}}>
    <Page/>
    </PostContext.Provider>
    </>
    )
} 
export default App;