import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const MemberDetails = () => {

  const {id: memberId} = useParams();

  const [memberData,setMemberData] = useState({});

  useEffect(() => {
    //When adding +memberId state is null
   
    fetch(" http://localhost:8000/member/"+memberId)
      .then((res) => {
        return res.json();
      })
  //store data in useState
      .then((resp) => {
        setMemberData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

console.log(memberData)

  return (
    <div>
      {
      memberData &&
        <div className="container m-5">
          <div className="card flex">
            <div className="card-title m-5">
              <h3>ID: <span>{memberData.id}</span></h3>  
              <h3>Full Name: <span >{memberData.name}</span></h3>  
              <h3>Email: <span >{memberData.email}</span></h3>  
              <h3>Phone: <span >{memberData.phone}</span></h3>  
              <Link className="btn btn-danger" to="/"> Back</Link>
            </div>
          </div>

        </div>
      }
    </div> 
  )
}

export default MemberDetails