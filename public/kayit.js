const adInput = document.getElementById("ad");
const soyadInput = document.getElementById("soyad");
const gonderBtn = document.getElementById("gonder");
const sonucDiv = document.getElementById("sonuc");

gonderBtn.addEventListener("click", async () => {
  const ad = adInput.value;
  const soyad = soyadInput.value;

  if (!ad || !soyad) {
    sonucDiv.innerText = "Lütfen ad ve soyad girin!";
    return;
  }

  try {
    const response = await fetch("/kaydet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ad, soyad }),
    });

    const data = await response.json();

    if (response.ok) {
      sonucDiv.innerText = `${data.mesaj}: ${data.kullanici.ad} ${data.kullanici.soyad}`;
      adInput.value = "";
      soyadInput.value = "";
    } else {
      sonucDiv.innerText = data.hata;
    }
  } catch (err) {
    console.error(err);
    sonucDiv.innerText = "Sunucuya ulaşılamadı.";
  }
});
