
import React,{useState } from "react";


const WordRelay =()=>{
    const [PWord,setPWord]=useState("word");
    const [CWord,setCWord]=useState("");
    const [result,setResult]=useState("");

    const enter = ()=>{
        if(PWord[PWord.length-1]===CWord[0]){
            setResult("O");
            setPWord(CWord);
        }
        else{
            setResult("X");
        }
        
    }
    const write = (e)=>{
        setCWord(e.target.value);
    }
      return(
            <div>
                <h1>WordRelay</h1>
                <h2>{PWord}</h2>
                <input onChange={write}></input>
                <button onClick={enter}>Enter</button>
                <h2>Result:{result}</h2>
            </div>
        )
    }

export default WordRelay;