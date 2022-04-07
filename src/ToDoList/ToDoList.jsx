import  styled  from 'styled-components';
import { useState } from 'react';

const Wrapper = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    text-align: center;
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
const DoneList = styled.li`
  text-decoration: line-through;
  font-style: italic;
`;

function ToDoList(){
    const [todo, setTodo] = useState("");
  let todoObj = {
    todo: todo,
    index: 0,
  };
  const [todoArr, setTodoArr] = useState([]);
  const [doneArr,setDoneArr]=useState([]); 
  const Typing = (e) => {
    setTodo(e.target.value);
  };
  const Add = (e) => {
    e.preventDefault();
    if(todo === ""){return}
    setTodoArr((i) => [todoObj.todo, ...i]);
    // console.log(todoObj);
    setTodo("") ;
  };


  const DoOrDone = (arr,i) => {
  
    if(window.confirm("Is it done?")){
    let gotodone = arr.splice(i,1);
    setDoneArr((e)=>[gotodone,...e]);
    }
    
  };//완료

  const Undo = (arr,i )=> {
    if(window.confirm("Is it undo?")){
      arr.splice(i,1);
    setTodoArr((i)=>[...arr]);
  }
  };//삭제

  const Edit=(arr,i)=>{
    let editedTodo = prompt("edit","");
    if(editedTodo === null){return null}
    else{
      arr.splice(i,1,editedTodo)
      setTodoArr(()=>[...arr])
    }
  }//수정
  return (
    <Wrapper>
      <Title>TO DO LIST</Title>
      <form onSubmit={Add}>
        <input onChange={Typing} placeholder="To Do" type="text" value={todo} />
        <button>Add</button>
      </form>
      <ul>
        To Do({todoArr.length}) <hr/>
        {todoArr.map((item, index) => (
          <List key={(todoObj.index = index)}>
            {item}
            <button onClick={()=>DoOrDone(todoArr,index)}>Done</button>
            <button onClick={()=>Undo(todoArr,index)}>Undo</button>
            <button onClick={()=>Edit(todoArr,index)}>Edit</button>
          </List>
        ))}
      </ul>
      <ul>
        Done({doneArr.length}) <hr/>
        {doneArr.map((item,index)=>(
          <DoneList key={index}>{item}</DoneList>
        ))}
      </ul>
    </Wrapper>
  );
}

export default ToDoList;