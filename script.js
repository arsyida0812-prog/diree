function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "") {
        alert("Nama pengguna harus diisi!");
        return;
    }

    if (pass === "12345678") {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("mainPage").classList.remove("hidden");

        alert("Selamat datang, " + user + " 👋");
    } else {
        alert("Password salah! Gunakan password: 12345678");
    }
}

function logout() {
    document.getElementById("mainPage").classList.add("hidden");
    document.getElementById("logoutPage").classList.remove("hidden");
}

function backToLogin() {
    document.getElementById("logoutPage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");

    // reset input
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

function processImage(event) {
    const img = document.getElementById("preview");
    img.src = URL.createObjectURL(event.target.files[0]);
    img.style.display = "block";

    const classes = [
        {
            name: "Lingkungan Bersih 🌱",
            edu: "Lingkungan bersih menunjukkan kepedulian masyarakat terhadap kesehatan dan kebersihan."
        },
        {
            name: "Lingkungan Tercemar 🏭",
            edu: "Lingkungan tercemar memerlukan edukasi sosial untuk mengurangi dampak limbah dan polusi."
        },
        {
            name: "Lingkungan Hijau 🌳",
            edu: "Lingkungan hijau mendukung keseimbangan alam dan keberlanjutan kehidupan."
        }
    ];

    const random = classes[Math.floor(Math.random() * classes.length)];

    document.getElementById("resultBox").classList.remove("hidden");
    document.getElementById("classification").innerHTML =
        "<strong>Kategori:</strong> " + random.name;

    document.getElementById("education").innerHTML =
        "<strong>Edukasi Sosial:</strong> " + random.edu;
}
