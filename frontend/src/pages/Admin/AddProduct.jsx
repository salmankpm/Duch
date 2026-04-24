import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";
import AdminLayout from "../../components/Admin/AdminLayout";
import "./AddProduct.css";

function AddProduct() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    category: "", // ✅ ADD THIS
  });

  const [preview, setPreview] = useState("");

  // handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle image preview
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setForm({ ...form, image: file.name }); // simple (backend expects string now)
    }
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.price) {
      alert("Please fill all fields");
      return;
    }

    try {
      await API.post("/products", form);
      alert("Product Added ✅");
      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AdminLayout>
      <div className="add-product">
        <h2>Add Product</h2>

        <form onSubmit={handleSubmit} className="form">

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
          />

          {/* ✅ CATEGORY */}
          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={handleChange}
          />

          <input
            type="file"
            onChange={handleImage}
          />

          {preview && (
            <img src={preview} alt="preview" className="preview" />
          )}

          <button type="submit">ADD PRODUCT</button>

        </form>
      </div>
    </AdminLayout>
  );
}

export default AddProduct;