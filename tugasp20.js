// Smooth scroll navigation (AMAN)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Button info (dipanggil dari HTML)
function showInfo() {
  alert(
    "Website ini dibuat menggunakan HTML, CSS, JavaScript, dan Bootstrap.\n\n" +
    "Hosting: GitHub Pages\n" +
    "Tujuan: Tugas Mata Kuliah Pemrograman Web"
  );
}

// Console message biar kelihatan 'niat'
console.log(
  "%cWebsite Loaded Successfully 🚀",
  "background:#0d6efd;color:white;padding:8px;font-size:14px;border-radius:4px"
);