import { useFormik } from "formik";

export function FormikDemo()
{
    function ValidateUser(FormCollection){
        var errors = {};

        if(FormCollection.UserName=="") {
            errors.UserName = "User Name Required";
        } else if(FormCollection.UserName.length<4) {
            errors.UserName = "Name too short..";
        } else if(FormCollection.UserName.length>10) {
            errors.UserName = "Name too long..";
        }

        if(FormCollection.Age=="") {
            errors.Age = "Age Required";
        } else if (isNaN(FormCollection.Age)) {
            errors.Age = "Age must be a Number";
        }

        if(FormCollection.Mobile=="") {
            errors.Mobile = "Mobile Required";
        }

        return errors;
    }
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Age: 0,
            Mobile: ''
        },
        onSubmit : (values)=>{
            alert(JSON.stringify(values));
        },
        validate : ValidateUser
    })
    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input name="UserName" onChange={formik.handleChange} value={formik.values.UserName} type="text"/></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input name="Age" onChange={formik.handleChange} value={formik.values.Age} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Mobile</dt>
                    <dd><input name="Mobile" onChange={formik.handleChange} value={formik.values.Mobile} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button>Register</button>
            </form>
        </div>
    )
}