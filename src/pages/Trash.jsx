import React, { useState } from "react";
import Pagination from "../components/Pagination";

const Trash = () => {
  return (
    <div className="search ml-20 lg:ml-52 xl:ml-52 lg:w-3/4 xl:w-3/4 h-full mt-20  ">
      <div className="mt-3">
        <div className="p-2 border-b-2">12/10/2024</div>
        <div className="border-2">
          <span className="ml-3 p-1 ">
            <h1 className="ml-1 mr-1 p-1"> Complaint Deleted</h1>
            <h1 className="ml-1 mr-1 p-1">Complaint Name</h1>

            <button className="bg-blue-500 hover:bg-blue-600 p-1 rounded-lg text-white ml-2 mt-3 mb-1">
              Restore
            </button>
          </span>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        {" "}
        <Pagination></Pagination>
      </div>
    </div>
  );
};

export default Trash;
