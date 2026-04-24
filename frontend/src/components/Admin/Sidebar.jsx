import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h1 className="logo">Duch</h1>

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/users">Users</Link>
        
        <Link to="/admin/archives">Archives</Link>
      </div>

      <div className="actionss">
        <button onClick={() => navigate("/admin/add-category")}>
          + ADD CATEGORY
        </button>

        <button onClick={() => navigate("/admin/add-product")}>
          + Add Product
        </button>
      </div>

      <div className="stats">
        <h4>Dashboard Stats</h4>
        <p>Total Users: 3</p>
        <p>Total Products: 12</p>
        <p>Revenue: ₹2450</p>
      </div>
    </div>
  );
}

export default Sidebar;