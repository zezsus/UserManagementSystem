import React from "react";
import "../../styles/components/Modal.scss";

const DeleteUser = ({ handleDeleteUser, data }) => {
  const handleDelete = (id) => {
    handleDeleteUser(id);
  };
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5">Delete User</h1>
        </div>
        <div
          className="modal-body d-flex justify-content-center align-items-center"
          style={{ height: "80px" }}>
          Do you want delete item?
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal">
            No
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDelete(data)}
            data-bs-dismiss="modal">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
