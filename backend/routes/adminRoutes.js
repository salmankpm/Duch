import express from "express";

const router = express.Router();

// simple static admin (for now)
const ADMIN = {
  email: "admin@gmail.com",
  password: "1234",
};

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN.email && password === ADMIN.password) {
    res.json({ message: "Login success", admin: true });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

export default router;