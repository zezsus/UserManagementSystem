import React from "react";

const EditUser = () => {
  return (
    <div>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">Edit User</h1>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-danger">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
