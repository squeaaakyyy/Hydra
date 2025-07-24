document.addEventListener('DOMContentLoaded', function() {
    // Бургер-меню
    const burgerButton = document.querySelector('.header__burger-button');
    const menu = document.querySelector('.header__burger-menu');
    
    if (burgerButton && menu) {
        burgerButton.addEventListener('click', () => {
            burgerButton.classList.toggle('active');
            menu.classList.toggle('active');
        });
    }

    // Универсальная функция для слайдеров
    function initSlider(containerSelector) {
        if (window.matchMedia("(max-width: 767px)").matches || !containerSelector.includes('stages') && !containerSelector.includes('contact')) {
            const sliderItems = document.querySelectorAll(`${containerSelector} .slider-item, ${containerSelector} .contact__slider-item`);
            const prevButton = document.querySelector(`${containerSelector} .prev-button`);
            const nextButton = document.querySelector(`${containerSelector} .next-button`);
            
            if (!sliderItems.length || !prevButton || !nextButton) return;
            
            let currentIndex = 0;

            const showSlide = (index) => {
                sliderItems.forEach(item => item.classList.remove('active'));
                sliderItems[index].classList.add('active');
            };

            const navigate = (direction) => {
                currentIndex = (currentIndex + direction + sliderItems.length) % sliderItems.length;
                showSlide(currentIndex);
            };

            prevButton.addEventListener('click', () => navigate(-1));
            nextButton.addEventListener('click', () => navigate(1));

            showSlide(currentIndex);
        }
    }

    // Инициализация всех слайдеров
    initSlider('.technologies');
    initSlider('.stages');
    initSlider('.contact');
});