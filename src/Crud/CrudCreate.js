import React,{useState} from "react";
import {Link, Navigate, useNavigate} from 'react-router-dom'

const CrudCreate = () => {
const [crudDetails,setCrudDetails]= useState ({
  id:'',
  fullName:'',
  email:'',
  contact:'',
  address:'',
  active:(false),
})
const {id,fullName,email,contact,address,active} = crudDetails
const navigate=useNavigate();

const submitCrudDetails = (e) =>{
  e.preventDefault();
    if(crudDetails.active !== true){
      alert('Please Check The Box')
      return;
    }
    
    fetch('http://localhost:8000/posts', {
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(crudDetails)
        }).then((res)=>{
          alert('Crud Detail Successfuly Created')
          navigate('/CrudTest')
        }).catch((err)=>{
          console.log(err.message)
        })

}


  return (

    <div className="container">
      <div className="card">
        <div className="card-title">
          <h1>Add Member</h1>
        </div>
        <div className="card-body"></div>
        <div className="row">
          <form onSubmit={submitCrudDetails}>
          <div className="col-lg-12">
            <div className="form-group">
              <label>ID #</label>
              <input
              disabled
              name="id"
              value={id}
              onChange={(e)=>setCrudDetails({...crudDetails, id: e.target.value})}
              type="number"
               placeholder="#" 
               className="form-control"
                />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Full Name</label>
              <input
              name="fullName"
              value={fullName}
              onChange={(e)=>setCrudDetails({...crudDetails, fullName: e.target.value})}
              type="text" 
              placeholder="John Doe" 
              className="form-control"
               />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group">
              <label>Email</label>
              <input
              name="email"
              value={email}
              onChange={(e)=>setCrudDetails({...crudDetails, email: e.target.value})}
                type="email"
                placeholder="YourEmail@gmail.mail"
                className="form-control"
              />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group">
              <label>Contact</label>
              <input
              name="contact"
              value={contact}
              onChange={(e)=>setCrudDetails({...crudDetails, contact: e.target.value})}
              type="number" 
              placeholder="+639-###-####" 
              className="form-control" 
              />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group">
              <label>Address</label>
              <input
              name="address"
              value={address}
              onChange={(e)=>setCrudDetails({...crudDetails, address: e.target.value})}
                type="text"
                placeholder="Blk Lot St. City Zip Code"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-check">
            <input 
            checked={active}
            onChange={(e)=> setCrudDetails({...crudDetails, active: e.target.checked})}
            type="checkbox" 
            className="form-check-input" />
              <label className="form-check-label">
                Is Active
              </label>
             </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <button type="submit" className="btn btn-success">Create</button>
              <Link className="btn btn-danger" to="/CrudTest">Back</Link>
            </div>
          </div>
          </form> </div>
      </div>
    </div>
  );
};

export default CrudCreate;
