import React from "react";
import "../styles/Home.scss";
import Navbar from "./Navbar";

const Home = () => {
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
