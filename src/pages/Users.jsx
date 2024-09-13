import React from 'react'
import Select from "react-select";
import { useNavigate } from 'react-router-dom';
import UserDetails from './UserDetails';
import { Routes, Route ,Link} from "react-router-dom";

const Users = () => {
 const navigate = useNavigate()
  const options = [
    { value: "Cse", label: "Computer Science And Engineering" },
    { value: "Civil", label: "Civil Engineering" },
    { value: "ece", label: "Electronics And Communication Engineering" },
    { value: "eee", label: "Electrical And Electronics Engineering" },
  ];


  return (
    <div className="search  xl:w-3/4 h-full mt-20 ">
<form className="border-2 p-2">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only "
        >
          Search
        </label>
        <div className="relative ">
          <div className=" absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <input
            type="search"
            id="default-search"
            class="mt-3  lg:mt-5 xl:mt-5 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-blue-500 "
            placeholder="Type Your Search "
            required
          />
          <button
            type="submit"
            class=" text-white absolute right-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 mt-3 py-2 "
          >
            Search
          </button>
        </div>
        <h1 className="m-3 text-md">Filter:</h1>
        <div className="m-3 flex">
          <h1> Department: </h1>
          <span className="ml-3">
            <Select options={options} />
          </span>
        </div>

        <div className="m-3 flex">
          <h1>Branch :</h1>
          <span className="ml-3">
            <Select options={options} />
          </span>
        </div>
      </form>
      <table
        className="mt-5 p-5 table border-2"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr className="">
            <th>User Id</th>

            <th>Name</th>
     
            <th>Details</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td>1</td>

            <td>john</td>

            <td>     <p className="ml-7 lg:ml-9 xl:ml-9 mt-5 ">
            <Link to="/userdetails"className="text-blue-700 hover:underline hover:text-green-700 ">Show Details</Link>

 
</p>
     </td>

          </tr>
        </tbody>
      </table>
   
  </div>
  )
}

export default Users