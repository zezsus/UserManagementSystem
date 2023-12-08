import React, { useEffect, useState } from "react";
import icons from "../utils/icons";
import "../styles/views/Users.scss";
import Navbar from "../components/Navbar";
import AddUser from "../components/users/AddUser";
import { LOCAL_STORAGE_USER } from "../utils/containts";
import userData from "../utils/UserData.json";

const Users = () => {
  const { MdDeleteForever, FaRegEdit, IoMdAdd } = icons;
  const [data, setData] = useState([]);

  useEffect(() => {
    const res = localStorage.getItem(LOCAL_STORAGE_USER);
    if (!res) {
      localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(userData));
    } else {
      const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER));
      setData(userData);
    }
  });

  return (
    <div className="user-management">
      <div className="left">
        <Navbar />
      </div>
      <div className="right">
        <div className="btn-add">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addUser">
            <IoMdAdd size={25} title="New User" />
          </button>
          <div
            className="modal fade"
            id="addUser"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true">
            <AddUser />
          </div>
        </div>

        <div className="user-management-table">
          <table>
            <thead>
              <tr>
                <th>Index</th>
                <th>User</th>
                <th>Permission</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="body">
              {data &&
                data.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td className="index">{index + 1}</td>
                      <td>{user.email}</td>
                      <td>{user.permission + " "} </td>
                      <td className="button">
                        <FaRegEdit
                          size={25}
                          className="btn-edit"
                          title="Edit"
                        />
                        <MdDeleteForever
                          size={25}
                          className="btn-delete"
                          title="Delete"
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
