import { useState } from 'react';
import { useEffect } from 'react';

const answer = [];
const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < 4; i++) {
  const checkedArr = [];
  checkedArr[i] = Arr.splice(Math.floor(Math.random() * Arr.length - i), 1);
  answer.push(checkedArr);
}

function NumberingBaseball(){
    const [inputNum, setInputNum] = useState([]);
    const [inputVal, setInputVal] = useState([]);
    const [tryCount, setTryCount] = useState(0);
    let Ival = document.getElementsByTagName("input");
    let resultArr = [];
    const result = "";
    const Typing = (e) => {
      e.preventDefault();
      setInputVal(e.target.value);
    };
    
    const Click = (e) => {
        e.preventDefault();
      if (inputVal.length !== 4) {
        alert("4 number please");
      }else if(new Set(inputVal).size !==4){
        alert("중복되지않은 숫자를 입력해주세요")
      }
       else {
        setInputNum(inputVal);
        console.log(inputNum);
        setTryCount(tryCount + 1);
        resultArr.push(inputNum);
      }
      if (tryCount === 10) {
        alert("10 out Game Over");
        setTryCount(0);
        setInputNum([]);
      }
      Ival = "";
    };
    return(
        <>
        <h1>NumberingBaseball</h1>
        <form onSubmit={Click}>
        <input placeholder='4 number' maxLength={4} onChange={Typing}></input>
        <button>enter</button>
        </form>
        <div>
        {answer}/{inputNum}/out:{tryCount}
          result:{result}
        </div>
      <ul>
          {resultArr.map((i)=>
              <li>{resultArr[i]}</li>
          )}
      </ul>
        </>
    )
}
export default NumberingBaseball