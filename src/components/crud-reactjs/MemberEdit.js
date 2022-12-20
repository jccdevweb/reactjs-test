import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
const MemberEdit = () => {
  const { id: memberId } = useParams();


  useEffect(() => {
    fetch(" http://localhost:8000/member/" + memberId)
      .then((res) => {
        return res.json();
      })
   
      .then((resp) => {
        idChange(resp.id);
        nameChange(resp.name);
        emailChange(resp.email);
        phoneChange(resp.phone);
        activeChange(resp.active);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
 
  const [id, idChange] = useState("");
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [active, activeChange] = useState(true);


  const navigate = useNavigate();
  
  const submitForm = (e) => {
    e.preventDefault();
    const formChange = { id, name, email, phone, active };
    fetch("http://localhost:8000/member/"+memberId, {
      method: "PUT",
      headers: { "content-type":"application/json" },
      body: JSON.stringify(formChange)
    })
      .then((res) => {
        alert("Saved Successfully !!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="row text-center mt-5 ">
        <div className="offset-lg-3 col-lg-6">
          <div className="container">
            <div className="card">
              <div className="card-title">
                <h2>Member Update</h2>
              </div>

              <div className="card-body " style={{ textAlign: "left" }}>
                <div className="row">
                  <form onSubmit={submitForm}>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>ID</label>
                        <input
                          className="form-control"
                          name="id"
                          value={id}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          className="form-control"
                          value={name}
                          onChange={(e) => nameChange(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => emailChange(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          type="number"
                          className="form-control"
                          value={phone}
                          onChange={(e) => phoneChange(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          value={active}
                          onChange={(e) => activeChange(e.target.checked)}
                          required
                        />
                        <label className="form-check-label">Is Active</label>
                      </div>
                    </div>
                    <div className="col-lg-12 text-center">
                      <div className="form-group">
                        <button className="btn btn-success" type="submit">
                          Save
                        </button>
                        <Link className="btn btn-danger" to="/">
                          Back
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberEdit;
