const express = require("express");
const app = express();
const PORT = 3000;

// JSON verilerini okuyabilmek için
app.use(express.json());

// Tarayıcıdan gelen isteği karşılayalım
app.post("/gonder", (req, res) => {
  console.log("Gelen veri:", req.body); // terminalde göreceksin
  res.json({ mesaj: "Sunucu veriyi aldı ✅", gelen: req.body });
});

app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});
