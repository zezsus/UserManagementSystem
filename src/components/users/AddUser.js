import React, { useState } from "react";
import "../../styles/components/user/AddUser.scss";
import { LOCAL_STORAGE_USER } from "../../utils/containts";
import { toast } from "react-toastify";

const permission = [
  {
    name: "Create",
    value: "Create",
  },
  {
    name: "Read",
    value: "Read",
  },
  {
    name: "Edit",
    value: "Edit",
  },
  {
    name: "Delete",
    value: "Delete",
  },
  {
    name: "Login",
    value: "Login",
  },
];

const AddUser = () => {
  const [email, setEmail] = useState("");
  const [checkedPermissions, setCheckedPermissions] = useState([]);

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    if (checked) {
      setCheckedPermissions([...checkedPermissions, id]);
    } else {
      setCheckedPermissions(
        checkedPermissions.filter((permission) => permission !== id)
      );
    }
  };

  const handleAdd = () => {
    const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER));
    if (!email || !checkedPermissions) {
      toast.error("Add failed. Missing Email or Permission");
    } else {
      const newAccount = {
        email: email,
        permission: checkedPermissions,
      };

      const updateUser = [...data, newAccount];

      localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(updateUser));
    }

    handleModalClose();
  };

  const handleModalClose = () => {
    setEmail("");
    setCheckedPermissions([]);
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5">Add User</h1>
        </div>
        <div className="modal-body">
          <form>
            <div className="add-email">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="add-permission">
              <label className="title">Permission</label>
              <div className="permission">
                {permission.map((item, index) => {
                  return (
                    <div key={index}>
                      <input
                        type="checkbox"
                        id={item.name}
                        checked={checkedPermissions.includes(item.name)}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor={item.name}>{item.value}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className=" close btn btn-secondary"
            data-bs-dismiss="modal"
            onClick={handleModalClose}>
            Close
          </button>
          <button
            type="button"
            data-bs-dismiss="modal"
            className="btn btn-primary"
            onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
