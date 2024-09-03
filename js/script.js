document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slides = document.querySelector('.slides');
    let index = 0;

    const updateSlidePosition = () => {
        const slideWidth = document.querySelector('.menu-slide').offsetWidth;
        slides.style.transform = `translateX(-${index * slideWidth}px)`;
    };

    prevButton.addEventListener('click', () => {
        index = Math.max(index - 1, 0);
        updateSlidePosition();
    });

    nextButton.addEventListener('click', () => {
        const maxIndex = document.querySelectorAll('.menu-slide').length - 1;
        index = Math.min(index + 1, maxIndex);
        updateSlidePosition();
    });

    // Initialize slider position
    updateSlidePosition();
});
