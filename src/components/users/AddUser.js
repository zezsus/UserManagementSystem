import React, { useState } from "react";
import "../../styles/components/Modal.scss";
import { toast } from "react-toastify";
import permission from "../../utils/Permission.json";

const AddUser = ({ handleAddUser }) => {
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
    if (!email || !checkedPermissions) {
      toast.error("Add failed. Missing Email or Permission");
    } else {
      handleAddUser(email, checkedPermissions);
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
