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
  const [editValue, setEditValue] = useState(null);

  useEffect(() => {
    const res = localStorage.getItem(LOCAL_STORAGE_USER);
    if (!res) {
      localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(userData));
    } else {
      const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER));
      setData(userData);
    }
  }, []);

  //Add user
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

  //Delete user
  const handleDeleteUser = (deleteUser) => {
    const updateUser = data.filter((data) => data.id !== deleteUser);
    setData(updateUser);
    localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(updateUser));
  };

  const handleEditUser = (user) => {
    setEditValue(user);
  };
  const handleUserEditInfo = (updatedUser) => {
    const updatedData = data.map((user) => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      }
      return user;
    });
    setData(updatedData);
    localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(updatedData));
    setEditValue(null);
  };

  // const getUserEditInfo = (info) => {
  //   const updatedUsers = data.map((user) => {
  //     if (user.id === info.id) {
  //       return {
  //         ...user,
  //         email: info.email,
  //         permissions: info.permissions,
  //       };
  //     } else {
  //       return user;
  //     }
  //   });
  //   setData(updatedUsers);
  //   localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(updatedUsers));
  // };

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
                        <span>
                          <FaRegEdit
                            size={25}
                            className="btn-edit"
                            title="Edit"
                            data-bs-toggle="modal"
                            data-bs-target="#editModal"
                            onClick={() => handleEditUser(user)}
                          />
                          <div
                            className="modal fade"
                            id="editModal"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="staticBackdropLabel"
                            aria-hidden="true">
                            <EditUser
                              editValue={editValue}
                              handleUserEditInfo={handleUserEditInfo}
                            />
                          </div>
                        </span>

                        <span>
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
                              data={user.id}
                            />
                          </div>
                        </span>
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
