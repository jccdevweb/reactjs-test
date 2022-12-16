import React from "react";
import { useEffect, useState } from "react";
import { CircularProgress, } from "@mui/material";
import {useNavigate} from "react-router-dom"


const Crudmain = () => {
  const [database, setDatabase] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://localhost:8000/posts")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setDatabase(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

const removeFuncetion =(id) =>{
  if(window.confirm("Delete")){
    fetch("http://localhost:8000/posts"+id,{
      method: "DELETE"
    }).then((res)=>{
      alert("Remove Success")
    }).catch((err)=>{
      console.log(err.message)
    })

    
  }
}
  console.log(database);
  return (
    <div >
      {database ? (
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID No.</th>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {database.map((item) => {
                const { id, fullName, email, contact, address } = item;
                return (
                  <tr key={item.id}onClick={()=>navigate(`/read-crud/${id}`)}>
                    <td>{id}</td>
                    <td>{fullName}</td>
                    <td>{email}</td>
                    <td>{contact}</td>
                    <td>{address}</td>
                    <td>
                      <button className="btn btn-success">Update</button>
                      <button className="btn btn-danger">Delete</button>
                      <button onClick={removeFuncetion}className="btn btn-info">Details</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Crudmain;
