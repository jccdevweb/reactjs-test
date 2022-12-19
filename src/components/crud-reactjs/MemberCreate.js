import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const MemberCreate = () => {
  const [formChange, setFormChange] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    active: true,
  });
  const { id, name, email, phone, active } = formChange;
  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/member", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formChange),
    })
      .then((res) => {
        alert("Create Successfully !!");
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
                <h2>Member Create</h2>
              </div>

              <div className="card-body " style={{ textAlign: "left" }}>
                <div className="row">
                  <form onSubmit={submitForm}>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>ID</label>
                        <input
                          className="form-control"
                          value={id}
                          disabled
                          placeholder="Auto Generated ID"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          className="form-control"
                          value={name}
                          onChange={(e) =>
                            setFormChange({
                              ...formChange,
                              name: e.target.value,
                            })
                          }
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
                          onChange={(e) =>
                            setFormChange({
                              ...formChange,
                              email: e.target.value,
                            })
                          }
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
                          onChange={(e) =>
                            setFormChange({
                              ...formChange,
                              phone: e.target.value,
                            })
                          }
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
                          onChange={(e) =>
                            setFormChange({
                              ...formChange,
                              active: e.target.checked,
                            })
                          }
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

export default MemberCreate;
