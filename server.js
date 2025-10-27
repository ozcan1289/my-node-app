// server.js
const express = require("express");
const app = express();

// JSON verilerini çözmek için
app.use(express.json());

// Test için kök (/) rotası
app.get("/", (req, res) => {
  res.send("Render sunucusu ÇALIŞIYOR  mu acaba🚀");
  console.log("Özcan Buradayım Merak Etme");
});

// POST isteği için test rotası
app.post("/gonder", (req, res) => {
  console.log("Render'dan gelen veri:", req.body);
  res.json({
    mesaj: "Render veriyi aldı ✅",
    gelenVeri: req.body
  });
});

// Render otomatik PORT verir
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor`));
