import express from "express";

const router = express.Router();

// Örnek: kullanıcıları listeleme
router.get("/users", (req, res) => {
  res.json([
    { id: 1, ad: "Ahmet", soyad: "Yılmaz" },
    { id: 2, ad: "Ayşe", soyad: "Demir" },
  ]);
});

// Örnek: yeni kullanıcı ekleme
router.post("/users", (req, res) => {
  const { ad, soyad } = req.body;
  if (!ad || !soyad) {
    return res.status(400).json({ hata: "Eksik bilgi!" });
  }
  res.json({ mesaj: "Kullanıcı eklendi", ad, soyad });
});

export default router;
