import React, { useEffect, useState } from "react";
import icons from "../utils/icons";
import "../styles/views/Users.scss";
import Navbar from "../components/Navbar";
import AddUser from "../components/users/AddUser";
import DeleteUser from "../components/users/DeleteUser";
import EditUser from "../components/users/EditUser";
import { LOCAL_STORAGE_USER } from "../utils/containts";
import userData from "../utils/UserData.json";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

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
  }, []);

  const handleAddUser = (email, permissions) => {
    const newAccount = {
      id: uuidv4(),
      email: email,
      permission: permissions,
    };

    const updateUser = [...data, newAccount];

    setData(updateUser);

    localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(updateUser));

    toast.success("Add successfully");
  };

  const handleDeleteUser = (deleteUser) => {
    console.log(deleteUser);
    const updateUser = data.filter((data) => data.email !== deleteUser);
    setData(updateUser);
    localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(updateUser));
  };

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
            data-bs-target="#addModal">
            <IoMdAdd size={25} title="New User" />
          </button>
          <div
            className="modal fade"
            id="addModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true">
            <AddUser handleAddUser={handleAddUser} />
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
                        <div>
                          <FaRegEdit
                            size={25}
                            className="btn-edit"
                            title="Edit"
                            data-bs-toggle="modal"
                            data-bs-target="#editModal"
                          />

                          <div
                            className="modal fade"
                            id="editModal"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="staticBackdropLabel"
                            aria-hidden="true">
                            <EditUser />
                          </div>
                        </div>

                        <div>
                          <MdDeleteForever
                            size={25}
                            className="btn-delete"
                            title="Delete"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteModal"
                          />

                          <div
                            className="modal fade"
                            id="deleteModal"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="staticBackdropLabel"
                            aria-hidden="true">
                            <DeleteUser
                              handleDeleteUser={handleDeleteUser}
                              data={user.email}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <EditUser />
        </div>
      </div>
    </div>
  );
};

export default Users;
