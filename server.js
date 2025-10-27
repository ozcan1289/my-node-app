const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Tek div ile gönderilen mesajı geri döndüren endpoint
app.post("/echo", (req, res) => {
  const { mesaj } = req.body;
  res.json({ mesaj: mesaj || "Boş mesaj gönderildi" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor 🚀`));
