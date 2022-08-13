import React, { useState } from "react";
import { saveProduct } from "../../services/modalService";
import { Link, useNavigate } from "react-router-dom";

const AddProduct = () => {
  const Navigate = useNavigate();
  // State for Product
  const [Product, setProduct] = useState({
    title: "",
    barcode: "",
    price: "",
  });
  // handle onChange
  const handleChange = (e) => {
    const product = {
      ...Product,
      PK: "STORE#WQ",
      [e.target.name]: e.target.value,
    };
    setProduct(product);
  };

  // handle Submit
  const handleSubmit = async (e, product) => {
    e.preventDefault();
    // console.log(product);
    await saveProduct(product);
    Navigate("/products/all");
  };

  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <div className="container">
        <div className=" row justify-content-center">
          <div className="col-md-9 col-lg-7 col-xl-6 bg-light p-3">
            {/* <div className="mx-4">
            <CCardBody className="p-4"> */}
            <form onSubmit="">
              <h1>Add Product</h1>
              <p className="text-medium-emphasis">Add your product details</p>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Product Title
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="title"
                  placeholder="Dalda Oil"
                  required
                  name="title"
                  onChange={handleChange}
                  value={Product.title}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="barcode" className="form-label">
                  Product Barcode
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="barcode"
                  placeholder="123456"
                  required
                  name="barcode"
                  onChange={handleChange}
                  value={Product.barcode}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Product Price
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="price"
                  placeholder="400"
                  required
                  name="price"
                  onChange={handleChange}
                  value={Product.price}
                />
              </div>
              <button
                type="sumbmit"
                className="btn btn-info mb-3"
                onClick={(e) => handleSubmit(e, Product)}
              >
                Add Product
              </button>
              {/* <button className="btn btn-info m-2" onClick="">
                  Save
                </button> */}
              {/* <CButton className="btn-danger ms-2 mb-3" onClick={onCancel}>
                  Cancel
                </CButton> */}
              <Link to="/products/all">
                <button className="btn btn-danger ms-2 mb-3">Cancel</button>
              </Link>
            </form>
            {/* </CCardBody>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddProduct;
