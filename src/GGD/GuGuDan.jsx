
import { useState } from 'react';
import { useEffect } from 'react';


function GuGUDan(){
    const [num1,setNum1]=useState(0);
    const [num2,setNum2]=useState(0);
    const [result,setResult]=useState("");
    const [answer,setAnswer]=useState(0);
  useEffect(()=>{
      setNum1(Math.floor(Math.random()*(9 - 1) + 1));
      setNum2(Math.floor(Math.random()*(9 - 1) + 1));
  },[result])
    const Submit = ()=>{
        answer===(num1*num2)?setResult("정답"+answer):setResult("오답");
   
    }
    const Change=(e)=>{
        setAnswer(+e.target.value);
    }
    console.log("n1:"+num1);
    console.log("n2:"+num2);
    console.log(num1*num2);
    return(
        <>
        <h1>구구단</h1>
        <form onSubmit={Submit}>
            <p>{num1}*{num2}</p>
            <input placeholder='enter the answer' onChange={Change}></input>
            <button>입력</button>
        </form>
        <h2>결과:{result}</h2>
        </>
    )
}

export default GuGUDan;