import express from "express";
const router = express.Router();

// Basit bir giriş doğrulama (örnek)
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@mail.com" && password === "1234") {
    res.json({ mesaj: "Giriş başarılı" });
  } else {
    res.status(401).json({ hata: "E-posta veya şifre hatalı" });
  }
});

export default router;
