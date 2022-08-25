// importing hooks of reacts
import React, { useState, useEffect } from "react";
// importing Link
import { Link } from "react-router-dom";
// importing status API
import { setTransporterStatus } from "../services/modalService";
// importing alerts
import { alert_info, alert_error } from "../services/helpers";

const AllTransporters = ({ Transporters }) => {
  // console.log(Transporters);
  const [AllTransporters, setAllTransporters] = useState([]);
  // console.log(AllTransporters);

  useEffect(() => {
    setAllTransporters([...Transporters]);
  }, [Transporters]);

  const updateStatus = async (transporter) => {
    let resp;
    try {
      let status =
        transporter.transporter_status === "active" ? "inactive" : "active";
      resp = await setTransporterStatus();
      console.log(resp);
      if (resp.status === 200 && resp.data.Message === "SUCCESS") {
        const transporters = [...AllTransporters];
        const index = transporters.indexOf(transporter);
        transporters[index].transporter_status = status;
        setAllTransporters(transporters);
        alert_info("Status updated");
      } else {
        alert_error("Error while saving");
      }
    } catch (e) {
      alert_error(e.message);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center my-3">All Transporters</h1>
          <div className="table-responsive">
            <table className="table table-light table-bordered text-center">
              <thead className="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">City</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* ======= listing transporters ======= */}
                {Transporters.map((transporter, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{transporter.full_name}</td>
                    <td>{transporter.phone}</td>
                    <td>{transporter.email}</td>
                    <td>{transporter.address}</td>
                    <td>{transporter.city}</td>
                    <td>
                      <button
                        onClick={() => updateStatus(transporter)}
                        className={
                          transporter.transporter_status === "inactive"
                            ? "btn btn-sm btn-danger"
                            : "btn btn-sm btn-success"
                        }
                      >
                        {transporter.transporter_status}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTransporters;
