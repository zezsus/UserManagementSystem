import React from "react";
import icons from "../utils/icons";
import "../styles/UserGroup.scss";
import Navbar from "./Navbar";

const UserGroup = () => {
  const { MdDeleteForever, FaRegEdit, IoMdAdd } = icons;

  return (
    <div className="user-group">
      <div className="nav-left">
        <Navbar />
      </div>
      <div className="right">
        <div className="btn-add">
          <button>
            <IoMdAdd size={25} title="New User" />
          </button>
        </div>
        <div className="user-group-table">
          <table>
            <thead>
              <tr>
                <th>Index</th>
                <th>Group</th>
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
                  <FaRegEdit size={25} className="btn-edit" />
                  <MdDeleteForever size={25} className="btn-delete" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserGroup;
