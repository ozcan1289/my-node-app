const div = document.getElementById("icerik");

    buton.addEventListener("click", async () => {
      try {
        // Sunucuya div içeriğini gönder
        const response = await fetch("/echo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mesaj: div.innerText })
        });

        const data = await response.json();
        // Geri gelen mesajı div içinde göster
        div.innerText = data.mesaj;
      } catch (err) {
        div.innerText = "Hata: " + err.message;
      }
    });