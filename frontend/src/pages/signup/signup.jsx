import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:2000/api/signup", form);

      if (res.data.status) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        alert("Signup success ✅");
        navigate("/");
      } else {
        alert(res.data.message);
      }

    } catch (err) {
      alert("Server error ❌");
    }
  };

  return (
    <div className="signup-page">
      <form onSubmit={handleSignup} className="signup-form">
        <h2>Create Account</h2>

        <input
          name="name"
          placeholder="Username"
          onChange={handleChange}
        />

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

        <button>Signup</button>
      </form>
    </div>
  );
}

export default Signup;