import React, { useState } from "react";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Complaints from "../pages/Complaints";
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
import musk from "/musk.jpg";
import { FaBars } from 'react-icons/fa';
import { FaHome } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { RiNotification3Fill } from "react-icons/ri";

const HomeRouter = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleMenuItemClick = () => {
    setDropdown(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white border-b-2 z-50">
        <div className="flex justify-between items-center h-20 px-4">
          <div className="text-lg font-bold">Logo</div>
          <div className="hidden md:flex">
            <ul className="flex space-x-4">
              <li className="">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    isActive ? 'flex underline text-slate-900 font-semibold ' : 'flex hover:text-slate-500'
                  }
                ><FaHome className="m-1 text-slate-900 "/>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="complaints" 
                  className={({ isActive }) => 
                    isActive ? 'flex underline text-slate-900 font-semibold' : 'flex hover:text-slate-500'
                  }
                ><FaQuestionCircle className="m-1 text-slate-900 " />
                  Complaints
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="profile" 
                  className={({ isActive }) => 
                    isActive ? 'flex underline text-slate-900 font-semibold' : 'flex hover:text-slate-500'
                  }
                ><FaUserCircle className="m-1 text-slate-900"/>
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="notification" 
                  className={({ isActive }) => 
                    isActive ? 'flex underline text-slate-900 font-semibold' : 'flex hover:text-slate-500'
                  }
                ><RiNotification3Fill  className="m-1 text-slate-900"/>
                  Notifications
                </NavLink>
              </li>
              <li className="text-red-700">
                <NavLink 
                  to="" 
                  className="hover:text-slate-500"
                >
                  Logout
                </NavLink>
              </li>
              <li>
                <img className="rounded-full w-14 h-14" src={musk} alt="Profile" />
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="text-2xl" onClick={handleDropdown}>
              <FaBars />
            </button>
            {dropdown && (
              <div className="absolute top-20 right-0 mt-2 bg-gray-200 rounded-md shadow-lg w-48">
                <ul className="flex flex-col text-lg">
                  <li>
                    <NavLink 
                      to="/" 
                      onClick={handleMenuItemClick} 
                      className={({ isActive }) => 
                        isActive ? 'block px-4 py-2 bg-gray-300' : 'block px-4 py-2 hover:bg-gray-300'
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="complaints" 
                      onClick={handleMenuItemClick} 
                      className={({ isActive }) => 
                        isActive ? 'block px-4 py-2 bg-gray-300' : 'block px-4 py-2 hover:bg-gray-300'
                      }
                    >
                      Complaints
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="profile" 
                      onClick={handleMenuItemClick} 
                      className={({ isActive }) => 
                        isActive ? 'block px-4 py-2 bg-gray-300' : 'block px-4 py-2 hover:bg-gray-300'
                      }
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="notification" 
                      onClick={handleMenuItemClick} 
                      className={({ isActive }) => 
                        isActive ? 'block px-4 py-2 bg-gray-300' : 'block px-4 py-2 hover:bg-gray-300'
                      }
                    >
                      Notifications
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="" 
                      onClick={handleMenuItemClick} 
                      className="block px-4 py-2 text-red-700 hover:bg-gray-300"
                    >
                      Logout
                    </NavLink>
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
              <NavLink 
                to="users" 
                className={({ isActive }) => 
                  isActive ? 'underline text-slate-800 block p-2 bg-gray-200' : 'block p-2 hover:bg-gray-200'
                }
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="mybranch" 
                className={({ isActive }) => 
                  isActive ? 'underline text-slate-800 block p-2 bg-gray-200' : 'block p-2 hover:bg-gray-200'
                }
              >
                My Branch
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="settings" 
                className={({ isActive }) => 
                  isActive ? 'underline text-slate-800 block p-2 bg-gray-200' : 'block p-2 hover:bg-gray-200'
                }
              >
                Settings
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="trash" 
                className={({ isActive }) => 
                  isActive ? 'underline text-slate-800 block p-2 bg-gray-200' : 'block p-2 hover:bg-gray-200'
                }
              >
                Trash
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="logs" 
                className={({ isActive }) => 
                  isActive ? 'underline text-slate-800 block p-2 bg-gray-200' : 'block p-2 hover:bg-gray-200'
                }
              >
                Logs
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="activities" 
                className={({ isActive }) => 
                  isActive ? 'underline text-slate-800 block p-2 bg-gray-200' : 'block p-2 hover:bg-gray-200'
                }
              >
                Activities
              </NavLink>
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
