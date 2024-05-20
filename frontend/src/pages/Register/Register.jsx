import React, { useState } from "react";
import "./register.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      });
      if (res.data.success === true) {
        navigate("/login");
      }
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register-main">
      <div className="register-card">
        <div className="lheading">Register New Account</div>
        <p>Please fill the details to continue</p>
        <div className="inp-box">
          <div className="name-box">
            <span>Full Name</span>
            <input
              type="text"
              placeholder="Deepak Dalal"
              name="name"
              value={userData.name}
              onChange={handleInput}
            />
          </div>
          <div className="email-box">
            <span>Email address</span>
            <input
              type="text"
              placeholder="abc@gmail.com"
              name="email"
              value={userData.email}
              onChange={handleInput}
            />
          </div>
          <div className="password-box">
            <span>Password</span>
            <input
              type="text"
              placeholder="*****"
              name="password"
              value={userData.password}
              onChange={handleInput}
            />
          </div>
        </div>

        <div className="register-btn">
          <button onClick={submitData}>Register</button>
        </div>
        <div className="go-to-login">
     
            Already have account ? <Link to="/login"> Login</Link>
         
        </div>
      </div>
    </div>
  );
};

export default Register;
