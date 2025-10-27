const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// / URL'si için index.html'i göster
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// /hakkimizda URL'si için hakkimizda.html'i göster
app.get("/hakkimizda", (req, res) => {
  res.sendFile(path.join(__dirname, "public/hakkimizda.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor 🚀`));
