const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Filter galeri produk
const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    products.forEach((product) => {
      product.hidden = filter !== "semua" && product.dataset.category !== filter;
    });
  });
});

// Tombol pesan produk membuka WhatsApp dengan nama produk otomatis
const WHATSAPP_NUMBER = "6281234567890"; // GANTI dengan nomor WhatsApp bisnis, gunakan kode negara tanpa tanda +
document.querySelectorAll(".product-order").forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.dataset.product;
    const message = `Halo, saya ingin bertanya tentang ${productName}. Apakah produk ini masih tersedia?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
});

// Form kontak diarahkan ke WhatsApp
document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !message) {
    alert("Mohon isi nama dan pesan terlebih dahulu.");
    return;
  }

  const text = `Halo, saya ${name}.${phone ? ` Nomor telepon: ${phone}.` : ""}\n\nPesan: ${message}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
});

document.getElementById("year").textContent = new Date().getFullYear();
