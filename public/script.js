// Div ve buton referansları
const div = document.getElementById("icerik");
const form = document.getElementById("form");
const sonucDiv = document.getElementById("sonuc");


setTimeout(() => {
  div.innerText = "Merhaba! Şimdi JS ile değiştirildi 🎉";
}, 3000);


form.addEventListener("submit", (e) => {
  e.preventDefault(); // Sayfanın yenilenmesini engelle

  const ad = document.getElementById("ad").value;
  const soyad = document.getElementById("soyad").value;

  sonucDiv.innerText = `Gönderilen Bilgi: ${ad} ${soyad}`;

  // İstersen formu sıfırlayabilirsin
  form.reset();
});
