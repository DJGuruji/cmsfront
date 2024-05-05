import React, { useState } from "react";
import AccordionComponent from "../components/Accordian";
import Pagination from "../components/Pagination";

const Logs = () => {
  return (
    <div className="search ml-20 lg:ml-52 xl:ml-52 lg:w-3/4 xl:w-3/4 h-full mt-20  ">
      <div className="mt-3">
        <div className="p-2 border-b-2">12/10/2024</div>
        <div className="border-2">
          <span className="ml-3 flex p-2 ">
            <p>User </p>
            <h1 className="ml-1 mr-1"> john</h1> is Logged in
          </span>
          <AccordionComponent></AccordionComponent>
        </div>
      </div>
    <div className="flex justify-center mt-3"> <Pagination></Pagination></div>
    </div>
  );
}

export default Logs