import { useState } from "react";

function Contact() {
  const [keyword, setKeyword] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [list, setList] = useState([]);
  const [info, setInfo] = useState({
    name: "",
    phone: ""
  });
  const [cToggle,setCToggle]=useState(false);
  const [nameKey, setNameKey] = useState("");
  const [phoneKey, setPhoneKey] = useState("");
  const Add = () => {
    if (nameKey === "" || phoneKey === "") {
      return null;
    }
    setInfo({
      ...info,
      name: nameKey,
      phone: phoneKey
    });
    setList([...list, info]);
    setNameKey("");
    setPhoneKey("");
  };
  const Search = () => {
    let arr = [...list];
    let splitArr = [];
    for (let i = 0; i < arr.length; i++) {
      splitArr.push(arr[i].name);
      if (keyword === String(splitArr[i])) {
        setSearchList([...keyword]);
      }
    }
    console.log(searchList);
  };
  const Toggle=()=>{setCToggle(!cToggle)}
  return (
    <>
      <h1>Contact</h1>
      <hr />
      <input
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        placeholder="keyword"
      />
      <button onClick={Search}>Search</button>
      <ul>
        {searchList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>Info</h2>
      <input
        placeholder="name"
        value={nameKey}
        onChange={(e) => {
          setNameKey(e.target.value);
        }}
      />
      <input
        placeholder="phone"
        value={phoneKey}
        onChange={(e) => {
          setPhoneKey(e.target.value);
        }}
      />
      <button onClick={Add}>Add</button>
      <h2>List</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index} onClick={Toggle}>
          {item.name}
          </li>
        ))}
      </ul>
      <hr />
    </>
  );
}
export default Contact;
