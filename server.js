const express = require("express");
const { Pool } = require("pg"); // PostgreSQL için
const bodyParser = require("body-parser");
const path = require("path");
const app = express();


// PostgreSQL bağlantısı
const pool = new Pool({
  user: "deneme_db_lea3_user",
  host: "dpg-d3vpnr9r0fns7387jhs0-a",
  database: "deneme_db_lea3",
  password: "LaTwIVxcYb88naseSIQEsQMECIAvl9ND",
  port: 5432,
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
  } catch (err) {
    console.error(err);
    res.status(500).json({ hata: "Kaydedilemedi" });
  }
});

// / URL'si için index.html'i göster
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/kayit", (req, res) => {
  res.sendFile(path.join(__dirname, "public/kayit.html"));
});


// /hakkimizda URL'si için hakkimizda.html'i göster
app.get("/hakkimizda", (req, res) => {
  res.sendFile(path.join(__dirname, "public/hakkimizda.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor 🚀`));
