document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const responseMsg = document.getElementById("responseMsg");

  loginBtn.addEventListener("click", async () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      responseMsg.textContent = "Lütfen tüm alanları doldurun.";
      responseMsg.className = "text-center text-sm text-red-500 mt-4";
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        responseMsg.textContent = "Giriş başarılı! 🎉";
        responseMsg.className = "text-center text-sm text-green-600 mt-4";
        setTimeout(() => (window.location.href = "/"), 1500);
      } else {
        responseMsg.textContent = data.hata || "Giriş başarısız!";
        responseMsg.className = "text-center text-sm text-red-500 mt-4";
      }
    } catch {
      responseMsg.textContent = "Sunucuya bağlanılamadı.";
      responseMsg.className = "text-center text-sm text-red-500 mt-4";
    }
  });
});
