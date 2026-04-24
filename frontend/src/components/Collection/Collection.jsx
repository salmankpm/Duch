import { useEffect, useState } from "react";
import "./Collection.css";
import Card from "../Card/Card";
import API from "../../services/api";

import side from "../../assets/side.png";

function Collection() {
  const [products, setProducts] = useState([]);

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

  // ✅ BUY FUNCTION
  const handleBuy = (product) => {
    alert(`Buying ${product.name}`);
  };

  return (
    <div className="collection">
      <h2>NEW COLLECTION</h2>

      <div className="layout">

        {/* LEFT BIG CARD */}
        <div className="side-card">
          <img src={side} alt="side" />
          <div className="overlay"></div>
        </div>

        {/* RIGHT GRID */}
        <div className="grid">
          {products.map((item) => (
            <Card
              key={item._id}
              image={item.image}
              name={item.name}
              price={`₹${item.price}`}
              colors="Available"
              category={item.category} // ✅ ADD THIS
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Collection;