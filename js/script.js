AOS.init();

$(document).ready(function () {
    var swiper = new Swiper(".tranding-slider", {
      loop: true,
      slidesPerView: 1,        
      spaceBetween: 20,       
      centeredSlides: true,    
      pagination: {
        el: ".swiper-pagination",
        clickable: true,       
      },
      navigation: {
        nextEl: ".swiper-button-next",  
        prevEl: ".swiper-button-prev",  
      },
      breakpoints: {           
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
    if (window.scrollY > 10) { 
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ARTISTAS 
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop:true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2.5,
    slideShadows: true,
  },
  autoplay:{

    delay:3000,
    disableOnInteraction:false,
  }

});

function showModalAndStartCountdown() {
  const countdownElement = document.getElementById('countdown');
  new bootstrap.Modal(document.getElementById('exampleModal')).show();
}




