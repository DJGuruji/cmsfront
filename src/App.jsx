import React, { useEffect } from 'react';

import useGlobalStore from "./store";
import { getSession } from './lib/session';
import { toast } from 'sonner';

import './App.css'
import AdminRouter from './routers/AdminRouter';
import AuthRouter from './routers/AuthRouter'
import HomeRouter from './routers/HomeRouter'
import { Route,Routes,Link,useNavigate } from 'react-router-dom';

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
        adminData.isAdmin ? <AdminRouter /> : <HomeRouter />
      ) : (
        <AuthRouter />
      )}
    </>
  );
}

export default App;
