import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SignUp.scss";
import icons from "../utils/icons";
import { LOCAL_STORAGE_NAME, LOCAL_STORAGE_REGISTER } from "../utils/containts";

const SignUp = () => {
  const [values, setValues] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { name, email, password, confirmPassword } = values;

  const handleOnChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("Missing email or password or confirmPassword");
      setTimeout(() => setError(""), 3000);
    } else {
      if (password !== confirmPassword) {
        setError("Password does not match the Confirm Passwordssword");
        setTimeout(() => setError(""), 3000);
      } else {
        const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_REGISTER));
        console.log(data);
        if (email === data) {
          setError("Email already exists");
          setTimeout(() => setError(""), 3000);
        } else {
          localStorage.setItem(LOCAL_STORAGE_REGISTER, JSON.stringify(values));
          localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(values));
          if (localStorage.getItem(LOCAL_STORAGE_NAME)) {
            navigate("/");
          }
        }
      }
    }
  };

  console.log(error);
  return (
    <div className="signUp">
      <div className=" container">
        <h2>Sign Up</h2>
        {error && (
          <div className="error">
            <icons.MdOutlineErrorOutline size={25} />
            <span>{error}</span>
          </div>
        )}
        <form className="form-signUp" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={handleOnChange}
          />
          <input
            type="email"
            placeholder="Email address"
            name="email"
            value={email}
            onChange={handleOnChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleOnChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleOnChange}
          />

          <div className="form-button">
            <button type="submit" className="btn-signUp">
              Sign Up
            </button>
            <span>
              If you have an account? <Link to="/login">Login</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
