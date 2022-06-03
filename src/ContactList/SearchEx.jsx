import { useEffect, useState } from "react";

export default function SearchEx() {
  const database = ["Abe", "Bob", "Carrey", "Drake", "Dragon"];
  const [keyword, setKeyword] = useState("");
  const [output, setOutput] = useState([]);
  const Search = () => {
    database.sort();
    let arr = database.filter(() => database.indexOf(keyword) > -1);
    setOutput(arr);
    // if (database.indexOf(keyword) > -1) {
    //   setOutput([...output, keyword]);
    // } else {
    //   setOutput([]);
    // }
  };
  const Typing = (e) => {
    setKeyword(e.target.value);
  };
  useEffect(Search, [keyword]);
  return (
    <div className="App">
      <input placeholder="keyword" onChange={Typing} />
      {/* <p>{keyword}</p> */}
      <button onClick={Search}>Search</button>
      <hr />
      <h2>DataBase</h2>
      <ul>
        {database.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <hr />
      <h2>Search output</h2>
      <ul>
        {output.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
