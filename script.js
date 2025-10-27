const div = document.getElementById("icerik");

// 3 saniye sonra div içeriğini değiştir
setTimeout(() => {
  div.innerText = "Merhaba! Şimdi JS ile değiştirildi 🎉";
}, 3000);

//// Her 2 saniyede bir farklı mesaj göster
//const mesajlar = ["Selam!", "Nasılsın?", "JS ile interaktif!", "Render çalışıyor 🚀"];
//let index = 0;
//
//setInterval(() => {
//  div.innerText = mesajlar[index];
//  index = (index + 1) % mesajlar.length;
//}, 2000);
//