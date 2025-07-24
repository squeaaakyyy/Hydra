const burgerButton = document.querySelector('.header__burger-button');
const menu = document.querySelector('.header__burger-menu');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('active');
  menu.classList.toggle('active');
});




document.addEventListener('DOMContentLoaded', function() {
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentIndex = 0;

    // Функция для показа текущего слайда
    function showSlide(index) {
        // Скрываем все слайды
        sliderItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Показываем текущий слайд
        sliderItems[index].classList.add('active');
    }

    // Обработчик для кнопки "назад"
    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        showSlide(currentIndex);
    });

    // Обработчик для кнопки "вперед"
    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        showSlide(currentIndex);
    });

    // Показываем первый слайд при загрузке
    showSlide(currentIndex);
});



document.addEventListener('DOMContentLoaded', function() {
    if (window.matchMedia("(max-width: 767px)").matches) {
        const sliderItems = document.querySelectorAll('.stages .slider-item');
        const prevButton = document.querySelector('.stages .prev-button');
        const nextButton = document.querySelector('.stages .next-button');
        let currentIndex = 0;

        function showSlide(index) {
            sliderItems.forEach(item => {
                item.classList.remove('active');
            });
            sliderItems[index].classList.add('active');
        }

        prevButton.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
            showSlide(currentIndex);
        });

        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % sliderItems.length;
            showSlide(currentIndex);
        });

        showSlide(currentIndex);
    }
});