import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mainRoutes from "./routes/mainRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Rotaları dahil et
app.use("/", mainRoutes);
app.use("/api", userRoutes);

app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor 🚀`));



const bodyParser = require("body-parser");
require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

//app.post("/kaydet", async (req, res) => {
//  const { ad, soyad } = req.body;
//
//  try {
//    const result = await pool.query(
//      "INSERT INTO kullanicilar (ad, soyad) VALUES ($1, $2) RETURNING *",
//      [ad, soyad]
//    );
//    res.json({ mesaj: "Başarıyla kaydedildi", kullanici: result.rows[0] });
//    console.log("Kullanıcı kaydedildi:", result.rows[0]);
//  } catch (err) {
//    console.error(err);
//    res.status(500).json({ hata: "Kaydedilemedi" });
//  }
//});









const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor 🚀`));
