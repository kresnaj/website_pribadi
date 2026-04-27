// Handle Contact Form (hanya jika ada di halaman tersebut)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const subject = encodeURIComponent("Pesan Baru dari Website: " + name);
        const body = encodeURIComponent("Nama: " + name + "\nEmail: " + email + "\n\nPesan:\n" + message);
        window.location.href = `mailto:jshkrsna@gmail.com?subject=${subject}&body=${body}`;
        alert("Aplikasi email Anda akan terbuka untuk mengirim pesan ini!");
    });
}

// Handle Welcome Modal (hanya jika ada di halaman tersebut)
window.onload = function () {
    const welcomeModalEl = document.getElementById('welcomeModal');
    if (welcomeModalEl) {
        var myModal = new bootstrap.Modal(welcomeModalEl);
        myModal.show();
    }
};