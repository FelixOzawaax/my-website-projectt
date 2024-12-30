// Menambahkan interaktivitas sederhana untuk setiap ikon sosial media
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        alert('You are being redirected to ' + icon.querySelector('img').alt);
    });
});
