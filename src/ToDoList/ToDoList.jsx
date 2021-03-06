import  styled  from 'styled-components';
import { useState } from 'react';

const Wrapper = styled.div`
    text-align: center;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width:500px;
    height:800px;
    border: solid 1px black;
    
`;

const Title = styled.h1`
    text-align: center;
    height: 100px;
    font-size: 50px;
`;
const ListBox = styled.div`
    border: solid 1px green;
    width: 500px;
    height: 400px;
`;
const List = styled.li`
    list-style: none; 
    font-size:30px;
`;
const DoneList = styled.li`
  text-decoration: line-through;
  font-style: italic;
  font-size: 30px;
`;
const Input = styled.input`
  width: 491px;

`;
const AddButton = styled.button`
  width: 500px;
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
        <Input onChange={Typing} placeholder="To Do" type="text" value={todo} />
        <AddButton>
</AddButton>
      </form>
     <ListBox>
      <ul>
        To Do({todoArr.length})
         <hr/>
        {todoArr.map((item, index) => (
          <List key={(todoObj.index = index)}>
            {item}
            <button onClick={()=>DoOrDone(todoArr,index)}>Done</button>
            <button onClick={()=>Undo(todoArr,index)}>Undo</button>
            <button onClick={()=>Edit(todoArr,index)}>Edit</button>
          </List>
        ))}
      </ul>
      </ListBox>
      <ListBox>
      <ul>
        Done({doneArr.length}) <hr/>
        {doneArr.map((item,index)=>(
          <DoneList key={index}>{item}</DoneList>
        ))}
      </ul>
      </ListBox>
    </Wrapper>
  );
}

export default ToDoList;