import express from "express";
import Category from "../models/Category.js";

const router = express.Router();

// ADD CATEGORY
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;

    const existing = await Category.findOne({ name });

    if (existing) {
      return res.json({
        status: false,
        message: "Category already exists",
      });
    }

    const newCategory = new Category({ name });
    await newCategory.save();

    res.json({
      status: true,
      category: newCategory,
    });

  } catch (err) {
    res.status(500).json({ message: "Error creating category" });
  }
});

// GET ALL
router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

export default router;