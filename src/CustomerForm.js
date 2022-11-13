import { useFormik } from 'formik'

export function CustomerForm() {
  const checkList = ["Male", "Female", "Other"];

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

    if(FormCollection.Gender == "Male") {
      errors.Mobile = "Gender is Male :)"
    }

    return errors;
  }
  const formik = useFormik({
    initialValues: {
      FirstName:"",
      LastName:"",
      MaidenName:"",
      Age: 0,
      Gender: "",
      UserName: "",
      Mobile: ""
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validate: ValidateUser,
  });
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

          <div className="checkList">
            <div className="title">Select Gender</div>
            <div className="list-container">
              {checkList.map((item, index) => (
                <div key={index}>
                  <input value={formik.values.Gender} type="radio" name="gender" onChange={formik.handleChange}/>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

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
      </form>
    </div>
  );
}
