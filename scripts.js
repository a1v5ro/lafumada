function nextImage(sliderId) {
    const slider = document.getElementById(sliderId);
    const group = slider.querySelector('.slider-group');
    const images = group.children;
    const imageWidth = images[0].getBoundingClientRect().width; // Incluye márgenes
    group.style.transition = 'transform 0.5s ease-in-out';
    group.style.transform = `translateX(-${imageWidth}px)`;
    setTimeout(() => {
        group.style.transition = 'none';
        group.style.transform = 'translateX(0)';
        group.appendChild(images[0]);
    }, 500); // Tiempo igual al de la transición
}

function prevImage(sliderId) {
    const slider = document.getElementById(sliderId);
    const group = slider.querySelector('.slider-group');
    const images = group.children;
    const imageWidth = images[0].getBoundingClientRect().width; // Incluye márgenes
    group.style.transition = 'none';
    group.style.transform = `translateX(-${imageWidth}px)`;
    group.insertBefore(images[images.length - 1], images[0]);
    setTimeout(() => {
        group.style.transition = 'transform 0.5s ease-in-out';
        group.style.transform = 'translateX(0)';
    }, 10);
}

function autoSlide(sliderId) {
    setInterval(() => nextImage(sliderId), 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    autoSlide('cateringSlider');
    autoSlide('alquilerSlider');

    // Inicializa el botón de menú para dispositivos móviles
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('header nav.mobile');

    menuToggle.addEventListener('click', () => {
        const isMenuVisible = mobileMenu.style.display === 'flex';
        mobileMenu.style.display = isMenuVisible ? 'none' : 'flex';
    });
});

// Cambiar opacidad del header al hacer scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const opacity = Math.max(0.5, 1 - window.scrollY / 300); // Calcula opacidad
    header.style.backgroundColor = `rgba(51, 51, 51, ${opacity})`; // Ajusta el color del fondo
});

