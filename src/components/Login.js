import React from "react";
import icons from "../utils/icons";
import { Link } from "react-router-dom";
import "../styles/Login.scss";

const Login = () => {
  const { FaGoogle, FaFacebookF } = icons;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <div className=" container">
        <h2>Login</h2>
        <form className="form-login" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
          <div className="form-button">
            <button className="btn-login">Login</button>
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
            <button className="btn-login-google">
              <FaGoogle size={25} title="Login with Google" />
            </button>
            <button className="btn-login-facebook">
              <FaFacebookF size={25} title="Login with Facebook" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
