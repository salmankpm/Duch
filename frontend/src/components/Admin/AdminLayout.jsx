import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./AdminLayout.css";

function AdminLayout({ children }) {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-main">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;