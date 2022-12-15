import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const CrudRead = () => {

  const [testData,setCrudData] = useState()

  const {crudid} = useParams();
  useEffect(()=>{
    fetch("http://localhost:8000/posts" )
    .then((res)=> {
      return res.json();
    })
    .then((resp)=>{
      setCrudData(resp);
    })
    .catch((err)=>{
      console.log(err.message)
    })
  },[]) 
  console.log(testData.id)
  return (
    <div>
      {testData &&
    <h1>test here {testData.name} {testData.id}</h1>

      }
    </div>
  )
}

export default CrudRead