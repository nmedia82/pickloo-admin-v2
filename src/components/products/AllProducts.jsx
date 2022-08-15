import React from "react";
import { Link } from "react-router-dom";
import { __price } from "../../services/helpers";

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
                  <th scope="col" colSpan="2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {Products.map((product, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{product.barcode}</td>
                    <td>{product.title}</td>
                    <td>{__price(product.price)}</td>

                    <td>
                      <Link
                        className="btn btn-sm btn-warning"
                        to={`/products/edit/${product.barcode}`}
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => onDelete(product.barcode)}
                      >
                        Delete
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
