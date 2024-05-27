import React, { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContextValue } from "../../Contexts/AppContext";

const Login = () => {
  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();

  const storeToken  = useContextValue()

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("http://localhost:5000/api/auth/login", {
        email: loginData.email,
        password: loginData.password,
      });

      if (resp.data.success === true) {
        alert("Login Successfull");

        console.log(resp.data.token)
        // setAuth(true);
        storeToken(resp.data.token)
        navigate("/")
      }
      return resp;

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-main">
      <div className="login-card">
        <div className="lheading">Login to Account</div>
        <p>Please enter your email and password to continue</p>
        <div className="inp-box">
          <div className="email-box">
            <span>Email address</span>
            <input
              type="email"
              placeholder="abc@gmail.com"
              name="email"
              value={loginData.email}
              onChange={handleInput}
            />
          </div>
          <div className="password-box">
            <span>Password</span>
            <input
              type="text"
              placeholder="*****"
              name="password"
              value={loginData.password}
              onChange={handleInput}
            />
          </div>
          <div className="password-extra">
            <div className="pe-left">
              <input type="checkbox" />
              <span>Remember Password</span>
            </div>
            <div className="pe-right">
              <Link to="/">Forget Password?</Link>
            </div>
          </div>
        </div>

        <div className="login-btn">
          <button onClick={handleLogin}>Login</button>
        </div>
        <div className="go-to-register">
          <p>
            Don't have account ? <Link to="/register"> Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
