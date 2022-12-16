import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import axios from 'axios'
const Todo = () => {
  const { id } = useParams();

  const [todoDetail,setTodoDetail] = useState()

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {
      const reponseTodo = res.data
      setTodoDetail(reponseTodo);
    });
  },[])
const {id: todoId, userId, title, completed} = todoDetail || {};
  return (
    <div>
      {
        todoDetail ? (
          <div>
            <h5>{`Todo Id: ${todoId}`}</h5>
            <h5>{`Todo Id: ${userId}`}</h5>
            <h5>{`Todo Id: ${title}`}</h5>
            <h5>{`Todo Id: ${completed}`}</h5>
  
          </div>
        ) : (<CircularProgress/>)
      }
    </div>
  )
}

export default Todo