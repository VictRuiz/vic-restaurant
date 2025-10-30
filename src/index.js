// Importar estilos PRIMERO
import './style.css';

// Importar módulos
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎨 Vic Restaurant cargando...');
    
    // Cargar página de inicio
    loadHome();

    // Efecto scroll en header
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Event listeners para navegación
    const homeBtn = document.getElementById('btn-home');
    const menuBtn = document.getElementById('btn-menu');
    const contactBtn = document.getElementById('btn-contact');

    homeBtn.addEventListener('click', () => {
        loadHome();
        setActiveButton(homeBtn);
    });

    menuBtn.addEventListener('click', () => {
        loadMenu();
        setActiveButton(menuBtn);
    });

    contactBtn.addEventListener('click', () => {
        loadContact();
        setActiveButton(contactBtn);
    });
    
    console.log('✅ Vic Restaurant cargado correctamente');
});

// Función para activar botón
function setActiveButton(button) {
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

// Hacer loadMenu accesible globalmente para el botón CTA
window.loadMenu = loadMenu;