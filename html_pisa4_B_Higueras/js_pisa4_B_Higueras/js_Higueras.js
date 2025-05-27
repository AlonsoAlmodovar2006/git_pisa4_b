// Función para manejar el clic en los enlaces del menú
const menuLinks = document.querySelectorAll("nav .nav-link");
menuLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        const section = event.target.textContent.trim();
        console.log(`Has hecho clic en el enlace: ${section}`);
    });
});

// Función para cambiar dinámicamente el título de la página basado en el contenido
const mainTitle = document.querySelector("main h2");
if (mainTitle) {
    document.title = `${mainTitle.textContent} - Pisa4`;
}