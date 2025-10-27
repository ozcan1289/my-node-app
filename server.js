const express = require("express");
const { Pool } = require("pg");  // PostgreSQL kütüphanesi
const app = express();
app.use(express.json());
app.use(express.static("public"));


app.use(express.json());

// PostgreSQL bağlantısı
const pool = new Pool({
  host: "oregon-postgres.render.com",        // Render DB host
  port: 5432,
  database: "<deneme_db_lea3>",
  user: "deneme_db_lea3_user",
  password: "LaTwIVxcYb88naseSIQEsQMECIAvl9ND",
  connectionString: process.env.DATABASE_URL,  // Render bağlantısı buradan
  ssl: {
    require: true,
    rejectUnauthorized: false
  }
});

// Test root
app.get("/", (req, res) => {
  //res.send("Render PostgreSQL sunucusu çalışıyor 🚀");
  app.use(express.static("public"));

});

app.get("/test", (req, res) => {
  res.send("Sunucu aktif ✅");
});


// POST ile veri kaydetme
app.post("/gonder", async (req, res) => {
  const { mesaj } = req.body;
  try {
    const sonuc = await pool.query("SELECT NOW() as zaman");
    res.json({ mesaj: "DB bağlantısı OK ✅", zaman: sonuc.rows[0].zaman });
  } catch (err) {
    console.error("Bağlantı hatası:", err);
    res.status(500).json({ hata: "DB bağlantısı başarısız ❌" });
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
