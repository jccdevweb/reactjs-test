import React,{useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
const CrudTest = () => {
  const [crudData,setCrudData] = useState();
  const navigate=useNavigate();

const setUpdateBtn = (id) =>{

}
const setDeleteBtn = (id) =>{

}
const setDetailsBtn = (id) =>{
  navigate("/CrudRead/" + id)
}

  useEffect(()=> {
    fetch("http://localhost:8000/posts/")
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
  console.log(crudData)
console.log(setCrudData)
    return (
      <div className="Container">
        <div className="card">
          <div className="card-title">
            <h1 className="">
              CrudTest
            </h1>
          </div>
        </div>
        <div className="card-body">
          <div>
            <Link className="btn btn-success" to="/CrudCreate"> Create (+)</Link>
          </div>
          <table className="table table-sm table-bordered">
            <thead className="bg-info text-white">
              <tr>
                <th scope="col">
                  Id
                </th>
                <th scope="col">
                  Full Name</th>
                <th scope="col">
                  Email
                </th>
                <th scope="col">
                  Contact</th>
                <th scope="col">
                  Address
                </th>
                <th scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {crudData &&
                crudData.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.fullName}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>{item.address}</td>
                    <td>
                      <a onClick={()=>setUpdateBtn (item.id)} className="btn btn-success">Update</a>
                      <a onClick={()=>setDeleteBtn (item.id)} className="btn btn-danger">Delete</a>
                      <a onClick={()=>setDetailsBtn (item.id)} className="btn btn-primary">Detail</a>
                    </td>
                  </tr>

                  ))
              }

            </tbody>
          </table>
          </div>
        </div>
  )
}

export default CrudTest