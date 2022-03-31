import './App.css';
import { darkTheme,lightTheme } from './theme';
import { useState } from 'react';
import styled from 'styled-components';

const ChangedColor = styled.h1`
  color: blue;
`;


function ColorChange() {
  const [backColor,setBackColor]=useState("black");
  const changeBack=()=>{
    setBackColor("green");
    console.log(backColor);
  }
  return (
    <div className="ColorChange">
      <h1 style={{color:{backColor}}}>hello</h1>
      <ChangedColor>blue</ChangedColor>
      <button onClick={changeBack}>change</button>
    </div>
  );
}

export default ColorChange;
