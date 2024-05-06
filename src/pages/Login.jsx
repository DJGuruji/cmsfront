import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Input from "../components/Input";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-3/4 max-w-md p-6 bg-white shadow-md rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-center mb-3 text-slate-700 lg:mt-2 lg:mb-2 lg:text-2xl xl:mt-2 xl:mb-2 xl:text-2xl ">
            <i class="fa-duotone fa-user"></i> LOGIN
          </h1>
          <label htmlFor="inputEmail" className="">
              User Email:
            </label>
            <Input
              id="inputEmail"
              type="email"
              name="email"
              onChange={handleInputChange}
              placeholder="User Email"
            />
            <label htmlFor="inputPassword" className="">
              Password:
            </label>
            <Input
              id="inputPassword"
              type="password"
              name="password"
              onChange={handleInputChange}
              placeholder="Password"
            />
        </div>
      
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log in
          </button>
        </div>
        <p className="ml-7 lg:ml-9 xl:ml-9 mt-5 ">
          Not registered yet?{" "}
          <a
            onClick={() => navigate("/")}
            className="text-blue-700 hover:underline hover:text-green-700 "
          >
            signup{" "}
          </a>
          here.
        </p>
      </form>
    </div>
  );
};

export default Login;
