import React from "react";
import { useEffect, useState } from "react";
import { CircularProgress,Button } from "@mui/material";
import {useNavigate} from "react-router-dom"


const Crudmain = () => {
  const [database, setDatabase] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/posts")
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
                  <tr key={item.id} onClick={()=>navigate(`/read/${id}`)}>
                    <td>{id}</td>
                    <td>{fullName}</td>
                    <td>{email}</td>
                    <td>{contact}</td>
                    <td>{address}</td>
                    <td>
                      <button className="btn btn-success">Update</button>
                      <button className="btn btn-danger">Delete</button>
                      <button className="btn btn-info"   onClick={()=>navigate(`/read/${id}`)}>Details</button>
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
