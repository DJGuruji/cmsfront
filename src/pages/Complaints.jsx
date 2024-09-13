import React from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

const Complaints = () => {


  const options = [
    { value: "Cse", label: "Computer Science And Engineering" },
    { value: "Civil", label: "Civil Engineering" },
    { value: "ece", label: "Electronics And Communication Engineering" },
    { value: "eee", label: "Electrical And Electronics Engineering" },
  ];

  return (
    <div className="search lg:w-3/4 xl:w-full h-full mt-20">
      <div className="flex justify-end">
      <Link to="/complaintform"className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-md m-2">Add Complaints +</Link>
      </div>
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
            placeholder="Search Complaints"
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
          <h1>From Department: </h1>
          <span className="ml-3">
            <Select options={options} />
          </span>
        </div>

        <div className="m-3 flex">
          <h1>To Department: </h1>
          <span className="ml-3">
            <Select options={options} />
          </span>
        </div>
      </form>
      <div className="flex border-2 overflow-scroll">
        <h1 className="p-2 m-2">Status:</h1>
        <span className="p-2 border-2 rounded-lg m-2">Active</span>
        <span className="p-2 border-2 rounded-lg m-2">Pending</span>
        <span className="p-2 border-2 rounded-lg m-2">Closed</span>
      </div>

      <div className="flex p-2 border-2 ">
        <h1>Date:</h1>
        <span>19/09/2024</span>
      </div>
      <div className="overflow-x-auto mt-5">
  <table
    className="min-w-full p-5 border-2 border-collapse"
    style={{ borderCollapse: "collapse" }}
  >
    <thead>
      <tr>
        <th className="px-4 py-2 border">Complaint no</th>
        <th className="px-4 py-2 border">Subject</th>
        <th className="px-4 py-2 border">Status</th>
        <th className="px-4 py-2 border">Complaint date</th>
        <th className="px-4 py-2 border">Deadline</th>
      </tr>
    </thead>
    <tbody className="text-center">
      <tr>
        <td className="px-4 py-2 border">1</td>
        <td className="px-4 py-2 border">hello</td>
        <td className="px-4 py-2 border">pending</td>
        <td className="px-4 py-2 border">12/2/2024</td>
        <td className="px-4 py-2 border">12/3/2024</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border">2</td>
        <td className="px-4 py-2 border">hello</td>
        <td className="px-4 py-2 border">pending</td>
        <td className="px-4 py-2 border">12/2/2024</td>
        <td className="px-4 py-2 border">12/3/2024</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border">3</td>
        <td className="px-4 py-2 border">hello</td>
        <td className="px-4 py-2 border">pending</td>
        <td className="px-4 py-2 border">12/2/2024</td>
        <td className="px-4 py-2 border">12/3/2024</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border">4</td>
        <td className="px-4 py-2 border">hello</td>
        <td className="px-4 py-2 border">pending</td>
        <td className="px-4 py-2 border">12/2/2024</td>
        <td className="px-4 py-2 border">12/3/2024</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border">5</td>
        <td className="px-4 py-2 border">hello</td>
        <td className="px-4 py-2 border">pending</td>
        <td className="px-4 py-2 border">12/2/2024</td>
        <td className="px-4 py-2 border">12/3/2024</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  );
};

export default Complaints;
