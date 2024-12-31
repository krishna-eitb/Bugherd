import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="font-roboto w-full flex flex-col items-center justify-center h-dvh">
      <div>
      <h1 className="text-3xl font-semibold">
        Welcome to <span className="text-neon-green text-4xl">Scribble </span>
        Board
      </h1>
      </div>
      
      {/* Brento board coming here */}
      <div className=" w-full flex flex-wrap  ">
        <div className="brentoRowOne w-full flex items-center justify-center gap-5 pt-8">
          <div className="w-1/2 h-[200px] rounded-xl bg-white shadow-md shadow-neon-green flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold font-roboto">Image coming soon</h1>
            <p>coming soon</p>
          </div>
          <div className="w-1/2 h-[200px] rounded-xl bg-white shadow-md shadow-neon-green flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold font-roboto">List of Projects</h1>
            <p>coming soon</p>
          </div>
        </div>
        <div className="brentoRowOne w-full flex items-center justify-center gap-5 pt-8">
          <div className="w-1/2 h-[200px] rounded-xl bg-white shadow-md shadow-neon-green flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold font-roboto">Team Members Count</h1>
            <p>coming soon</p>
          </div>
          <div className="w-1/2 h-[200px] rounded-xl bg-white shadow-md shadow-neon-green flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold font-roboto">Project Progress</h1>
            <p>coming soon</p>
          </div>
        </div>
      </div>
      {/* Brento board coming here */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
