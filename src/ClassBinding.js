import { useState } from "react";
import "./ClassBinding.css";

export function ClassBinding()
{
    const [theme, setTheme] = useState("");

    function ChangeTheme(e){
        if(e.target.checked){
            setTheme("dark-theme");
        } else {
            setTheme("");
        }
    }

    return(
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <div className="w-25 border border-2 border-dark p-2">
          <form className={theme}>
             <h3>Register User</h3>
             <div className="form-switch">
             <input className="form-check-input" onChange={ChangeTheme} type="checkbox"/> Dark Theme
             </div>
             <dl>
                <dt>User Name</dt>
                <dd><input type="text" className="form-control"/></dd>
                <dt>Password</dt>
                <dd><input type="password" className="form-control"/></dd>
                <dt>Email</dt>
                <dd><input type="email" className="form-control"/></dd>
             </dl>
             <button className="btn btn-dark w-100">Register</button>
          </form>
          </div>
        </div>
    )
}