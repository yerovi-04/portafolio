document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Formulario enviado. ¡Gracias por tu mensaje!');
    });
});
