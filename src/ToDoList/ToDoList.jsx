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
    const [todo,setTodo]=useState({
        todo:"",
        index:0,
        state:"",
    });
    const [todoArr,setTodoArr]=useState([]);
    const Add = (e)=>{
        e.preventDefault();
       if(todo===""){ 
           return;
        }
       setTodoArr((item,index)=>[todo, ...{
           todo:item,
           index:index,
           state:"to do",
       }]);
       setTodo("");
       console.log(todoArr)
    }
    const Input =(e)=>{
        let number = 0;
        number++;
        setTodo(
            {
                todo:e.target.value,
                index:number,
                state:"to do",
            }
        );
        console.log(e.target.value)
        
    }
    return(
      <Wrapper>
      <h1>ToDoList</h1>
      <form onSubmit={Add}>
          <input  onChange={Input} value={todo.todo} type='text' placeholder="TO DO"/>
          <button>add</button>
      </form>
      <ul>
          {todoArr.map((i,num)=>(<li key={num}>{todoArr[num]}<button>check</button></li>))}
      </ul>
      </Wrapper>
    )
}

export default ToDoList;