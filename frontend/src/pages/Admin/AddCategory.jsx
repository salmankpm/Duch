import { useState } from "react";
import API from "../../services/api";
import AdminLayout from "../../components/Admin/AdminLayout";
import "./AddCategory.css";

function AddCategory() {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      alert("Enter category name");
      return;
    }

    try {
      const res = await API.post("/categories", { name });

      if (res.data.status) {
        alert("Category added ✅");
        setName("");
      } else {
        alert(res.data.message);
      }

    } catch (err) {
      alert("Error adding category ❌");
    }
  };

  return (
    <AdminLayout>
      <div className="add-category">
        <h2>Add Category</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button type="submit">Add Category</button>
        </form>
      </div>
    </AdminLayout>
  );
}

export default AddCategory;