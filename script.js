// Nomor WhatsApp tujuan dalam format internasional tanpa tanda + atau spasi.
const whatsappNumber = "6285694914885";

function whatsappLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const generalMessage = "Halo Ever After Invitation, saya ingin konsultasi undangan pernikahan digital. Mohon informasi lebih lanjut.";
document.getElementById("mainWhatsapp").href = whatsappLink(generalMessage);
document.getElementById("floatingWhatsapp").href = whatsappLink(generalMessage);

document.querySelectorAll("[data-package]").forEach((button) => {
  button.href = whatsappLink(`Halo Ever After Invitation, saya tertarik dengan paket ${button.dataset.package}. Mohon informasi pemesanan lebih lanjut.`);
});

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});
