// importing CSS from Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// importing JS from Bootstrap
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

// importing Navbar
import Navbar from "./components/layout/Navbar";
// importing Home
import Home from "./components/layout/Home";
// importing Footer
import Footer from "./components/layout/Footer";
import AppMain from "./components/layout/AppMain";

// importing Routes and Route
import { Routes, Route } from "react-router-dom";
import AddProduct from "./components/products/AddProduct";
import AllProducts from "./components/products/AllProducts";
import second from "./components/orders/Orders";
import Sidebar from "./components/layout/Sidebar";
import Orders from "./components/orders/Orders";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <Routes>
              <Route path="/products/add" element={<AddProduct />} />
              <Route path="/products/all" element={<AllProducts />} />
              <Route path="/orders/all" element={<Orders />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
