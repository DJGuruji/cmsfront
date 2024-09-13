import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import Complaints from "./Complaints";
import LineChart from "../components/Chart";

const Home = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],

    datasets: [
      {
        label: "Sales",

        data: [120, 190, 300, 500, 200, 300, 400, 500, 250, 350, 400, 500],

        backgroundColor: "rgba(75, 192, 192, 0.2)",

        borderColor: "rgba(75, 192, 192, 1)",

        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className="search lg:ml-28 xl:ml-28 lg:w-3/4 xl:w-3/4  mt-20">
   
      <h1 className="pt-9 pb-5 text-xl">Welcome User</h1>

        <div className="flex justify-around overflow-scroll">
          <div className="p-5 border-2 rounded-md ml-44 lg:ml-1 xl:ml-1">
            <h2>totalcomplaints</h2>
            <h1>100</h1>
          </div>
          <div className="p-5 border-2 rounded-md">
            <h2>Resolved</h2>
            <h1>100</h1>
          </div>
          <div className="p-5  border-2 rounded-md">
            <h2>Unresolved</h2>
            <h1>100</h1>
          </div>
          <div className="p-5 border-2 rounded-md">
            <h2>average resoution time</h2>
            <h1>7 days</h1>
          </div>
        </div>

        <div className="mt-3">
          <LineChart />
        </div>
        <Complaints />
      </div>
      
    </>
  );
};

export default Home;
