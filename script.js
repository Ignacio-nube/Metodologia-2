// IMPORTANTE: Reemplaza esta URL con la de tu repositorio de GitHub.
const githubRepoURL = "https://github.com/Ignacio-nube/Metodologia-2.git";

// Generar el código QR
const qrCodeContainer = document.getElementById('qrcode');
if (qrCodeContainer) {
    new QRCode(qrCodeContainer, {
        text: githubRepoURL,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

// Manejo del formulario (ejemplo básico)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
        alert("Formulario enviado con éxito (simulación).");
        contactForm.reset(); // Limpia el formulario
    });
}
