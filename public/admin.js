const tablo = document.getElementById("kullaniciTablo");
const yenileBtn = document.getElementById("yenile");

async function kullanicilariGetir() {
  tablo.innerHTML = "<tr><td colspan='3'>Yükleniyor...</td></tr>";

  try {
    const res = await fetch("/kullanicilar");
    const data = await res.json();

    if (res.ok) {
      tablo.innerHTML = data
        .map(k => `<tr><td>${k.id}</td><td>${k.ad}</td><td>${k.soyad}</td></tr>`)
        .join("");
    } else {
      tablo.innerHTML = `<tr><td colspan='3'>Hata: ${data.hata}</td></tr>`;
    }
  } catch (err) {
    console.error(err);
    tablo.innerHTML = `<tr><td colspan='3'>Sunucu hatası</td></tr>`;
  }
}

yenileBtn.addEventListener("click", kullanicilariGetir);
window.addEventListener("load", kullanicilariGetir);
