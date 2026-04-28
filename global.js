// Handle Contact Form (hanya jika ada di halaman tersebut)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Mengirim...";
        submitBtn.disabled = true;

        const formData = new FormData(contactForm);

        fetch("https://formsubmit.co/ajax/jshkrsna@gmail.com", {
            method: "POST",
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert("Pesan berhasil dikirim ke email Anda!");
                contactForm.reset();
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            })
            .catch(error => {
                console.error(error);
                alert("Terjadi kesalahan. Pesan gagal dikirim.");
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            });
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