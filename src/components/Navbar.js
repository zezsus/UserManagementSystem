import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import "../styles/Navbar.scss";
import { LOCAL_STORAGE_NAME } from "../utils/containts";

const Navbar = () => {
  const listNav = [
    {
      link: "/",
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

  const [user, setUser] = useState({});
  const [selected, setSelected] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME)));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE_NAME);
    navigate("/login");
  };

  return (
    <div className="navbar-left">
      <div className="logo">
        <h2>USER MANAGEMENT</h2>
      </div>
      <div className="nav-content">
        {listNav.map((item, index) => {
          return (
            <Link to={item.link} className="link" key={index}>
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
      <div className="footer">
        {user && (
          <div className="user-info">
            <span>{user.name}</span>
          </div>
        )}

        <button className="btn-logout" onClick={handleLogout}>
          <TbLogout2 size={25} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
