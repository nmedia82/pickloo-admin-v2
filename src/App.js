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
} from "./services/modalService";

// ============= importing components  ==============
// importing Login
import Login from "./Login";
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

function App() {
  // Navigate method of react router dom
  const Navigate = useNavigate();

  // ========== Products  ===========
  // State for Products
  const [Products, setProducts] = useState([]);

  // Getting Products for AllProducts
  useEffect(() => {
    const loadProducts = async () => {
      var products = await getProducts();
      products = products.data.AllItems.Items;
      // console.log(products)
      setProducts(products);
    };

    loadProducts();
  }, []);

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
    console.log("working");
    alert_info("Product updated successfully!");
    Navigate("/products/all");
  };

  // ========== Orders  ===========
  // State for Orders
  const [Orders, setOrders] = useState([]);

  // Getting Orders
  useEffect(() => {
    const loadOrders = async () => {
      var orders = await getOrders();
      orders = orders.data.AllItems.Items;
      // console.log(orders);
      setOrders(orders);
    };
    loadOrders();
  }, []);

  // ========== Transporters  ===========
  // State for Transporters
  const [Transporters, setTransporters] = useState([]);

  // Getting Transporters
  useEffect(() => {
    const loadTransporters = async () => {
      let transporters = await getTransporters();
      console.log(transporters);
      // orders = orders.data.AllItems.Items;
      setTransporters(transporters);
    };
    loadTransporters();
  }, []);

  // returnig Template
  return (
    <div className="App">
      {/* <Login /> */}
      {/* Navbar */}
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar-col col-md-3">
            {/* Sidebar */}
            <Sidebar />
          </div>
          {/* Main */}
          {/* =========== Routing =========== */}
          <div className="col-md-9">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transporters/add" element={<AddTransporter />} />
              <Route
                path="/transporters/all"
                element={<AllTransporters Transporters={Transporters} />}
              />
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
