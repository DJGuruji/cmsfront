import React, { useState,useEffect } from "react";
import Complaints from "../pages/Complaints";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import {ComplaintForm} from "../pages/ComplaintForm";
import Notification from "../pages/Notification";
import { Routes, Route, Link,useNavigate } from "react-router-dom";
import musk from "/musk.jpg";


const HomeRouter = () => {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  useEffect(() => {
    
    if (window.location.pathname !== '/') {
     
      navigate('/');
    }
  }, []);

  return (
    <>
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="complaints" element={<Complaints />} />
        <Route path="profie" element={<Profile />} />
        <Route path="notification" element={<Notification />} />
        <Route path="complaintform" element={<ComplaintForm />} />
      </Routes>
    </>
  );
};

export default HomeRouter;
