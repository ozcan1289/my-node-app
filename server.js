import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import mainRoutes from "./routes/mainRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// JSON ve statik dosya desteği
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Rotalar
app.use("/", mainRoutes);
app.use("/api", authRoutes);

// Sunucuyu başlat
app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor 🚀`));
