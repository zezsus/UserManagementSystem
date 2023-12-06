import React from "react";
import icons from "../utils/icons";
import "../styles/Users.scss";
import Navbar from "./Navbar";

const Users = () => {
  const { MdDeleteForever, FaRegEdit, IoMdAdd } = icons;
  return (
    <div className="user-management">
      <div className="left">
        <Navbar />
      </div>
      <div className="right">
        <div className="btn-add">
          <button>
            <IoMdAdd size={25} title="New User" />
          </button>
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
              <tr>
                <td className="index">1</td>
                <td>abc</td>
                <td>đăng nhập, truy cập home</td>
                <td className="button">
                  <FaRegEdit size={25} className="btn-edit" title="Edit" />
                  <MdDeleteForever
                    size={25}
                    className="btn-delete"
                    title="Delete"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
