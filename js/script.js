const botonSaludo = document.getElementById("boton-saludo");
const mensaje = document.getElementById("mensaje");

botonSaludo.addEventListener("click", function () {
    if (mensaje.style.display === "block") {
        mensaje.style.display = "none";
        botonSaludo.textContent = "Conoce más sobre mí";
    } else {
        mensaje.style.display = "block";
        botonSaludo.textContent = "Ocultar mensaje";
    }
});
