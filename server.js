const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});


app.use(bodyParser.json()); // JSON veriyi parse etmek için
app.use(express.static(path.join(__dirname, "public")));


app.post("/kaydet", async (req, res) => {
  const { ad, soyad } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO kullanicilar (ad, soyad) VALUES ($1, $2) RETURNING *",
      [ad, soyad]
    );
    res.json({ mesaj: "Başarıyla kaydedildi", kullanici: result.rows[0] });
    console.log("Kullanıcı kaydedildi:", result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ hata: "Kaydedilemedi" });
  }
});

app.get("/kullanicilar", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM kullanicilar ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ hata: "Kullanıcılar getirilemedi" });
  }
});


// / URL'si için index.html'i göster
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/kayit", (req, res) => {
  res.sendFile(path.join(__dirname, "public/kayit.html"));
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "public/admin.html"));
});

// /hakkimizda URL'si için hakkimizda.html'i göster
app.get("/hakkimizda", (req, res) => {
  res.sendFile(path.join(__dirname, "public/hakkimizda.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor 🚀`));
