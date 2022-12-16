import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { CircularProgress } from '@mui/material'
import Todocards from './Todocards'

const Todos = () => {
  const [todos,setTodos] = useState()

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      const reponseTodos = res.data
      setTodos(reponseTodos);
    });
  },[])
  
console.log(todos)
  return (
    <>
    {
      todos ?
      (<div style={{display:'flex',flexWrap:'wrap',textAlign:'center' }}>
        {todos.slice(0,10).map((item) => <Todocards key={item.id} item={item}/>
        
        )}
      </div>)
      :
      (<CircularProgress/>)
    }
    </>)
}

export default Todos