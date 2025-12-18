function login() {
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    const passwords = ["ai2025", "sekolahAI", "futureedu", "adminAI"];

    if (passwords.includes(password)) {
        window.location.href = "dashboard.html";
    } else {
        error.textContent = "❌ Password salah! Akses Dunia AI ditolak.";
    }
}
