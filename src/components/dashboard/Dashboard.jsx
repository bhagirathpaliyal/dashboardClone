import React, { useState } from "react";
import TopBar from "./TopBar";
import Grid from "./Grid";

const Dashboard = ({ isOpen, setIsOpen }) => {
  return (
    <div className="rounded-lg flex-4 bg-white pb-4 shadow">
      <TopBar/>
      <Grid/>
      {/* <button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "" : "open"}
      </button> */}
    </div>
  );
};

export default Dashboard;
