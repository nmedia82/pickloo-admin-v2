import React, { useState, useEffect } from "react";
import AllProducts from "./AllProducts";
import AddProduct from "./AddProduct";

const ProductHome = ({ Products, onProductSave, onDelete }) => {
  const [Product, setProduct] = useState({});
  const [IsAdding, setIsAdding] = useState(false);

  // Editing product
  const handleProductEdit = (product) => {
    setIsAdding(true);
    setProduct({ ...product });
  };

  return (
    <div className="container">
      {IsAdding && (
        <AddProduct
          Product={Product}
          onProductSave={onProductSave}
          onCancel={() => setIsAdding(false)}
        />
      )}

      {!IsAdding && (
        <button className="btn btn-info" onClick={() => setIsAdding(!IsAdding)}>
          Add New
        </button>
      )}

      {!IsAdding && (
        <AllProducts
          Products={Products}
          onDelete={onDelete}
          onEdit={handleProductEdit}
        />
      )}
    </div>
  );
};

export default ProductHome;
