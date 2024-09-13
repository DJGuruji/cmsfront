import React, { useState, useEffect } from "react";
import Complaints from "../pages/Complaints";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Notification from "../pages/Notification";
import Logs from "../pages/Logs";
import Mybranch from "../pages/Mybranch";
import Settings from "../pages/Settings";
import Trash from "../pages/Trash";
import Users from "../pages/Users";
import Activities from "../pages/Activities";
import UserDetails from "../pages/UserDetails";
import { ComplaintForm } from "../pages/ComplaintForm";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import musk from "/musk.jpg";
import { FaBars } from 'react-icons/fa'; // Import menu icon

const HomeRouter = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleMenuItemClick = () => {
    setDropdown(false); // Close dropdown when an item is clicked
  };

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (window.location.pathname !== '/') {
  //     navigate('/');
  //   }
  // }, [navigate]);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white border-b-2 z-50">
        <div className="flex justify-between items-center h-20 px-4">
          <div className="text-lg font-bold">Logo</div>
          <div className="hidden md:flex">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-slate-500">Home</Link>
              </li>
              <li>
                <Link to="complaints" className="hover:text-slate-500">Complaints</Link>
              </li>
              <li>
                <Link to="profile" className="hover:text-slate-500">Profile</Link>
              </li>
              <li>
                <Link to="notification" className="hover:text-slate-500">Notifications</Link>
              </li>
              <li className="text-red-700">
                <Link to="" className="hover:text-slate-500">Logout</Link>
              </li>
              <li>
                <img className="rounded-full w-14 h-14" src={musk} alt="Profile" />
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="text-2xl" onClick={handleDropdown}>
              <FaBars /> {/* Menu icon */}
            </button>
            {dropdown && (
              <div className="absolute top-20 right-0 mt-2 bg-gray-200 rounded-md shadow-lg w-48">
                <ul className="flex flex-col text-lg">
                  <li>
                    <Link to="/" onClick={handleMenuItemClick} className="block px-4 py-2 hover:bg-gray-300">Home</Link>
                  </li>
                  <li>
                    <Link to="complaints" onClick={handleMenuItemClick} className="block px-4 py-2 hover:bg-gray-300">Complaints</Link>
                  </li>
                  <li>
                    <Link to="profile" onClick={handleMenuItemClick} className="block px-4 py-2 hover:bg-gray-300">Profile</Link>
                  </li>
                  <li>
                    <Link to="notification" onClick={handleMenuItemClick} className="block px-4 py-2 hover:bg-gray-300">Notifications</Link>
                  </li>
                  <li>
                    <Link to="" onClick={handleMenuItemClick} className="block px-4 py-2 text-red-700 hover:bg-gray-300">Logout</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside className="fixed top-20 left-0 w-20 lg:w-48 xl:w-48 h-full bg-slate-100 border-r-2">
          <ul className="flex flex-col text-center text-lg space-y-10 mt-8">
            <li>
              <Link to="users" className="block p-2 hover:bg-gray-200">Users</Link>
            </li>
            <li>
              <Link to="mybranch" className="block p-2 hover:bg-gray-200">My Branch</Link>
            </li>
            <li>
              <Link to="settings" className="block p-2 hover:bg-gray-200">Settings</Link>
            </li>
            <li>
              <Link to="trash" className="block p-2 hover:bg-gray-200">Trash</Link>
            </li>
            <li>
              <Link to="logs" className="block p-2 hover:bg-gray-200">Logs</Link>
            </li>
            <li>
              <Link to="activities" className="block p-2 hover:bg-gray-200">Activities</Link>
            </li>
          </ul>
        </aside>
        <main className="ml-20 lg:ml-48 xl:ml-48 w-full p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="complaints" element={<Complaints />} />
            <Route path="profile" element={<Profile />} />
            <Route path="notification" element={<Notification />} />
            <Route path="users" element={<Users />} />
            <Route path="mybranch" element={<Mybranch />} />
            <Route path="settings" element={<Settings />} />
            <Route path="trash" element={<Trash />} />
            <Route path="logs" element={<Logs />} />
            <Route path="activities" element={<Activities />} />
            <Route path="userdetails" element={<UserDetails />} />
            <Route path="complaintform" element={<ComplaintForm />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default HomeRouter;
