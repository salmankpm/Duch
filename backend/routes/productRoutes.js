import express from "express";
import {
  getProducts,
  getArchivedProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  restoreProduct,
  permanentDelete,
} from "../controllers/productController.js";

const router = express.Router();

// Active products
router.get("/", getProducts);

// Archived
router.get("/archived", getArchivedProducts);

// Add
router.post("/", addProduct);

// Update
router.put("/:id", updateProduct);

// Soft delete (archive)
router.delete("/:id", deleteProduct);

// Restore
router.put("/restore/:id", restoreProduct);

// Permanent delete
router.delete("/permanent/:id", permanentDelete);

router.post("/products", async (req, res) => {
  try {
    const { name, price, image, category } = req.body;

    const newProduct = new Product({
      name,
      price,
      image,
      category, // ✅ SAVE HERE
    });

    await newProduct.save();

    res.json(newProduct);

  } catch (err) {
    res.status(500).json({ message: "Error adding product" });
  }
});

export default router;