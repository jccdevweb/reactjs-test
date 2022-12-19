import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const MemberListing = () => {
  //stored data from db next memberData.map((item)=>{return()})
  const [memberData, setMemberData] = useState(null);
  const navigate = useNavigate();
  //Button Function
  const LoadDetails = (id) => {
    navigate("/member/detail/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/member/edit/" + id);
  };
  const DeleteFunction = (id) => {
    if (window.confirm("Do you want to delete?")) {
      fetch("http://localhost:8000/member/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Delete Successfully !!");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  //Fetch database record
  useEffect(() => {
    fetch("http://localhost:8000/member")
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
  console.log(memberData);
  return (
    <div className="container text-center mb-5">
      <div className="card mt-5">
        <div className="card-title">
          <h1>Member List</h1>
        </div>
        <div className="card-body">
          <Link className="btn btn-warning mb-3" to="/create-member">
            Create Member (+)
          </Link>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>Id</td>
                <td>Full Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {memberData ? (
                <>
                  {memberData &&
                    memberData.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.phone}</td>
                          <td>
                            <a
                              className="btn btn-success btn-sm"
                              onClick={() => {
                                LoadEdit(item.id);
                              }}
                            >
                              Update
                            </a>
                            <a
                              className="btn btn-danger btn-sm"
                              onClick={() => {
                                DeleteFunction(item.id);
                              }}
                            >
                              Delete
                            </a>
                            <a
                              className="btn btn-info btn-sm"
                              onClick={() => {
                                LoadDetails(item.id);
                              }}
                            >
                              Details
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                </>
              ) : (
                <tr>
                  <td>No Record Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MemberListing;
