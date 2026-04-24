import express from "express";
import { login, postsignup } from "../controllers/controller.js";

const router = express.Router();

router.post("/signup", postsignup);
router.post("/login", login);

export default router;