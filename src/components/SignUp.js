import React from "react";
import icons from "../utils/icons";
import { Link } from "react-router-dom";
import "../styles/SignUp.scss";

const SignUp = () => {
  const { FaGoogle, FaFacebookF } = icons;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signUp">
      <div className=" container">
        <h2>Sign Up</h2>
        <form className="form-signUp" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />

          <div className="form-button">
            <button className="btn-signUp">Sign Up</button>
            <span>
              If you have an account? <Link to="/login">Login</Link>
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

export default SignUp;
