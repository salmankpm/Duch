import "./Navbar.css";

function Navbar() {
  return (
    <div className="admin-navbar">
      <div className="breadcrumb">Home / Admin / Products</div>
      <button className="logout">Logout</button>
    </div>
  );
}

export default Navbar;