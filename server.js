const express = require("express");
const { Pool } = require("pg");  // PostgreSQL kütüphanesi
const app = express();

app.use(express.json());

// PostgreSQL bağlantısı
const pool = new Pool({
  host: "<dpg-d3vpnr9r0fns7387jhs0-a>",        // Render DB host
  port: 5432,
  database: "<deneme_db_lea3>",
  user: "<deneme_db_lea3_user>",
  password: "<LaTwIVxcYb88naseSIQEsQMECIAvl9ND>",
  ssl: { rejectUnauthorized: false } // Render/PostgreSQL için SSL
});

// Test root
app.get("/", (req, res) => {
  res.send("Render PostgreSQL sunucusu çalışıyor 🚀");
});

// POST ile veri kaydetme
app.post("/gonder", async (req, res) => {
  const { mesaj } = req.body;
  try {
    const sonuc = await pool.query(
      "INSERT INTO deneme_tablosu (mesaj) VALUES ($1) RETURNING *",
      [mesaj]
    );
    res.json({ mesaj: "Veri kaydedildi ✅", veri: sonuc.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ hata: "Veri kaydedilemedi" });
  }
});

// GET ile verileri çekme
app.get("/veriler", async (req, res) => {
  try {
    const sonuc = await pool.query("SELECT * FROM deneme_tablosu");
    res.json(sonuc.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ hata: "Veri çekilemedi" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor`));
