import React from "react";
// importing Routes, Route and useNavigate
import { useNavigate, Routes, Route } from "react-router-dom";

import Protected from "../components/Protected";
// importing Layout components
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
// importing Products components
import AddProduct from "../components/products/AddProduct";
import AllProducts from "../components/products/AllProducts";
import EditProduct from "../components/products/EditProduct";
// importing Orders components
import AllOrders from "../components/orders/AllOrders";
// importing Dashboard
import Dashboard from "../components/Dashboard";
// importing Transporters components
import AddTransporter from "../transporters/AddTransporter";
import AllTransporters from "../transporters/AllTransporters";
// importing Routes components
import AddTRoute from "../TRoutes/AddRoute";
import AllTRoutes from "../TRoutes/AllRoutes";
import RouteBookings from "../bookings/RouteBookings";
import RouteReport from "../reports/RouteReport";
import CitiesMain from "../cities/CitiesMain";
import VehiclesMain from "../vehicles/VehiclesMain";
import AppMain from "../components/layout/AppMain";

const Home = ({
  Transporters,
  onNewCity,
  Cities,
  onDeleteCity,
  Vehicles,
  onNewVehicle,
  onDeleteVehicle,
  TRoutes,
  onLogOut,
  onLogin,
  UserCache,
  isLoggedIn,
}) => {
  return (
    <>
      {/* Navbar */}
      <Navbar onLogOut={onLogOut} onLogin={onLogin} />
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar-col col-md-2">
            {/* Sidebar */}
            <Sidebar UserCache={UserCache} />
          </div>
          {/* Main */}
          {/* =========== Routing =========== */}
          <div className="col-md-10">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/home" element={<Home />} />
              <Route path="/transporters/add" element={<AddTransporter />} />
              <Route
                path="/transporters/all"
                element={<AllTransporters Transporters={Transporters} />}
              />

              <Route
                path="/cities"
                element={
                  <CitiesMain
                    onNewCity={onNewCity}
                    Cities={Cities}
                    onDeleteCity={onDeleteCity}
                  />
                }
              />
              <Route
                path="/vehicles"
                element={
                  <VehiclesMain
                    Vehicles={Vehicles}
                    onNewVehicle={onNewVehicle}
                    onDeleteVehicle={onDeleteVehicle}
                  />
                }
              />

              <Route
                path="/routes/add"
                element={<AddTRoute Cities={Cities} />}
              />

              {/* <Route path="/routes/add" element={<AddTRoute />} /> */}

              <Route
                path="/routes/all"
                element={
                  <Protected isLoggedIn={isLoggedIn}>
                    <AllTRoutes TRoutes={TRoutes} />
                  </Protected>
                }
              />
              <Route
                path="/route/:route_id/bookings"
                element={<RouteBookings TRoutes={TRoutes} />}
              />
              <Route path="reports/route/:route_id" element={<RouteReport />} />
              <Route path="/products/add" element={<AddProduct />} />
              {/* <Route
                path="/products/edit/:id"
                element={
                  <EditProduct Products={Products} onUpdate={handleUpdate} />
                }
              />
              <Route
                path="/products/all"
                element={
                  <AllProducts Products={Products} onDelete={handleDelete} />
                }
              />
              <Route
                path="/orders/all"
                element={<AllOrders Orders={Orders} />}
              /> */}
            </Routes>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
