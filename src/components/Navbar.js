import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import "../styles/Navbar.scss";

const Navbar = () => {
  const listNav = [
    {
      link: "/home",
      name: "Home",
    },
    {
      link: "/users",
      name: "Users",
    },
    {
      link: "/user-group",
      name: "UserGroup",
    },
  ];

  const [selected, setSelected] = useState(undefined);

  return (
    <div className="navbar-left">
      <div className="logo">
        <h2>USER MANAGEMENT</h2>
      </div>
      <div className="nav-content">
        {listNav.map((item, index) => {
          return (
            <Link to={item.link} className="link">
              <div
                key={index}
                className={`text ${index === selected ? "selected" : ""}`}
                onClick={() => setSelected(index)}>
                <span>{item.name}</span>
                <hr />
              </div>
            </Link>
          );
        })}
      </div>
      <div className="button">
        <Link to="/login">
          <button className="btn-logout">
            <TbLogout2 size={25} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
