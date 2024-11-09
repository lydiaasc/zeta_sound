   // Abrir el popup al hacer clic en "Ver más"
   document.getElementById('ver-mas').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('popup2-compra').style.display = 'flex'; // Muestra el popup
});

// Cerrar el popup al hacer clic en el botón "Cerrar"
document.getElementById('cerrar-popup2').addEventListener('click', function() {
    document.getElementById('popup2-compra').style.display = 'none'; // Oculta el popup
});
