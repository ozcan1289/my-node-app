// Div ve buton referansları
const div = document.getElementById("icerik");
const buton = document.getElementById("gonder");

// Butona tıklanınca div içeriğini değiştir
buton.addEventListener("click", () => {
  div.innerText = "Butona bastın! JS ile değiştirildi 🎉";
});

// Opsiyonel: otomatik değişim (her 2 saniye farklı mesaj)
const mesajlar = ["Selam!", "Nasılsın?", "JS ile interaktif!", "Render çalışıyor 🚀"];
let index = 0;

setInterval(() => {
  div.innerText = mesajlar[index];
  index = (index + 1) % mesajlar.length;
}, 2000);
