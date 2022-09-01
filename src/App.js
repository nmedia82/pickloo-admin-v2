// ============= importing packages  ==============
// importing Routes, Route and useNavigate
import { useNavigate, Routes, Route } from "react-router-dom";
// importing hooks
import { useState, useEffect } from "react";
// importing Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
// importing react-tostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ============= importing custom Functions  ==============
// importing alerts
import { alert_error, alert_info } from "./services/helpers";
// importing APIs
import {
  getProducts,
  deleteProduct,
  saveProduct,
  getOrders,
  getTransporters,
  getRoutes,
  getCities,
  deleteCity,
  deleteVehicle,
  getVehicles,
} from "./services/modalService";
import useLocalStorage from "./components/localStorage";
import {
  get_country_code,
  verifyLogin,
  get_transporter_phone,
} from "./services/auth";

// ============= importing components  ==============
// importing Login
import Login from "./Login";
import Protected from "./components/Protected";
// importing Layout components
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
// importing Products components
import AddProduct from "./components/products/AddProduct";
import AllProducts from "./components/products/AllProducts";
import EditProduct from "./components/products/EditProduct";
// importing Orders components
import AllOrders from "./components/orders/AllOrders";
// importing Dashboard
import Dashboard from "./components/Dashboard";
// importing Transporters components
import AddTransporter from "./transporters/AddTransporter";
import AllTransporters from "./transporters/AllTransporters";
// importing Routes components
import AddTRoute from "./TRoutes/AddRoute";
import AllTRoutes from "./TRoutes/AllRoutes";
import RouteBookings from "./bookings/RouteBookings";
import RouteReport from "./reports/RouteReport";
import CitiesMain from "./cities/CitiesMain";
import VehiclesMain from "./vehicles/VehiclesMain";

function App() {
  // Navigate method of react router dom
  const Navigate = useNavigate();

  // ========== Products  ===========
  // State for Products
  const [Products, setProducts] = useState([]);
  // State for Orders
  const [Orders, setOrders] = useState([]);
  // State for Transporters
  const [Transporters, setTransporters] = useState([]);
  // State for Routes
  const [TRoutes, setTRoutes] = useState([]);
  // User Cache
  const [User, setUser] = useLocalStorage("user", {});
  // Check if logged in
  const [isLoggedIn, setisLoggedIn] = useState(true);
  // Cities
  const [Cities, setCities] = useState([]);
  // Vehicles
  const [Vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const user = User;
    console.log(user);
    user === null && setisLoggedIn(false);

    // Getting Products for AllProducts
    const loadProducts = async () => {
      var products = await getProducts();
      products = products.data.AllItems.Items;
      // console.log(products)
      setProducts(products);
    };
    // loadProducts();

    // Getting Orders for AllOrders
    const loadOrders = async () => {
      var orders = await getOrders();
      orders = orders.data.AllItems.Items;
      // console.log(orders);
      setOrders(orders);
    };
    // loadOrders();

    // Getting Transporters for AllTransporters
    const loadTransporters = async () => {
      let transporters = await getTransporters();
      transporters = transporters.data.AllItems.Items;
      // console.log(transporters);
      setTransporters(transporters);
    };
    loadTransporters();

    // Getting Routes for AllRoutes
    const loadRoutes = async () => {
      let routes = await getRoutes();
      routes = routes.data.AllItems.Items;
      setTRoutes(routes);
    };
    loadRoutes();

    // Getting Vehicles
    const laodVehicles = async () => {
      const data = { transporter_phone: "03224028624" };
      let vehicles = await getVehicles(data);
      vehicles = vehicles.data.AllItems.Items;
      setVehicles(vehicles);
    };
    laodVehicles();

    // Getting Cities
    const laodCities = async () => {
      const data = { country_code: "PK" };
      let cities = await getCities(data);
      cities = cities.data.AllItems.Items;
      setCities(cities);
    };
    laodCities();
  }, [User]);

  // Login
  const handleLogin = async (user) => {
    user = await verifyLogin(user);
    user = user.data.Response;
    console.log(user);
    if (user !== false) {
      setUser(user);
      setisLoggedIn(true);
      Navigate("/routes/all");
    }
  };

  const handleLogOut = () => {
    setUser(null);
    setisLoggedIn(false);
    Navigate("/login");
  };

  // Delete City from AllCities
  const handleDeleteCity = async (cityName) => {
    // ask first
    const a = window.confirm("Are you sure to delete?");
    if (!a) return;
    const post_data = { city_name: cityName, country_code: get_country_code() };
    const resp = await deleteCity(post_data);
    if (resp.status !== 200) return alert_error("Error while deleting city");
    // removing city from list and udpate
    const cities = Cities.filter((city) => city.city_name !== cityName);
    setCities(cities);
  };

  // Delete Vehicle from All Vehicles
  const handleDeleteVehicle = async (id) => {
    // ask first
    const a = window.confirm("Are you sure to delete?");
    if (!a) return;
    console.log(id);
    const post_data = {
      vehicle_id: id,
      transporter_phone: get_transporter_phone(),
    };
    const resp = await deleteVehicle(post_data);
    if (resp.status !== 200) return alert_error("Error while deleting vehicle");
    // removing city from list and udpate
    const vehicles = Vehicles.filter((vehicle) => vehicle.vehicle_id !== id);
    setCities(vehicles);
  };

  // Delete Prouduct from AllProducts
  const handleDelete = async (barcode) => {
    // ask first
    const a = window.confirm("Are you sure to delete?");
    if (!a) return;

    const resp = await deleteProduct(barcode);
    if (resp.status !== 200) return alert_error("Error while deleting product");
    // removing product from list and udpate
    const products = Products.filter((p) => p.barcode !== barcode);
    setProducts(products);
  };

  // Update Product
  // handle Updatate Product
  const handleUpdate = async (product) => {
    // console.log(product);
    // return;
    const resp = await saveProduct(product);
    if (resp.status !== 200) return alert_error("Error while updating product");
    // updating Products lists
    const products = [...Products];
    const product1 = products.find((p) => p.barcode === product.barcode);
    // console.log(product1);
    const index = Products.indexOf(product1);
    products[index] = product;
    setProducts(products);
    alert_info("Product updated successfully!");
    Navigate("/products/all");
  };

  const handleNewCity = (City) => {
    const cities = [...Cities, City];
    setCities(cities);
  };
  // for New Vehicle refresh page
  const handleNewVehicle = (Vehicle) => {
    const vehicles = [...Vehicles, Vehicle];
    setVehicles(vehicles);
  };

  // returnig Template
  return (
    <div className="App">
      {/* <Login /> */}
      {/* Navbar */}
      <Navbar onLogOut={handleLogOut} onLogin={isLoggedIn} />
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar-col col-md-2">
            {/* Sidebar */}
            <Sidebar UserCache={User} />
          </div>
          {/* Main */}
          {/* =========== Routing =========== */}
          <div className="col-md-10">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/transporters/add" element={<AddTransporter />} />
              <Route
                path="/transporters/all"
                element={<AllTransporters Transporters={Transporters} />}
              />

              <Route
                path="/cities"
                element={
                  <CitiesMain
                    onNewCity={handleNewCity}
                    Cities={Cities}
                    onDeleteCity={handleDeleteCity}
                  />
                }
              />
              <Route
                path="/vehicles"
                element={
                  <VehiclesMain
                    Vehicles={Vehicles}
                    onNewVehicle={handleNewVehicle}
                    onDeleteVehicle={handleDeleteVehicle}
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
              <Route
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
              />
            </Routes>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
      {/* Toostify */}
      <ToastContainer />
    </div>
  );
}

export default App;
