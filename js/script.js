// CARRUSEL
const carousel = document.querySelector('.carousel');
let scrollAmount = 0;

// Mover el carrusel hacia la derecha
function slideNext() {
    scrollAmount += 260; // Ajusta el valor según el ancho de cada elemento
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
}

// Mover el carrusel hacia la izquierda
function slidePrev() {
    scrollAmount -= 260;
    if (scrollAmount < 0) scrollAmount = 0; // Evitar desplazamiento negativo
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
}



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



// COLOR MENU

document.addEventListener("scroll", function() {
    const navbar = document.querySelector(".collapse.navbar-collapse");
    if (window.scrollY > 10) { // Cambia el valor si quieres que el fondo aparezca antes o después
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});