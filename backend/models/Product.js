import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: String,
    category: String,
    isArchived: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// ✅ IMPORTANT (default export)
const Product = mongoose.model("Product", productSchema);

export default Product;