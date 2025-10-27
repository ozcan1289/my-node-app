// Div ve buton referansları
const adInput = document.getElementById("ad");
const soyadInput = document.getElementById("soyad");
const gonderBtn = document.getElementById("gonder");
const sonucDiv = document.getElementById("sonuc");

gonderBtn.addEventListener("click", () => {
  const ad = adInput.value;
  const soyad = soyadInput.value;

  sonucDiv.innerText = `Gönderilen Bilgi: ${ad} ${soyad}`;

  // İstersen inputları temizleyebilirsin
  adInput.value = "";
  soyadInput.value = "";
});