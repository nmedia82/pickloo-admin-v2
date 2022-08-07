// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// importing CSS from Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// importing JS from Bootstrap
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
// importing Navbar
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
