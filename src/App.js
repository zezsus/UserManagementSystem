import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Users from "./views/Users";
import UserGroup from "./views/UserGroup";
import Home from "./views/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="user-management-system">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/user-group" element={<UserGroup />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
      />
    </div>
  );
}

export default App;
