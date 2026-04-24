import { useEffect, useState } from "react";
import API from "../../services/api";
import AdminLayout from "../../components/Admin/AdminLayout";
import "./Archives.css";

function Archives() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchArchived();
  }, []);

  const fetchArchived = async () => {
    const res = await API.get("/products/archived");
    setProducts(res.data);
  };

  // RESTORE
  const handleRestore = async (id) => {
    await API.put(`/products/restore/${id}`);
    setProducts(products.filter(p => p._id !== id));
  };

  // PERMANENT DELETE
  const handleDelete = async (id) => {
    await API.delete(`/products/permanent/${id}`);
    setProducts(products.filter(p => p._id !== id));
  };
  const baseUrl = "http://localhost:5174";
  return (
    <AdminLayout>
      <div className="archive-header">
        <h2>Archived Products</h2>
        <p>{products.length} items</p>
      </div>

      <div className="archive-grid">
        {products.map((item) => (
          <div className="archive-card" key={item._id}>
             <img src={`/${item.image}`} alt={item.name} />

            <h3>{item.name}</h3>
            <p className="price">₹{item.price}</p>

            <div className="archive-actions">
              <button
                className="restore"
                onClick={() => handleRestore(item._id)}
              >
                Restore
              </button>

              <button
                className="delete"
                onClick={() => handleDelete(item._id)}
              >
                Delete Forever
              </button>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}

export default Archives;