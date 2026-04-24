import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const admin = localStorage.getItem("admin");

  // if not logged in → redirect
  if (!admin) {
    return <Navigate to="/admin/login" />;
  }

  return children;
}

export default ProtectedRoute;