import React, { useEffect } from "react";
import "../styles/Home.scss";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_NAME } from "../utils/containts";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem(LOCAL_STORAGE_NAME)) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className="home">
      <div className="nav-left">
        <Navbar />
      </div>
      <div className="right">Home</div>
    </div>
  );
};

export default Home;
