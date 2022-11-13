import React from "react";
import { useState, useEffect } from "react";
import EditUserlist from "./EditUserlist";
import Modal from "./Modal/Modal";

export function Userlist() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:4000/customers")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <div className="container-fluid">                  
      <div className="flex">
        {users.map((user) => (
          <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-6 mb-4 mb-lg-0">
                  <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                    <div className="row g-0">
                      <div
                        className="col-md-4 gradient-custom text-center text-white"
                        style={{
                          borderTopLeftRadius: ".5rem",
                          borderBottomLeftRadius: ".5rem",
                        }}
                      >
                        <button
                          style={{ marginTop: "20px" }}
                          onClick = {() => setShow(true)}
                        >
                          Edit Details
                        </button>
                        <EditUserlist onClose = {() => setShow(false)} show = {show}/>
                        <img
                          src={user.image}
                          alt="Avatar"
                          className="img-fluid my-5"
                          style={{
                            width: "150px",
                            height: "150px",
                            display: "inline-block",
                            borderRadius: "50%",
                            backgroundColor: "#97cfa6",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                          }}
                        />
                        <h5 style={{ color: "blue" }}>
                          {user.firstName} {user.maidenName} {user.lastName}
                        </h5>
                        <p style={{ color: "blue" }}>
                          {user.gender} | {user.age}
                        </p>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body p-4">
                          <h6>Information</h6>
                          <hr className="mt-0 mb-4" />
                          <div className="row pt-1">
                            <div className="col-6 mb-3">
                              <h6>Email</h6>
                              <p className="text-muted">{user.email}</p>
                            </div>
                            <div className="col-6 mb-3">
                              <h6>Phone</h6>
                              <p className="text-muted">{user.phone}</p>
                            </div>
                          </div>
                          <h6>Card Information</h6>
                          <hr className="mt-0 mb-4" />
                          <div className="row pt-1">
                            <div className="col-6 mb-3">
                              <h6>Date of birth</h6>
                              <p className="text-muted">{user.birthDate}</p>
                            </div>
                            <div className="col-6 mb-3">
                              <h6>Card Number</h6>
                              <p className="text-muted">
                                {user.bank.cardNumber}
                              </p>
                            </div>
                            <div className="col-6 mb-3">
                              <h6>Card Expire</h6>
                              <p className="text-muted">
                                {user.bank.cardExpire}
                              </p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-start">
                            <a href="#!">
                              <i className="fab fa-facebook-f fa-lg me-3" />
                            </a>
                            <a href="#!">
                              <i className="fab fa-twitter fa-lg me-3" />
                            </a>
                            <a href="#!">
                              <i className="fab fa-instagram fa-lg" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
