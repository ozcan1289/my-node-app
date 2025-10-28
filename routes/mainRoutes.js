import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ana sayfa
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Login sayfası
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

export default router;
