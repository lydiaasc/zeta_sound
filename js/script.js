AOS.init();

$(document).ready(function () {
    // Inicializamos el slider usando Swiper.js
    var swiper = new Swiper(".tranding-slider", {
      loop: true,
      slidesPerView: 1,        // Cantidad de slides visibles
      spaceBetween: 20,        // Espacio entre slides
      centeredSlides: true,    // Centramos el slide activo
      pagination: {
        el: ".swiper-pagination",
        clickable: true,       // Paginación clickeable
      },
      navigation: {
        nextEl: ".swiper-button-next",  // Botón siguiente
        prevEl: ".swiper-button-prev",  // Botón anterior
      },
      breakpoints: {            // Ajuste responsivo
        500: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  });
  
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