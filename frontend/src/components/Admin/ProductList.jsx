import { useState } from "react";
import ProductCard from "./ProductCard";

import "./ProductList.css";
import API from "../../services/api";
import EditModal from "../../pages/Admin/EditModal";

function ProductList({ products, setProducts }) {
  const [selectedProduct, setSelectedProduct] = useState(null); // ✅ modal state

  // ✅ DELETE (move to archive)
  const handleDelete = async (id) => {
    try {
      await API.delete(`/products/${id}`);

      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // ✅ OPEN EDIT MODAL
  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  return (
    <>
    
      <div className="product-grid">
        {products.map((item) => (
          <ProductCard
            key={item._id}
            product={item}
            onDelete={handleDelete}
            onEdit={handleEdit} // ✅ now opens modal
          />
        ))}
      </div>

      {/* ✅ EDIT MODAL */}
      {selectedProduct && (
        <EditModal
          product={selectedProduct}
          setShow={setSelectedProduct}
          products={products}
          setProducts={setProducts}
        />
      )}
    </>
  );
}

export default ProductList;