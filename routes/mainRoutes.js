import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mainRoutes from "./routes/mainRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
res.sendFile(path.join(__dirname, "../public/index.html"));  // ana sayfa
res.sendFile(path.join(__dirname, "../public/login.html"));  // login sayfası


// Rotalar
app.use("/", mainRoutes);
app.use("/api", authRoutes);

app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor 🚀`));
