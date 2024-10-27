// GALERÍAS

const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

images.forEach(img => {
    const clone = img.cloneNode();
    gallery.appendChild(clone);
});

const gallery2 = document.querySelector('.gallery2');
const images2 = gallery2.querySelectorAll('img');

images2.forEach(img => {
    const clone = img.cloneNode();
    gallery2.appendChild(clone);
});

// FORMULARIO

document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Error: Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
        return; 
    }

    window.location.href = 'index.html';
});
