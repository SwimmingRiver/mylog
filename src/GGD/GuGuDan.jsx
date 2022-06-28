
import { useState,useEffect } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 3em;
`;
const Text = styled.p`
    font-size: 2em;
    text-align: center;
`

function GuGUDan(){
    const [num1,setNum1]=useState(0);
    const [num2,setNum2]=useState(0);
    const [result,setResult]=useState("");
    const [answer,setAnswer]=useState(0);
  useEffect(()=>{
      setNum1(Math.floor(Math.random()*(9 - 1) + 1));
      setNum2(Math.floor(Math.random()*(9 - 1) + 1));
  },[result])
    const Submit = (e)=>{
        e.preventDefault();
        answer===(num1*num2)?setResult("정답"+answer):setResult("오답");

        setAnswer("");
    }
    const Change=(e)=>{
        setAnswer(+e.target.value);
    }
    return(
        <>
        <Title>구구단</Title>
        <form onSubmit={Submit}>
            <Text>{num1}*{num2}</Text>
            <br/>
            <input value={answer} autoFocus placeholder='enter the answer' onChange={Change}></input>
            <button>입력</button>
        </form>
        <br/>
        <h2>결과:{result}</h2>
        </>
    )
}

export default GuGUDan;