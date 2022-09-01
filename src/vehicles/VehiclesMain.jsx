import React from "react";
// importing components
import AllVehicles from "./AllVehicles";
import AddVehicle from "./AddVehicle";

const VehiclesMain = ({ Vehicles, doDeleteVehicle, onNewVehicle }) => {
  return (
    <div className="min-vh-100 d-flex flex-row">
      <div className="container">
        <h1 className="text-center m-3">Vehicles</h1>
        <div className="row">
          <div className="col-md-12 m-3">
            <AddVehicle onNewVehicle={onNewVehicle} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <AllVehicles
              Vehicles={Vehicles}
              doDeleteVehicle={doDeleteVehicle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default VehiclesMain;
