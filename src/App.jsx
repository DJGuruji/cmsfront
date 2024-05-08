import React, { useEffect } from "react";

import useGlobalStore from "./store";
import { getSession } from "./lib/session";
import { toast } from "sonner";
import Login from "./pages/Login"
import Signup from "./pages/SignUp";
import NotFound from "./pages/NotFound";

import Complaints from "./pages/Complaints";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Notification from "./pages/Notification";
import Logs from "./pages/Logs";
import Mybranch from "./pages/Mybranch";
import Settings from "./pages/Settings";
import Trash from "./pages/Trash";
import Users from "./pages/Users";
import Activities from "./pages/Activities";
import UserDetails from "./pages/UserDetails";
import {ComplaintForm} from "./pages/ComplaintForm";


// import AdminRouter from "./routers/AdminRouter";
// import AuthRouter from "./routers/AuthRouter";
// import HomeRouter from "./routers/HomeRouter";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const { adminData, updateAdminData } = useGlobalStore();

  useEffect(() => {
    const storedAdminData = getSession("admin_data");
    if (storedAdminData) {
      updateAdminData({
        type: "ADMIN_LOGIN",
        payload: JSON.parse(storedAdminData),
      });
    }
  }, []);

  const logout = () => {
    updateAdminData({ type: "ADMIN_LOGOUT" });
    toast.info("Logging Out");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const isLogged = !!adminData?.token;

  return (
    <>
      {isLogged ? (
        adminData? (
          <div>
            <nav className="fixed top-0">
              <div className="  border border-b-2 flex justify-between w-screen h-20">
                <div className="">Logo</div>
                <div className="w-1/2"></div>
                <div className="md:flex hidden">
                  <ul className="flex text-lg">
                    <li className=" mt-2 p-2">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="p-2 mt-2">
                      <Link to="complaints">Compaints</Link>
                    </li>
                    <li className="p-2 mt-2">
                      <Link to="profie">Profile</Link>
                    </li>
                    <li className="p-2 mt-2">
                      <Link to="notification">Notifications</Link>
                    </li>
                    <li className="p-2 mt-2 text-red-700">
                      <Link to="">Logout</Link>
                    </li>
                    <li>
                      <img
                        className="rounded-full w-14 mt-2 h-14"
                        src={musk}
                        alt="profie"
                      />
                    </li>
                  </ul>
                </div>
                <div>
                  <button
                    className=" mt-4 relative md:hidden "
                    onClick={handleDropdown}
                  >
                    Menu
                  </button>
                  {dropdown && (
                    <div className="absolute mt-2 py-2 bg-grey-200 rounded-md shadow-lg">
                      <ul className=" flex flex-col text-lg">
                        <li className=" mt-2 p-2">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="py-2 overflow-hidden mt-2">
                          <Link to="complaints">Compaints</Link>
                        </li>
                        <li className="py-2 mt-2">
                          <Link to="profie">Profile</Link>
                        </li>
                        <li className="py-2 overflow-hidden mt-2">
                          <Link to="notification">Notifications</Link>
                        </li>
                        <li className="py-2 mt-2 text-red-700">
                          <Link to="">Logout</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </nav>
       
          <div className="">
            {/* md:mt-12 lg:mt-12 xl:mt-12 mt-20 */}
            <aside className="fixed left-0  w-20 lg:w-48 xl:w-48  h-full bg-slate-100">
              <ul className="flex flex-col text-center justify-around text-lg space-y-10 ">
                <li className="p-2 mt-5">
                  <Link to="users">Users</Link>
                </li>
                <li className="p-2 overflow-hidden">
                  <Link to="mybranch">Mybranch</Link>
                </li>
                <li className="p-2 overflow-hidden">
                  <Link to="settings">Settings</Link>
                </li>
                <li className="p-2 overflow-hidden">
                  <Link to="trash">Trash</Link>
                </li>
                <li className="p-2 overflow-hidden">
                  <Link to="logs">Logs</Link>
                </li>
                <li className="p-2 overflow-hidden">
                  <Link to="activities">Activities</Link>
                </li>
              </ul>
            </aside>
          </div>
          </div>
        ) : (
          <div>
            <nav className="fixed top-0">
              <div className="  border border-b-2 flex justify-between w-screen h-20">
                <div className="">Logo</div>
                <div className="w-1/2"></div>
                <div className="md:flex hidden">
                  <ul className="flex text-lg">
                    <li className=" mt-2 p-2">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="p-2 mt-2">
                      <Link to="complaints">Compaints</Link>
                    </li>
                    <li className="p-2 mt-2">
                      <Link to="profie">Profile</Link>
                    </li>
                    <li className="p-2 mt-2">
                      <Link to="notification">Notifications</Link>
                    </li>
                    <li className="p-2 mt-2 text-red-700">
                      <Link to="">Logout</Link>
                    </li>
                    <li>
                      <img
                        className="rounded-full w-14 mt-2 h-14"
                        src={musk}
                        alt="profie"
                      />
                    </li>
                  </ul>
                </div>
                <div>
                  <button
                    className=" mt-4 relative md:hidden "
                    onClick={handleDropdown}
                  >
                    Menu
                  </button>
                  {dropdown && (
                    <div className="absolute mt-2 py-2 bg-grey-200 rounded-md shadow-lg">
                      <ul className=" flex flex-col text-lg">
                        <li className=" mt-2 p-2">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="py-2 overflow-hidden mt-2">
                          <Link to="complaints">Compaints</Link>
                        </li>
                        <li className="py-2 mt-2">
                          <Link to="profie">Profile</Link>
                        </li>
                        <li className="py-2 overflow-hidden mt-2">
                          <Link to="notification">Notifications</Link>
                        </li>
                        <li className="py-2 mt-2 text-red-700">
                          <Link to="">Logout</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </nav>
          </div>
        )
      ) : (
        <div className=" flex justify-between w-screen h-20 border border-b-2">
          <div>Logo</div>
          <ul className="flex text-lg ">
            <li className="p-2">
              <Link to="/signup">Sign Up</Link>
            </li>
            <li className="p-2 ">
              <Link to="login">Login</Link>
            </li>
          </ul>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="complaints" element={<Complaints />} />
        <Route path="profie" element={<Profile />} />
        <Route path="notification" element={<Notification />} />

        <Route path="users" element={<Users />} />
        <Route path="mybranch" element={<Mybranch />} />
        <Route path="settings" element={<Settings />} />
        <Route path="trash" element={<Trash />} />
        <Route path="logs" element={<Logs />} />
        <Route path="activities" element={<Activities />} />
        <Route path="/userdetails" element={<UserDetails />} />
        <Route path="complaintform" element={<ComplaintForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
