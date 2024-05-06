import { useState } from "react";
import "./CSS/LoginSignUp.css";

const LoginSignUp = () => {

  const [state, setState] = useState("Login")
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  })

  const changeHandle = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const login = async () => {
    console.log("Login function executed", formData)
    let responseData
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers : {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json())
      .then((data) => responseData = data)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      if (formData.email === "admin@gmail.com" && formData.password === "admin") {
        window.location.replace("http://localhost:5173/");
      } else {
          window.location.replace("/");
      }
    } else {
        alert(responseData.error)
    }
  }

  const signup = async () => {
    console.log("Sign up function executed" , formData)
    let responseData
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers : {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json())
      .then((data) => responseData = data)

    if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        if (formData.email === "admin@gmail.com" && formData.password === "admin") {
          window.location.replace("http://localhost:5174/");
        } else {
            window.location.replace("/");
        }
    } else {
        alert(responseData.error)
    }
}


  return (
    <>
      <div className="loginSignUp">
        <div className="loginSignUp-container">
          <h1>{state}</h1>
          <div className="loginSignUp-fields">
            {state === 'Sign Up' ? <input name="username" value={formData.username} onChange={changeHandle} type="text" placeholder="Your Name" /> : <></>}
            <input name="email" value={formData.email} onChange={changeHandle} type="email" placeholder="Email Address" />
            <input name="password" value={formData.password} onChange={changeHandle} type="password" placeholder="Password" />
          </div>
          <button onClick={() => {state === "Login" ? login() : signup()}}>Continue</button>
          {state==="Sign Up"
          ? <p className="loginSignUp-login">
            Already have an account? <span  onClick={() => {setState("Login")}}>Login here</span>
          </p>
          : <p className="loginSignUp-login">
            Create an account? <span onClick={() => {setState("Sign Up")}}>Click here</span>
          </p> }
          <div className="loginSignUp-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignUp;