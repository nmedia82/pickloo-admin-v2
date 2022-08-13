import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const EditProduct = ({ Products, onUpdate }) => {
  // Getting ID
  const { id } = useParams();
  // console.log(id.toString())

  // set state for Product
  const [Product, setProduct] = useState({});

  // Getting Product for Edit Product
  useEffect(() => {
    // loadProducts()
    const product = Products.find((p) => p.barcode === id);
    console.log(product);
    setProduct(product);
  }, [Products]);

  const handleChange = (e) => {
    const product = {
      ...Product,
      PK: "STORE#WQ",
      [e.target.name]: e.target.value,
    };
    setProduct(product);
  };

  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <div className="container">
        <div className=" row justify-content-center">
          <div className="col-md-9 col-lg-7 col-xl-6 bg-light p-3">
            {Product && (
              <form onSubmit="">
                <h1>Edit Product</h1>
                <p className="text-medium-emphasis">
                  Edit your product details
                </p>
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
                  className="btn btn-info mb-3"
                  onClick={(e) => onUpdate(Product)}
                >
                  Save Product
                </button>
                {/* <button className="btn btn-info m-2" onClick="">
                    Save
                  </button> */}
                <Link to="/products/all">
                  <button className="btn btn-danger ms-2 mb-3">Cancel</button>
                </Link>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
