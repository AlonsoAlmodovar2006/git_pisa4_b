// js_pisa4_LETRAGRUPO_apellido1/js_apellido1.js

// Asegúrate que el DOM está completamente cargado antes de ejecutar scripts
document.addEventListener('DOMContentLoaded', function () {

    console.log("Script personalizado js_apellido1.js cargado y DOM listo.");

    // Ejemplo: Añadir clase 'active' al enlace de navegación de la página actual
    // Esto es una forma básica. Podrías hacerlo más robusto comparando el `href` completo.
    const currentPage = window.location.pathname.split("/").pop(); // Obtiene el nombre del archivo actual
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split("/").pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
            // Si el enlace está en un dropdown, también se podría activar el padre.
        }
    });


    // Puedes añadir más funcionalidades aquí:
    // - Validaciones de formularios (si tienes)
    // - Interacciones dinámicas
    // - Efectos visuales no cubiertos por CSS
    // - Carga de datos asíncrona (AJAX), si fuera necesario (poco probable para este proyecto)

    // Ejemplo de una función simple:
    // function miFuncion() {
    //     alert("¡Hola desde JavaScript personalizado!");
    // }
    // Si tienes un botón con id="miBoton", podrías hacer:
    // const miBoton = document.getElementById('miBoton');
    // if(miBoton) {
    //    miBoton.addEventListener('click', miFuncion);
    // }

});