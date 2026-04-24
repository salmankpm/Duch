import { useState } from "react";
import API from "../../services/api";
import "./EditModal.css";

function EditModal({ product, setShow, setProducts, products }) {
  const [form, setForm] = useState({
    name: product.name,
    price: product.price,
    image: product.image,
    category: product.category,
  });

  const [preview, setPreview] = useState(product.image);

  // handle text input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle image change
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);

      // TEMP (same as add product)
      setForm({ ...form, image: imageUrl });
    }
  };

  // submit update
  const handleUpdate = async () => {
    try {
      const res = await API.put(`/products/${product._id}`, form);

      // update UI
      setProducts(
        products.map((p) =>
          p._id === product._id ? res.data : p
        )
      );

      setShow(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="modal">
      <div className="modal-box">
        <h2>Edit Product</h2>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
        />

        <input type="file" onChange={handleImage} />

        <img src={preview} alt="preview" className="preview" />

        <div className="modal-actions">
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setShow(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;