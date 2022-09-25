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
  getStock,
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
  get_member_phone,
  verifyLoginPickloo,
  get_user_type,
  get_store_code,
  get_company_name,
} from "./services/auth";

// ============= importing components  ==============
// importing Login
import Login from "./components/Login";
import Protected from "./components/Protected";
// importing Layout components
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
// importing Products components
import AddProduct from "./Vendors/products/AddProduct";
import AllProducts from "./Vendors/products/AllProducts";
import EditProduct from "./Vendors/products/EditProduct";
// importing Orders components
import AllOrders from "./Vendors/orders/AllOrders";
// importing Dashboard
import Dashboard from "./components/Dashboard";
// importing Transporters components
import AddTransporter from "./transporters/AddTransporter";
import AllTransporters from "./transporters/AllTransporters";
// importing Routes components
import AddTRoute from "./TRoutes/AddRoute";
import AllTRoutes from "./TRoutes/AllRoutes-old";
import RouteBookings from "./bookings/RouteBookings";
import RouteReport from "./reports/RouteReport";
import CitiesMain from "./cities/CitiesMain";
import VehiclesMain from "./vehicles/VehiclesMain";
import LoginPickloo from "./components/LoginPickloo";
import POS from "./Vendors/pos/POS";

function App() {
  // Navigate method of react router dom
  const Navigate = useNavigate();

  // ========== Products  ===========
  // State for Products
  const [Products, setProducts] = useState([]);
  // State for Stock
  const [Stock, setStock] = useState([]);
  // State for Orders
  const [Orders, setOrders] = useState([]);
  // Cart in Cache
  const [CartCache, setCartCache] = useLocalStorage("cart", []);
  // State for Transporters
  const [Transporters, setTransporters] = useState([]);
  // State for Routes
  const [TRoutes, setTRoutes] = useState([]);
  // User Cache
  const [User, setUser] = useLocalStorage("user", {});
  // Check if logged in
  const [isLoggedIn, setisLoggedIn] = useState(false);
  // Cities
  const [Cities, setCities] = useState([]);
  // Vehicles
  const [Vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const user = User;
    const is_loggedin = user !== null ? true : false;
    setisLoggedIn(is_loggedin);

    // Getting Products for AllProducts
    const loadProducts = async () => {
      var products = await getProducts();
      console.log(products);
      products = products.data.AllItems.Items;
      setProducts(products);
    };

    // Getting Stock
    const loadStock = async (barcode) => {
      const data = {
        store_code: get_store_code(),
        barcode: barcode,
      };
      let stock = await getStock(data);
      console.log(stock);
      stock = stock.data.AllItems.Items;
      setStock(stock);
    };

    // Getting Orders for AllOrders
    const loadOrders = async () => {
      var orders = await getOrders();
      orders = orders.data.AllItems.Items;
      // console.log(orders);
      setOrders(orders);
    };

    // Getting Transporters for AllTransporters
    const loadTransporters = async () => {
      let transporters = await getTransporters();
      transporters = transporters.data.AllItems.Items;
      // console.log(transporters);
      setTransporters(transporters);
    };

    // Getting Routes for AllRoutes
    const loadRoutes = async () => {
      let routes = await getRoutes();
      routes = routes.data.AllItems.Items;
      setTRoutes(routes);
    };

    // Getting Vehicles
    const loadVehicles = async () => {
      const data = { transporter_phone: get_member_phone() };
      let vehicles = await getVehicles(data);
      vehicles = vehicles.data.AllItems.Items;
      setVehicles(vehicles);
    };

    // Getting Cities
    const laodCities = async () => {
      const data = {
        transporter_phone: get_member_phone(),
        country_code: "PK",
      };
      let cities = await getCities(data);
      cities = cities.data.AllItems.Items;
      setCities(cities);
    };

    if (is_loggedin) {
      const user_type = get_user_type();
      switch (user_type) {
        case "transporter":
          loadTransporters();
          loadRoutes();
          loadVehicles();
          laodCities();
          break;
        case "vendor":
          loadProducts();
          loadStock();
          // loadOrders();
          break;
        default:
          break;
      }
    }
  }, [User]);

  // Login
  const handleLogin = async (user) => {
    user = await verifyLogin(user);
    user = user.data.Response;
    if (user !== false) {
      setUser(user);
      setisLoggedIn(true);
      Navigate("/routes/all");
    }
  };

  // Login Pickloo
  const handleLoginPickloo = async (user) => {
    user.pin = parseInt(user.pin);
    user = await verifyLoginPickloo(user);
    user = user.data.Response;
    if (user !== false) {
      user.type = "vendor";
      setUser(user);
      setisLoggedIn(true);
      Navigate("/products/all");
    } else {
      alert_error("Login is not correct");
    }
  };

  const handleLogOut = () => {
    setUser({});
    setisLoggedIn(false);
    Navigate("/login");
  };

  // Delete City from AllCities
  const handleDeleteCity = async (cityName) => {
    // ask first
    const a = window.confirm("Are you sure to delete?");
    if (!a) return;
    const post_data = {
      city_name: cityName,
      country_code: get_country_code(),
      transporter_phone: get_member_phone(),
    };
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
    // console.log(id);
    const post_data = {
      vehicle_id: id,
      transporter_phone: get_member_phone(),
    };
    const resp = await deleteVehicle(post_data);
    if (resp.status !== 200) return alert_error("Error while deleting vehicle");
    // removing vehicles from list and udpate
    const vehicles = Vehicles.filter((vehicle) => vehicle.vehicle_id !== id);
    setVehicles(vehicles);
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

  const handleAddToCart = (item) => {
    item.qty = 1;
    item.store_code = get_store_code();
    item.store_title = get_company_name();
    item.vendor_phone = get_member_phone();
    var cart = [...CartCache, item];
    // if item already exists in cart
    var items = [...CartCache];
    var found = items.find(
      (i) => i.barcode === item.barcode && i.store_code === get_store_code()
    );

    if (found) {
      const index = items.indexOf(found);
      items[index].qty += item.qty;
      console.log(items[index], items, item.qty);
      cart = [...items];
    }
    setCartCache(cart);
  };

  // returnig Template
  return (
    <div className="App">
      {/* <Login /> */}
      {/* Navbar */}

      <Navbar onLogOut={handleLogOut} isLogin={isLoggedIn} />
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar-col col-md-2">
            {/* Sidebar */}
            <Sidebar isLoggedIn={isLoggedIn} />
          </div>
          {/* Main */}
          {/* =========== Routing =========== */}
          <div className="col-md-10">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route
                path="/login-pickloo"
                element={<LoginPickloo onLogin={handleLoginPickloo} />}
              />
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
                element={<AddTRoute Cities={Cities} Vehicles={Vehicles} />}
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
                  <AllProducts
                    Products={Products}
                    onDelete={handleDelete}
                    Stock={Stock}
                  />
                }
              />
              <Route
                path="/orders/all"
                element={<AllOrders Orders={Orders} />}
              />
              <Route
                path="/pos"
                element={
                  <POS
                    Products={Products}
                    Cart={CartCache}
                    onAddToCart={handleAddToCart}
                    onCartUpdate={setCartCache}
                  />
                }
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
