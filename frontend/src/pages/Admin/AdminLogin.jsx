import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";
import "./AdminLogin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // ✅ validation
    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await API.post("/admin/login", form);

      // ✅ IMPORTANT: store only flag (clean)
      localStorage.setItem("admin", "true");

      // optional: store admin data
      localStorage.setItem("adminData", JSON.stringify(res.data));

      alert("Login successful ✅");

      // ✅ redirect
      navigate("/admin/dashboard");

    } catch (err) {
      alert("Invalid credentials ❌");
      console.error(err);
    }
  };

  return (
    <div className="admin-login">
      <form onSubmit={handleLogin} className="login-box">
        <h2>Admin Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}

export default AdminLogin;