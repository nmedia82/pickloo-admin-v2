import React, { useState, useEffect } from "react";
import { __price } from "../services/helpers";
import { alert_info, alert_error } from "../services/helpers";
import { setRouteStatus } from "../services/modalService";
import Accordion from "react-bootstrap/Accordion";
// importing Link
import { Link } from "react-router-dom";
import { GiH2O } from "react-icons/gi";

const AllTRoutes = ({ TRoutes }) => {
  // console.log(TRoutes);
  const [AllRoutes, setAllRoutes] = useState([]);

  useEffect(() => {
    setAllRoutes([...TRoutes]);
  }, [TRoutes]);

  const updateStatus = async (route) => {
    let resp;
    try {
      var status = route.route_status === "active" ? "inactive" : "active";
      resp = await setRouteStatus(route.route_id, status);
      console.log(resp);
      if (resp.status === 200 && resp.data.Message === "SUCCESS") {
        const routes = [...AllRoutes];
        const index = routes.indexOf(route);
        routes[index].route_status = status;
        setAllRoutes(routes);
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
      <div className="row m-3">
        <div className="col-md-4">
          <Accordion defaultActiveKey="0">
            {AllRoutes.map((route, index) => (
              <Accordion.Item eventKey={index}>
                <Accordion.Header>{route.route_name}</Accordion.Header>
                <Accordion.Body>
                  {JSON.stringify(route.route_schedual)}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AllTRoutes;
