import { useEffect, useState } from "react";
import API from "../../services/api";
import AdminLayout from "../../components/Admin/AdminLayout";
import ProductList from "../../components/Admin/ProductList";
import "./Dashboard.css";

function Dashboard() {
  const [products, setProducts] = useState([]);

  // fetch products from backend
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  return (
    <AdminLayout>
      <h2>Displaying {products.length} Products</h2>

      <ProductList 
        products={products} 
        setProducts={setProducts} 
      />
    </AdminLayout>
  );
}

export default Dashboard;