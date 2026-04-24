import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";
import Dashboard from "./pages/Admin/Dashboard";
import Archives from "./pages/Admin/Archives";
import AddProduct from "./pages/Admin/AddProduct";
import AdminLogin from "./pages/Admin/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ import
import AddCategory from "./pages/Admin/AddCategory";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* ADMIN LOGIN */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* 🔒 PROTECTED ADMIN ROUTES */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/archives"
          element={
            <ProtectedRoute>
              <Archives />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add-product"
          element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          }
        />
      
          
          <Route path="/admin/add-category" element={<AddCategory />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;