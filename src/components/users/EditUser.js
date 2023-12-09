import React, { useState } from "react";
import "../../styles/components/Modal.scss";

const EditUser = ({ editValue, handleUserEditInfo }) => {
  const [email, setEmail] = useState();
  const [permissions, setPermissions] = useState([]);

  console.log(editValue);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePermissionChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setPermissions((prevPermissions) => [...prevPermissions, value]);
    } else {
      setPermissions((prevPermissions) =>
        prevPermissions.filter((permission) => permission !== value)
      );
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const updatedUser = {
      id: editValue.id,
      email: email,
      permission: permissions,
    };
    handleUserEditInfo(updatedUser);
    handleModalClose();
  };

  const handleModalClose = () => {
    setEmail("");
    setPermissions([]);
  };

  return (
    <div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Edit User</h1>
          </div>
          <div className="modal-body">
            <form>
              <div className="add-email">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="add-permission">
                <label className="title">Permission</label>
                <div className="permission d-flex flex-column">
                  <label className="d-flex gap-1">
                    <input
                      type="checkbox"
                      value="Create"
                      checked={permissions.includes("Create")}
                      onChange={handlePermissionChange}
                    />
                    Create
                  </label>

                  <label className="d-flex gap-1">
                    <input
                      type="checkbox"
                      value="Read"
                      checked={permissions.includes("Read")}
                      onChange={handlePermissionChange}
                    />
                    Read
                  </label>

                  <label className="d-flex gap-1">
                    <input
                      type="checkbox"
                      value="Edit"
                      checked={permissions.includes("Edit")}
                      onChange={handlePermissionChange}
                    />
                    Edit
                  </label>

                  <label className="d-flex gap-1">
                    <input
                      type="checkbox"
                      value="Delete"
                      checked={permissions.includes("Delete")}
                      onChange={handlePermissionChange}
                    />
                    Delete
                  </label>

                  <label className="d-flex gap-1">
                    <input
                      type="checkbox"
                      value="Login"
                      checked={permissions.includes("Login")}
                      onChange={handlePermissionChange}
                    />
                    Login
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={handleModalClose}>
              Close
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleEdit}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
