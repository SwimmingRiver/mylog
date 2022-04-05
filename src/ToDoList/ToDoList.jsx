import  styled  from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';

const Wrapper = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    text-align: center;
    background-color: limegreen;
    color: whitesmoke;
    height: 100px;
    font-size: 50px;
`;
const ListBox = styled.div`
    border: solid 1px green;
    width: 100px;
    height: 80px;
`;
const List = styled.li`
    list-style: none; 
`;

function ToDoList(){
    const [todo, setTodo] = useState("");
    //const [done,setDone]=useState(false);
  let todoObj = {
    todo: todo,
    index: Number,
    done: false
  };
  const [todoArr, setTodoArr] = useState([]);
  const Typing = (e) => {
    setTodo(e.target.value);
  };
  const Add = (e) => {
    e.preventDefault();
    if(todo === ""){return}
    setTodoArr((i) => [todoObj.todo, ...i]);
    setTodo("") 
    console.log(todoObj);
  };
  const DoOrDone = (i,e) => {
   let arr = [];
   arr[i]=[e];
   if(e===true){e=false}
    else{e=true}
    console.log(i,e);
  };
  const Undo = (arr,i )=> {
    arr.splice(i,1);
    setTodoArr((i)=>[...arr]);
  };// 식제는 되는데 업데이트가 바로 안됨
  const Edit=()=>{return "edit"}
  return (
    <>
      <h1>TO DO LIST({todoArr.length})</h1>
      <form onSubmit={Add}>
        <input onChange={Typing} placeholder="To Do" type="text" value={todo} />
        <button>Add</button>
      </form>
      <ul>
        To Do <hr/>
        {todoArr.map((item, index) => (
          <li key={(todoObj.index = index)}>
            {todoObj.done ? "done!" : item}
            <button onClick={()=>DoOrDone(todoObj.index,todoObj.done)}>Done</button>
            <button onClick={()=>Undo(todoArr,index)}>Undo</button>
            <button onClick={Edit}>Edit</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;