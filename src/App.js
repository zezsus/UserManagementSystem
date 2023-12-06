import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import "./styles/App.scss";
import UserGroup from "./components/UserGroup";
import Users from "./components/Users";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="user-management-system">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/user-group" element={<UserGroup />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Login />} />
        </Routes>{" "}
      </BrowserRouter>
    </div>
  );
}

export default App;
