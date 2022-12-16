import React, {useEffect, useState}from 'react'
import {CircularProgress} from '@mui/material'
import { useParams } from 'react-router-dom'
const Read = () => {
  
  const {id} = useParams();
  const [readCrud,setReadCrud] = useState()
  useEffect(() => {
    fetch(`https://localhost:8000/posts/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setReadCrud(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  
  const {id: employeeId,fullName,email,address,contact}= readCrud  || {}
  console.log(readCrud)
  return (
    <div>
      {
        readCrud ? (
          <div className="shadow-none p-3 mb-5 bg-light rounded">
            <h1>{`Your Id No. : ${employeeId}` }</h1>
            <h1>{`Your Id Full Name : ${fullName}` }</h1>
            <h1>{`Your Email : ${email}` }</h1>
            <h1>{`Your Address : ${address}` }</h1>
            <h1>{`Your Contact : ${contact}` }</h1>
          </div>) : (<CircularProgress/>)
      }
    </div>
  )
}

export default Read