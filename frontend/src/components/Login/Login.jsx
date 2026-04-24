import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../button/button";
import Input from "../input/input";
import "./Login.css"


function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(field, value) {
    setForm({ ...form, [field]: value });
  }

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:2000/api/auth/login", form);

      localStorage.setItem("token", res.data.token);
      alert("Login success");

      navigate("/");
    } catch (err) {
      alert(err.response?.data || "Error");
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <Input placeholder="Email" onChange={(v) => handleChange("email", v)} />
      <Input type="password" placeholder="Password" onChange={(v) => handleChange("password", v)} />

      <Button name="Login" />
    </form>
  );
}

export default Login;