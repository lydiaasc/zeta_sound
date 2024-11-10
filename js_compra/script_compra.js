// ABRIR POPUP ver mas
   document.getElementById('ver-mas').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('popup2-compra').style.display = 'flex'; 
});

// CIERRE POPUP ver mas
document.getElementById('cerrar-popup2').addEventListener('click', function() {
    document.getElementById('popup2-compra').style.display = 'none'; 
});


// Seleccionar todos los botones que deberían abrir el popup
document.querySelectorAll('.abrir-popup3').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('popup3-carrito').style.display = 'flex'; 
    });
});

// CIERRE POPUP carrito
document.getElementById('cerrar-popup3').addEventListener('click', function() {
    document.getElementById('popup3-carrito').style.display = 'none'; 
});
