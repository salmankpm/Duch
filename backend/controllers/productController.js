import Product from "../models/Product.js";

// ✅ Get Active Products
export const getProducts = async (req, res) => {
  const products = await Product.find({ isArchived: false });
  res.json(products);
};

// ✅ Get Archived
export const getArchivedProducts = async (req, res) => {
  const products = await Product.find({ isArchived: true });
  res.json(products);
};

// ✅ Add Product
export const addProduct = async (req, res) => {
  const product = new Product(req.body);
  const saved = await product.save();
  res.json(saved);
};

// ✅ Update
export const updateProduct = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

// ✅ Archive
export const deleteProduct = async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, {
    isArchived: true,
  });
  res.json({ message: "Product archived" });
};
// RESTORE PRODUCT
export const restoreProduct = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findByIdAndUpdate(
    id,
    { isArchived: false },
    { new: true }
  );

  res.json(product);
};

// PERMANENT DELETE
export const permanentDelete = async (req, res) => {
  const { id } = req.params;

  await Product.findByIdAndDelete(id);

  res.json({ message: "Product permanently deleted" });
};