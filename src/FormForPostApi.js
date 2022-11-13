import React from "react";
import { useFormik } from 'formik'
import axios from "axios";
import { Userlist } from "./Userlist";
import { useNavigate } from 'react-router-dom'

function FormForPostApi() { 
  function ValidateUser(FormCollection) {
    var errors = {};

    if (FormCollection.UserName == "") {
      errors.UserName = "User Name Required";
    } else if (FormCollection.UserName.length < 4) {
      errors.UserName = "Name too short..";
    } else if (FormCollection.UserName.length > 10) {
      errors.UserName = "Name too long..";
    }

    if (FormCollection.Age == "") {
      errors.Age = "Age Required";
    } else if (isNaN(FormCollection.Age)) {
      errors.Age = "Age must be a Number";
    }

    if (FormCollection.Mobile == "") {
      errors.Mobile = "Mobile Required";
    }
    return errors;
  }
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      MaidenName: "",
      Age: 0,
      UserName: "",
      Mobile: ""
    },
    onSubmit: (values) => {
      axios.post("http://localhost:4000/registeruserv1", values);
      alert(JSON.stringify(values));
    },
    validate: ValidateUser,
  });

  const showAllUsers = () => {
    if (window.location.pathname === "/userlists") {
      return <Userlist />
    }
  }

  return (
      <div className="container-fluid">
        <form onSubmit={formik.handleSubmit}>
          <h2>Register User</h2>
          <dl>
            <dt>First Name</dt>
            <dd>
              <input
                name="FirstName"
                onChange={formik.handleChange}
                value={formik.values.FirstName}
                type="text"
              />
            </dd>
            <dd className="text-danger">{formik.errors.FirstName}</dd>

            <dt>Last Name</dt>
            <dd>
              <input
                name="LastName"
                onChange={formik.handleChange}
                value={formik.values.LastName}
                type="text"
              />
            </dd>
            <dd className="text-danger">{formik.errors.LastName}</dd>

            <dt>Maiden Name</dt>
            <dd>
              <input
                name="MaidenName"
                onChange={formik.handleChange}
                value={formik.values.MaidenName}
                type="text"
              />
            </dd>
            <dd className="text-danger">{formik.errors.MaidenName}</dd>

            <dt>Age</dt>
            <dd>
              <input
                name="Age"
                onChange={formik.handleChange}
                value={formik.values.Age}
                type="text"
              />
            </dd>
            <dd className="text-danger">{formik.errors.Age}</dd>

            <dt>User Name</dt>
            <dd>
              <input
                name="UserName"
                onChange={formik.handleChange}
                value={formik.values.UserName}
                type="text"
              />
            </dd>
            <dd className="text-danger">{formik.errors.UserName}</dd>
            <dt>Mobile</dt>
            <dd>
              <input
                name="Mobile"
                onChange={formik.handleChange}
                value={formik.values.Mobile}
                type="text"
              />
            </dd>
            <dd className="text-danger">{formik.errors.Mobile}</dd>
          </dl>
          <button>Add</button>
          <button onClick={showAllUsers}>Show Users data</button>
        </form>
      </div>
      );
}

export default FormForPostApi;
