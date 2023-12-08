import React, { useEffect } from "react";
import "../styles/views/Home.scss";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_NAME } from "../utils/containts";
import Navbar from "../components/Navbar";

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
