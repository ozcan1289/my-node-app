const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Render sunucusu çalışıyor 🚀");
});

app.post("/gonder", (req, res) => {
  console.log("Render'dan gelen veri:", req.body);
  res.json({ mesaj: "Render veriyi aldı ✅", gelen: req.body });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor`));
