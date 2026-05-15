import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
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

    try {
      const res = await axios.post("http://localhost:2000/api/login", form);

      if (res.data.status) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        alert("Login success ✅");
        navigate("/");
      } else {
        alert(res.data.message);
      }

    } catch (err) {
      alert("Server error ❌");
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button>Login</button>

        <p onClick={() => navigate("/signup")}>
          Don't have account? Signup
        </p>
      </form>
    </div>
  );
}

export default Login;