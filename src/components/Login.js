import React, { useEffect, useState } from "react";
import icons from "../utils/icons";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.scss";
import { jwtDecode } from "jwt-decode";
import { LOCAL_STORAGE_NAME, LOCAL_STORAGE_REGISTER } from "../utils/containts";
import FacebookLogin from "react-facebook-login";

const Login = () => {
  const { FaFacebookF } = icons;
  const navigate = useNavigate();

  const [values, setValues] = useState({});
  const [error, setError] = useState("");
  const { email, password } = values;

  const handleOnChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLoginWithGoogle = (res) => {
    const idToken = res.credential;
    const userObject = jwtDecode(idToken);
    document.getElementById("login-with-google").hidden = true;
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(userObject));
    if (idToken) {
      navigate("/");
      console.log("userObject", userObject);
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "1084637938673-9ok5uba2prvifnqdofu0d3v3743k2sgj.apps.googleusercontent.com",
      callback: handleLoginWithGoogle,
    });

    google.accounts.id.renderButton(
      document.getElementById("login-with-google"),
      {
        theme: "outline",
        size: "large",
      }
    );
  }, []);

  const handleLoginWithFacebook = (res) => {
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(res));

    if (res) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_REGISTER));
    if (email !== data.email || password !== data.password) {
      setError("Email or password invalid");
    } else {
      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(data));
      if (localStorage.getItem(LOCAL_STORAGE_NAME)) {
        navigate("/");
      } else {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem(LOCAL_STORAGE_NAME)) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="login">
      <div className=" container">
        <h2>Login</h2>
        <form className="form-login" onSubmit={handleSubmit}>
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
          <div className="form-button">
            <button type="submit" className="btn-login">
              Login
            </button>
            <span>
              If you don't have an account? <Link to="/sign-up">SignUp</Link>
            </span>
          </div>
        </form>

        <div className="footer">
          <div className="text">
            <hr />
            <span className="text">or login with</span>
          </div>
          <div className="button">
            <div id="login-with-google"></div>
            <div className="login-with-facebook">
              <FaFacebookF size={25} />
              <FacebookLogin
                appId="1594461087962323"
                autoLoad={true}
                fields="name,email,picture"
                callback={handleLoginWithFacebook}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
