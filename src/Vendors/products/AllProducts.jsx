import React from "react";
// importing Link
import { Link } from "react-router-dom";
// importing Add Stock
import AddStock from "./AddStock";
// importing price function
import { __price } from "../../services/helpers";
// importing icons
import Icons from "../../components/Icons";

const AllProducts = ({ Products, onDelete }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center my-3">All Products</h1>
          <div className="table-responsive">
            <table className="table table-light table-bordered text-center">
              <thead className="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Barcode</th>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* ======= listing products ======= */}
                {Products.map((product, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{product.barcode}</td>
                    <td>{product.title}</td>
                    <td>{__price(product.price)}</td>

                    <td>
                      <AddStock barcode={product.barcode} />

                      <Link
                        className="btn btn-sm btn-warning ms-1"
                        title="Edit"
                        to={`/products/edit/${product.barcode}`}
                      >
                        <Icons icon="edit" />
                      </Link>

                      <button
                        className="btn btn-sm btn-danger ms-1"
                        title="Delete"
                        onClick={() => onDelete(product.barcode)}
                      >
                        <Icons icon="delete" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
