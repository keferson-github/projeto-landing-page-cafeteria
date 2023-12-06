const scrollAnima = document.querySelector('[data-anima="scroll"]');

const halfOfTheWindow = window.innerHeight * 5;

function animationScroll() {
    const topItem = scrollAnima.getBoundingClientRect().top;

    const visibleItem = topItem - halfOfTheWindow < 0;

    if (visibleItem) {
        scrollAnima.classList.add('show-btn');
    } else {
        scrollAnima.classList.remove('show-btn');
    };
};

window.addEventListener('scroll', animationScroll);