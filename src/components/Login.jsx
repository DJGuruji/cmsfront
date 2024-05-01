import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';


const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-3/4 max-w-md p-6 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
        <h1 className="text-2xl font-bold text-center mb-3 text-slate-700 lg:mt-2 lg:mb-2 lg:text-2xl xl:mt-2 xl:mb-2 xl:text-2xl "><i class="fa-duotone fa-user"></i> LOGIN</h1>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
Not registered yet? <a onClick={() => navigate('/')} className="text-blue-700 hover:underline hover:text-green-700 ">signup </a>here.

 
</p>
      </form>
    </div>
  );
};

export default Login;
