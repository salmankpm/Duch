import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";


// 🔥 Routes
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();

// ✅ CORS
const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// ✅ MongoDB Connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ DB Error:", err));

// ✅ Routes
app.use("/api/auth", authRoutes);         // login/signup
app.use("/api/products", productRoutes);  // products + archive
app.use("/api/admin", adminRoutes);
app.use("/api", userRoutes); // ✅ prefix
app.use("/api/categories", categoryRoutes);

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("API Running...");
});


// ✅ Start Server
const PORT = process.env.PORT ;

app.listen(PORT, () => {
  console.log(`🚀 App running on http://localhost:${PORT}`);
});