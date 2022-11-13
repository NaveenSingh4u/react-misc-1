import { useState } from "react";

export function SimpleFormValidation() {

    const [userDetails, setUserDetails] = useState({username:'', password:'', phone:'', age:0});
    const [usernameValidation, setUsernameValidation] = useState('');
    const [passwordValidation, setPasswordValidation] = useState('');
    const [phoneValidation, setPhoneValidation] = useState('');
    const [ageValidation, setAgeValidation] = useState('');

    function onSubmitDetails() {
        alert(JSON.stringify(userDetails));
    }

    function handleUsername(e) {
        setUserDetails({
            username: e.target.value,
            password: userDetails.password,
            phone: userDetails.phone,
            age: userDetails.age
        });
        if(userDetails.username.length <4) {
            setUsernameValidation('Username is too short..')
        } else if (userDetails.username.length > 10) {
            setUsernameValidation('Username is too long..')
        } else {
            setUsernameValidation('');
        }
    }

    function handlePassword(e) {
        setUserDetails({
            username: userDetails.username,
            password: e.target.value,
            phone: userDetails.phone,
            age: userDetails.age
        });
        if(userDetails.password.length <4) {
            setPasswordValidation('Password is too short..')
        } else if (userDetails.username.length > 10) {
            setPasswordValidation('Password is too long..')
        } else {
            setPasswordValidation('');
        }
    }

    function handlePhone(e) {
        setUserDetails({
            username: userDetails.username,
            password: userDetails.password,
            phone: e.target.value,
            age: userDetails.age
        });

        if (isNaN(userDetails.phone)) {
            setPhoneValidation('Phone numer should be number only');
        } else {
            setPhoneValidation('');
        }
    }

    function handleAge(e) {
        setUserDetails({
            username: userDetails.username,
            password: userDetails.password,
            phone: userDetails.age,
            age: e.target.value
        });

        if (parseInt(userDetails.age) < 0 ) {
            setAgeValidation('Age should be greated then 0');
        } else if (parseInt(userDetails.age) > 100) {
            setAgeValidation('Age can not more then 100');
        } else {
            setAgeValidation('');
        }
    }

    return (<div className="container-fluid align-center">
        <form onSubmit={onSubmitDetails}>
            <h2> Register User</h2>
            <dl>
            <dt> User Name</dt>
            <dd><input type= "text" onChange={handleUsername} className="username"/> </dd>
            <dd><span className="usernameValidation text-danger">{usernameValidation}</span></dd>
            <dt> Password</dt>
            <dd><input type= "password" onChange={handlePassword} className="password"/></dd>
            <dd><span className="passwordValidation text-danger">{passwordValidation}</span></dd>
            <dt> Phone</dt>
            <dd><input type= "text" onChange={handlePhone} className="phone"/></dd>
            <dd><span className="phoneValidation text-danger">{phoneValidation}</span></dd>
            <dt> Age</dt>
            <dd><input type= "text" onChange={handleAge} className="password"/></dd>
            <dd><span className="ageValidation text-danger">{ageValidation}</span></dd>
            <button>Submit</button>
        </dl>
        </form>
    </div>);
}
