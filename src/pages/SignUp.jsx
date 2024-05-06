import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'
import Input from '../components/Input';

const SignupForm = () => {
  const navigate = useNavigate()
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');
  // const [department, setDepartment] = useState('');

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const options = [
    { value: 'Cse', label: 'Computer Science And Engineering' },
    { value: 'Civil', label: 'Civil Engineering' },
    { value: 'ece', label: 'Electronics And Communication Engineering' },
    { value: 'eee', label: 'Electrical And Electronics Engineering' },
  ]

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-3/4 max-w-md p-6 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
        <h1 className="text-2xl font-bold text-center mb-3 text-slate-700 lg:mt-2 lg:mb-2 lg:text-2xl xl:mt-2 xl:mb-2 xl:text-2xl ">   <i className="fas fa-user text-3xl text-gray-700 mr-2"></i>SIGNUP</h1>
        <label htmlFor="inputPassword" className="">
              Username:
            </label>
            <Input
              id="username"
              type="text"
              name="username"
              onChange={handleInputChange}
              placeholder="User Name"
            />
        </div>
        <div className="mb-4">
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
        <div className="mb-4">
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
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="department">
            Department
          </label>
        
            <Select options={options} />
        </div>
        <div className="flex items-center justify-center">
        <button className="border-2 border-blue-600 bg-blue-400 text-white hover:bg-blue-600 hover:border-blue-400 w-1/2 h-9 text-center rounded-md lg:mt-5 xl:mt-5 ">
<input type="submit" value="Submit" />
</button>
        </div>
        <p className="ml-7 lg:ml-9 xl:ml-9 mt-5 ">
Already have an account ? <a onClick={() => navigate('/login')} className="text-blue-700 hover:underline hover:text-green-700 ">Login </a>here.

 
</p>
      </form>
    </div>
  );
};

export default SignupForm;
