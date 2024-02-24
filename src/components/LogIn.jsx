import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LogIn({loginCheck}) {
    const [name,setName] = useState();
    const [password,setPassword] = useState();
    const [validName,setValidName] = useState(null);
    const [validPassword,setValidPassword] = useState(null);
    const [alert,setAlert] = useState("")
    const [alertClass,setAlertClass] = useState("d-none")
    const navigate = useNavigate();

    function handleSubmit(){
        if(name === "admin" && password === "admin"){
            navigate("/todo")
            loginCheck()
            setAlertClass("d-none")
        } else if (name === ""){
            setValidName("is-invalid")
            setAlertClass()
            setAlert("Username is empty!")
            setValidPassword("")
        } else if (name !== "admin"){
            setValidName("is-invalid")
            setAlertClass()
            setAlert("User is not Registered!")
            setValidPassword("")
        } else if (password !== "admin"){
            setValidPassword("is-invalid")
            setAlertClass()
            setAlert("Password is Incorrect!")
            setValidName("")
        }
    }

    function handleName(event){
        setName(event.target.value)
    }

    function handlePassword(event){
        setPassword(event.target.value)
    }

  return (
    <div className='col-12 text-center'>
            <div className='container logInCard col-lg-6 col-8 p-3'>
                <h3 className='text-center p-2 mb-2 mt-2 logInTitle'>LOG IN</h3><hr />
                <div className="form-floating mb-3">
                    <input type="text" className={`form-control ${validName}`} id="uName" placeholder="Username" onChange={handleName}/>
                    <label>Username</label>
                </div>
                <div className="form-floating">
                    <input type="password" className={`form-control ${validPassword}`} id="pw" placeholder="Password" onChange={handlePassword}/>
                    <label>Password</label>
                </div>
                <div className={`alert alert-danger mt-2 ${alertClass}`} role="alert">
                    {alert}
                </div>
                <button className='btn btn-success m-3' onClick={handleSubmit}>SUBMIT</button>
            </div>
    </div>
  )
}
