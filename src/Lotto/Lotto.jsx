import { useEffect, useState } from "react";


export default function App() {
  const [num, setNum] = useState(0);
  const [list, setList] = useState([]);
  const [count, setCount] = useState(1);
  const chch = () => {
    setNum(Math.floor(Math.random() * 45));
  };
  useEffect(chch, []);
  const Start = () => {
    if (count <= 6) {
      chch();
      setList([...list, num]);
      setCount(count + 1);
      console.log(count);
    } else return null;
  };
  return (
    <div className="App">
      <h1>LotNum</h1>
      <button onClick={Start}>Start</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {index + 1}:{item}
          </li>
        ))}
      </ul>
    </div>
  );
}
