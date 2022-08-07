import React from "react";
import Sidebar from "./Sidebar";
import AppMain from "./AppMain";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <AppMain />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
