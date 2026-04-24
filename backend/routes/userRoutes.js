import express from "express";
import User from "../models/User.js";

const router = express.Router();


// ✅ SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await User.findOne({ email });

    if (existing) {
      return res.json({
        status: false,
        message: "User already exists",
      });
    }

    const user = new User({ name, email, password });
    await user.save();

    res.json({
      status: true,
      user,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup error" });
  }
});


// ✅ LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        status: false,
        message: "User not found",
      });
    }

    if (user.password !== password) {
      return res.json({
        status: false,
        message: "Wrong password",
      });
    }

    res.json({
      status: true,
      user,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Login error" });
  }
});

export default router;