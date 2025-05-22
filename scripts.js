function nextImage(sliderId) {
    const slider = document.getElementById(sliderId);
    const group = slider.querySelector('.slider-group');
    const images = group.children;
    const imageWidth = images[0].getBoundingClientRect().width;
    group.style.transition = 'transform 0.5s ease-in-out';
    group.style.transform = `translateX(-${imageWidth}px)`;
    setTimeout(() => {
        group.style.transition = 'none';
        group.style.transform = 'translateX(0)';
        group.appendChild(images[0]);
    }, 500);
}

function prevImage(sliderId) {
    const slider = document.getElementById(sliderId);
    const group = slider.querySelector('.slider-group');
    const images = group.children;
    const imageWidth = images[0].getBoundingClientRect().width;
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

    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('header nav.mobile');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isMenuVisible = mobileMenu.style.display === 'flex';
            mobileMenu.style.display = isMenuVisible ? 'none' : 'flex';
        });
    }
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const opacity = Math.max(0.5, 1 - window.scrollY / 300);
    header.style.backgroundColor = `rgba(51, 51, 51, ${opacity})`;
});
