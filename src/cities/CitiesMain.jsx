import React from "react";
// importing components
import AddCity from "./AddCity";
import AllCities from "./AllCities";

const CitiesMain = ({ Cities, doDeleteCity, onNewCity }) => {
  return (
    <div className="min-vh-100 d-flex flex-row">
      <div className="container">
        <h1 className="text-center m-3">Cities/Terminals</h1>
        <div className=" row">
          <div className="col-md-12 mb-2">
            <AddCity onNewCity={onNewCity} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* <button>Add City</button> */}
            {/* <NewCity></NewCity> */}
            <AllCities Cities={Cities} doDeleteCity={doDeleteCity} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitiesMain;
