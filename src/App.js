// importing CSS from Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// importing JS from Bootstrap
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

// importing Navbar
import Navbar from "./components/layout/Navbar";
// importing Home
// importing Footer
import Footer from "./components/layout/Footer";

import AddProduct from "./components/products/AddProduct";
import AllProducts from "./components/products/AllProducts";
import Sidebar from "./components/layout/Sidebar";
import EditProduct from "./components/products/EditProduct";
import AllOrders from "./components/orders/AllOrders";

import { ToastContainer } from "react-toastify";
import { alert_error, alert_info } from "./services/helpers";

// importing Routes and Route
import { useNavigate, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getProducts,
  deleteProduct,
  saveProduct,
  getOrders,
} from "./services/modalService";
import Dashboard from "./components/Dashboard";

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
    // console.log(product)
    const resp = await saveProduct(product);
    if (resp.status !== 200) return alert_error("Error while updating product");
    // updating Products lists
    const products = [...Products];
    const product1 = products.find((p) => p.barcode === product.barcode);
    const index = Products.indexOf(product1);
    products[index] = product;
    setProducts(products);
    console.log("working");
    alert_info("Product updated successfully!");
    Navigate("/products/all");
  };

  // Orders
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
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar-col min-vh-100 col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Routes>
              <Route path="*" element={<Dashboard />} />
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
              {/* <Route path="/orders" element={<OrderModal />} /> */}
              <Route
                path="/orders/all"
                element={<AllOrders Orders={Orders} />}
              />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
